import Link from "next/link";

export default function Navbar() {
    return (<nav className="bg-gray-400 border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href="/" className="flex items-center">
                    <span className="self-center text-xl hover:text-black transition-all font-semibold whitespace-nowrap dark:text-white">Kaspi.kz</span>
            </Link>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex justify-between">
                    <li>
                        <Link href="/"
                           className="block py-2 hover:text-black transition-all font-semibold dark:text-white mx-4 my-2"
                           aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/cards"
                              className="block py-2 hover:text-black transition-all font-semibold text-white dark:text-white mx-4 my-2">Cards</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}