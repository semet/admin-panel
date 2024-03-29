import { Fragment, useState } from 'react'
import { menus } from './menus'
import Link from 'next/link'
import { Collapse } from 'react-collapse'
import { IoIosArrowDown, IoIosArrowRoundForward } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

export const SidebarContent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleMenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }
  return (
    <nav className="my-md flex flex-col items-start">
      <ul className="flex w-full flex-col gap-3 px-md">
        {menus.map((menu, index) => (
          <Fragment key={menu.id}>
            {menu.link && !menu.children ? (
              <li key={menu.id}>
                <Link
                  href={menu.link}
                  className="group flex items-center gap-2"
                >
                  <menu.icon className="text-lg text-slate-500 group-hover:text-primary-800" />
                  <span className="text-sm text-slate-300 group-hover:text-primary-500">
                    {menu.title}
                  </span>
                </Link>
              </li>
            ) : (
              <li
                key={menu.id}
                className="group cursor-pointer"
                onClick={() => toggleMenu(index)}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <menu.icon className="text-lg text-slate-500 group-hover:text-primary-800" />
                    <span className="text-sm text-slate-300 group-hover:text-primary-500">
                      {menu.title}
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={twMerge([
                      'text-xl text-slate-500 transition-all duration-300 ease-in-out group-hover:text-primary-800',
                      openIndex === index
                        ? 'rotate-180 transform'
                        : 'rotate-0 transform'
                    ])}
                  />
                </div>
                <Collapse isOpened={openIndex === index}>
                  <ul className="mt-2 flex flex-col gap-2 pl-[25px]">
                    {menu.children?.map((child) => (
                      <li key={child.link}>
                        <Link
                          href={child.link}
                          className="flex items-center gap-1 text-slate-500 transition-all duration-300 ease-in-out hover:ml-[2px] hover:text-primary-800"
                        >
                          <IoIosArrowRoundForward />
                          <span className="text-sm">{child.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  )
}
