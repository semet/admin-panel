import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Collapse } from 'react-collapse'
import { IoIosArrowDown, IoIosArrowRoundForward } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { Menu, menus } from './menus'

export const SidebarContent = () => {
  const { pathname } = useRouter()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleMenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  const currentPaths = pathname.split('/')
  const firstPath = currentPaths[1]

  const isActiveParent = (menu: Menu) => {
    if (menu.children) {
      return menu.children.some(
        (child) =>
          child.link === pathname ||
          child.link === firstPath.padStart(firstPath.length + 1, '/')
      )
    }

    return false
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
                  <menu.icon
                    className={twMerge([
                      'text-lg text-slate-500 group-hover:text-primary-800',
                      pathname === menu.link
                        ? 'text-primary-800'
                        : 'text-slate-500'
                    ])}
                  />
                  <span
                    className={twMerge([
                      'text-sm text-slate-300 group-hover:text-primary-500',
                      pathname === menu.link
                        ? 'font-semibold text-primary-500'
                        : 'font-normal'
                    ])}
                  >
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
                    <menu.icon
                      className={twMerge([
                        'text-lg text-slate-500 group-hover:text-primary-800',
                        isActiveParent(menu)
                          ? 'text-primary-800'
                          : 'text-slate-500'
                      ])}
                    />
                    <span
                      className={twMerge([
                        'text-sm text-slate-300 group-hover:text-primary-500',
                        isActiveParent(menu)
                          ? 'text-primary-500'
                          : 'text-slate-300'
                      ])}
                    >
                      {menu.title}
                    </span>
                  </div>
                  <IoIosArrowDown
                    className={twMerge([
                      'text-xl text-slate-500 transition-all duration-300 ease-in-out group-hover:text-primary-800',
                      openIndex === index || isActiveParent(menu)
                        ? 'rotate-180 transform'
                        : 'rotate-0 transform'
                    ])}
                  />
                </div>
                <Collapse
                  isOpened={openIndex === index || isActiveParent(menu)}
                >
                  <ul className="mt-2 flex flex-col gap-2 pl-[25px]">
                    {menu.children?.map((child) => (
                      <li key={child.link}>
                        <Link
                          href={child.link}
                          className={twMerge([
                            'flex items-center gap-1 text-slate-500 transition-all duration-300 ease-in-out hover:ml-[2px] hover:text-primary-800',
                            pathname === child.link ||
                            firstPath.padStart(firstPath.length + 1, '/') ===
                              child.link
                              ? 'text-primary-800'
                              : 'text-slate-500'
                          ])}
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
