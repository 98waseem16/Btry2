'use client'

import Link from 'next/link'

import { UserButton } from '@clerk/nextjs'

const tabs = [{ title: 'Overview', href: '/dashboard' }]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full left-0 bg-white z-[100] border-b border-main flex flex-col justify-between">
      <div className="flex items-center justify-between h-16 container">
        <div className="flex items-center space-x-6 h-full">
          <Link
            href="/dashboard"
            className="hover:opacity-70 transition duration-150"
          >
           <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
            >
              <path
                d="M0 16.8235C0 7.53215 7.58171 0 16.9342 0H38.7434C38.8851 0 39 0.114123 39 0.254902V22.1765C39 31.4678 31.4183 39 22.0658 39H16.9342C7.58171 39 0 31.4678 0 22.1765V16.8235Z"
                fill="url(#paint0_linear_416_2)"
              />

              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="18"
                font-family="Arial, sans-serif"
                fill="white"
                fill-opacity="0.8"
              >
                B
              </text>
              <defs>
                <linearGradient
                  id="paint0_linear_416_2"
                  x1="19.5"
                  y1="0"
                  x2="19.5"
                  y2="39"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stopColor="#242424" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <div className="h-[1.5rem] w-[1px] -skew-x-12 bg-zinc-200 dark:bg-smoke-600" />
          <div className="flex items-center h-full space-x-6">
            {tabs.map((item) => (
              <div key={item.href} className="relative h-full">
                <Link
                  href={item.href}
                  className={` h-full text-sm flex items-center`}
                >
                  {item.title}
                </Link>
                <div className="absolute w-full bottom-0 bg-black h-[2px]" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* <CreateNewModal createDataset={createDataset} /> */}
          <div className="h-[1.5rem] w-[1px] bg-zinc-200 dark:bg-smoke-600" />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  )
}
