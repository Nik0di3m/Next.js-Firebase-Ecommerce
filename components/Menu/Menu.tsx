import Image from 'next/image'
import {
    HeartIcon,
    ShoppingBagIcon,
    UserIcon,
    MenuIcon,
} from '@heroicons/react/outline'
const Menu = () => {
    return (
        <header className="sticky top-0 flex w-full py-2 px-4 2xl:px-24 items-center justify-between border-b shadow-sm">
            {/* Logo */}
            <div>
                <Image
                    src="/images/logoFireShop.png"
                    alt="Shop logo"
                    width={75}
                    height={60}
                />
            </div>
            {/* Navigation */}
            <nav className="lg:flex-grow lg:flex-1 items-center justify-center hidden lg:flex 2xl:pl-80">
                <ul className="flex space-x-12">
                    <li className="menu-item">NEW</li>
                    <li className="menu-item">MEN</li>
                    <li className="menu-item">WOMEN</li>
                    <li className="menu-item">KIDS</li>
                    <li className="menu-item">SALE</li>
                </ul>
            </nav>
            {/* User Panel */}
            <div className="hidden lg:flex items-center space-x-3">
                {/* Search */}
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-300 rounded-xl px-6 py-1 outline-none"
                    />
                </div>
                {/* User Nav Panel */}
                <div className="flex space-x-3">
                    <HeartIcon className="h-6 hover:scale-105 duration-100 ease-in cursor-pointer" />
                    <ShoppingBagIcon className="h-6 hover:scale-105 duration-100 ease-in cursor-pointer" />
                    <UserIcon className="h-6 hover:scale-105 duration-100 ease-in cursor-pointer" />
                </div>
            </div>
            <div className="lg:hidden flex">
                <MenuIcon className="h-8" />
            </div>
        </header>
    )
}

export default Menu
