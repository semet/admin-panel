import {
  LogoutButton,
  Message,
  Notification,
  ToggleSidebar,
  UserMenu
} from '@/layouts/dashboard'

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between bg-gray-100 px-md shadow-md">
      <div className="flex items-center">
        <ToggleSidebar />
      </div>
      <div className="flex items-center">
        {/* Notification */}
        <Notification />
        {/* Message */}
        <Message />
        {/* Profile */}
        <UserMenu />
        {/* Logout */}
        <LogoutButton />
      </div>
    </nav>
  )
}
