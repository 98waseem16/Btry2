'use client'

import Link from 'next/link'

import { UserButton, useUser } from '@clerk/nextjs'

export default function SiteNavbar() {
  const { isSignedIn } = useUser()

  return (
    <nav className="fixed top-0 w-full left-0 bg-white z-[100] border-b border-main flex flex-col justify-between">
      <div className="flex items-center justify-between h-16 container">
        <div className="flex items-center space-x-6 h-full">
          <Link href="/" className="hover:opacity-70 transition duration-150">
            {/* Updated logo using an image URL */}
            <img
              src="https://framerusercontent.com/images/kMrC5uxDgfTJsmKTxMXHXCxcVs.svg?scale-down-to=512"
              alt="Site Logo"
              className="h-7 w-7"
            />
          </Link>
          <div className="h-[1.5rem] w-[1px] -skew-x-12 bg-zinc-200 dark:bg-smoke-600" />
          <div className="flex items-center h-full space-x-6">
            <Link
              href="/dashboard"
              className="h-full text-sm flex items-center opacity-100 hover:opacity-50 transition duration-150"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/checkout"
            className="h-full text-sm flex items-center opacity-100 hover:opacity-50 transition duration-150"
          >
            Checkout
          </Link>
          <div className="h-[1.5rem] w-[1px] bg-zinc-200 dark:bg-smoke-600" />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              href="/sign-in"
              className="h-full text-sm flex items-center opacity-100 hover:opacity-50 transition duration-150"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
