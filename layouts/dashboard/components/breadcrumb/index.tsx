import Link from 'next/link'
import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'
import { IoMdHome, IoIosArrowForward } from 'react-icons/io'

export const Breadcrumb = () => {
  const { pathname } = useRouter()
  const samplePath = 'domain-management/domain-list'
  const paths = samplePath.split('/')

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
      {paths.map((p, index) => (
        <li key={index}>
          {index === paths.length - 1 ? (
            <span className="flex items-center text-gray-400">
              <IoIosArrowForward className="text-sm" />
              <span className="text-xs">
                {path.basename(p).split('-').join(' ')}
              </span>
            </span>
          ) : (
            <Link
              href={p}
              className="flex items-center text-slate-600 hover:text-primary-800"
            >
              <IoIosArrowForward className="text-sm" />
              <span className="text-xs">
                {path.basename(p).split('-').join(' ')}
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
