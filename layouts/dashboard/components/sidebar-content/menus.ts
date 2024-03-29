import { IoIosCog, IoIosHome, IoIosLogOut, IoIosPaper } from 'react-icons/io'
import { IconType } from 'react-icons/lib'

export type Menu = {
  id: number
  title: string
  link?: string
  icon: IconType
  children?: MenuChild[]
}

export type MenuChild = {
  id: number
  title: string
  link: string
  code?: string
}

export const menus: Menu[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: IoIosHome,
    link: '/'
  },
  {
    id: 2,
    title: 'Content Management',
    icon: IoIosPaper,
    children: [
      {
        id: 1,
        title: 'Blog Post',
        link: '/blog'
      },
      {
        id: 2,
        title: 'About Me',
        link: '/about-me'
      },
      {
        id: 3,
        title: 'Contact Detail',
        link: '/contact-detail'
      }
    ]
  },
  {
    id: 3,
    title: 'Settings',
    icon: IoIosCog,
    children: [
      {
        id: 1,
        title: 'Profile',
        link: '/profile'
      },
      {
        id: 2,
        title: 'Change Password',
        link: '/change-password'
      }
    ]
  },
  {
    id: 4,
    title: 'Logout',
    icon: IoIosLogOut,
    link: '/logout'
  }
]
