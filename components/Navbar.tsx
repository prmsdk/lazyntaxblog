import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    const [offcanvas, setOffcanvas] = useState(false)
    const [search, setSearch] = useState(false)

    return (
        <nav className='py-10 px-10 container mx-auto'>
            <div className="">
                <div className="flex items-center">
                    <div className="w-3/12 lg:hidden">
                        <button className="" onClick={() => { setOffcanvas(!offcanvas) }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="lg:w-2/12 w-6/12 lg:text-left text-center">
                        <Link href="/">
                            <b>LazyntaxBlog</b>
                        </Link>
                    </div>
                    <div className={`lg:w-6/12 w-full lg:bg-none bg-gradient-to-b transition-all from-gray-600 to-gray-900 lg:static fixed top-0 lg:h-auto h-full lg:p-0 p-10 ${offcanvas ? 'left-0' : '-left-full'}`}>
                        <button className="lg:hidden absolute top-10 right-10" onClick={() => { setOffcanvas(false) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <ul className='lg:space-x-10 flex lg:items-center lg:flex-row flex-col lg:space-y-0 space-y-4'>
                            <li><Link href={`/posts`} className="hover:underline">UI Design</Link></li>
                            <li><Link href={`/posts`} className="hover:underline">Front-End</Link></li>
                            <li className='relative'>
                                <a href="#" className='cursor-pointer flex items-center' onClick={() => setDropdown(!dropdown)}>Back-End 
                                <svg className='ml-2 mt-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                
                                </a>
                
                                {dropdown && (
                                <ul className="absolute w-[200px] mt-5 bg-gray-800 rounded shadow-2xl">
                                <li><Link href="/posts" className="flex py-3 px-6 border-b border-white/5 hover:bg-gray-700/60">Internet</Link></li>
                                <li><Link href="/posts" className="flex py-3 px-6 border-b border-white/5 hover:bg-gray-700/60">Learn</Link></li>
                                <li><Link href="/posts" className="flex py-3 px-6 hover:bg-gray-700/60 ">Development</Link></li>
                                </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/12 lg:hidden text-end">
                        <button className="" onClick={() => { setSearch(!search) }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className={`lg:w-4/12 lg:static absolute w-full left-0 px-10 lg:px-0 transition-all ${search ? 'top-8' : '-top-40'}`}>
                        <button className="lg:hidden absolute top-3 right-12" onClick={() => { setSearch(false) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <input type="text" name="search" className='bg-gray-700 py-3 w-full rounded-full bg-search pl-12 pr-8' placeholder='Search . . ' />
                    </div>
                </div>
            </div>
        </nav>
    )
}