import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoIosArrowForward, IoMdHome } from 'react-icons/io'

export const Breadcrumb = () => {
  const { pathname } = useRouter()
  const paths = pathname.split('/').filter((p) => p !== '')

  return (
    <ul className="flex items-center">
      <li>
        <Link
          href={'/'}
          className="flex items-center text-slate-600 hover:text-primary-800"
        >
          <IoMdHome className="text-md mb-1" />
          <span className="text-xs">Dashboard</span>
        </Link>
      </li>
      {paths.map((path, index) => (
        <li key={index}>
          {index === paths.length - 1 ? (
            <span className="flex items-center text-gray-400">
              <IoIosArrowForward className="text-sm" />
              <span className="text-xs">{path.split('-').join(' ')}</span>
            </span>
          ) : (
            <Link
              href={path.padStart(path.length + 1, '/')}
              className="flex items-center text-slate-600 hover:text-primary-800"
            >
              <IoIosArrowForward className="text-sm" />
              <span className="text-xs">{path.split('-').join(' ')}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
