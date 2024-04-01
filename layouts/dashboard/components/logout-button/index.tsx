import { createComponentClient } from '@/utils/suppabase'
import { useRouter } from 'next/router'
import { IoMdLogOut } from 'react-icons/io'
import { toast } from 'react-toastify'

export const LogoutButton = () => {
  const { auth } = createComponentClient()
  const { push } = useRouter()

  const handleLogout = async () => {
    await auth
      .signOut()
      .then(() => {
        push('/auth/login')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
  return (
    <button onClick={handleLogout}>
      <IoMdLogOut className="text-2xl text-gray-500 hover:text-gray-700" />
    </button>
  )
}
