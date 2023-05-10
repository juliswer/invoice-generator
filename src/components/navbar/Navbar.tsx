import Link from 'next/link'

export function Navbar() {
  return (
    <div className="navbar bg-base-100 rounded-2xl flex-wrap md:flex-nowrap">
      <div className="flex-1">
        <Link href="/">
          <span className="btn btn-ghost normal-case md:text-xl text-lg">
            Invoice Tool
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-vertical md:menu-horizontal md:px-1">
          <li>
            <Link href="/amount">
              <span className="font-bold md:font-xl font-lg">Get Amount</span>
            </Link>
          </li>
          <li>
            <Link href="/compare">
              <span className="font-bold text-md md:font-xl">
                Compare Addresses
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
