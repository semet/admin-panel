import React, { FC, Fragment, useEffect, useRef } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { TProps } from './type'
import { twMerge } from 'tailwind-merge'
import { IoIosArrowDown } from 'react-icons/io'

export const DropDown: FC<TProps> = (props) => {
  const { title, children, buttonStyle, menuStyle, shoeArrow } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

  const openMenu = (open: boolean) => {
    if (buttonRef.current && !open) {
      buttonRef.current.click()
    }
  }

  return (
    <div className="">
      <Menu
        as="div"
        className="relative inline-block text-left"
      >
        {({ open, close }) => (
          <div
            onMouseEnter={() => openMenu(open)}
            onMouseLeave={close}
          >
            <div>
              <Menu.Button
                className={twMerge(
                  'inline-flex w-full items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-medium',
                  buttonStyle
                )}
                ref={buttonRef}
              >
                {title}
                {shoeArrow && <IoIosArrowDown className="mt-1" />}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={twMerge(
                  'absolute right-2 min-w-max origin-top-right overflow-hidden rounded-md bg-white shadow-sm',
                  menuStyle
                )}
              >
                {children}
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    </div>
  )
}
