import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Logo from '../images/green-dog-logo-8e47a288-4ff3-4dd7-8a1b-7841a95d234b.jpg'
import Navlinks from './Navlinks';
function Header() {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };
    const [open, setOpen] = useState(false)
    return (
        <>
            {/* <div className='w-full '>
                <div className='flex justify-between px-3 bg-white py- z-50 top-0 fixed w-[100%]'>
                    <div><Link to="/"><img src={Logo} alt="logo" className='w-20 rounded-full' /></Link></div>
                    <div className='flex items-center'>
                        <div>

                        </div>
                        <ul className=' md:flex gap-x-5 text-black z-50'>
                            <Link to="/" className=' text-[#70a13e] font-semibold capitalize px-3 py-3'>Home</Link>
                            <Link className=' text-gray-900 font-semibold capitalize group py-3 transtion-all relative'>
                                <p className='flex items-center gap-2 cursor-pointer'>
                                    <span className='hover:text-[#70a13e] '>About</span>
                                    <IoIosArrowDown className=' rotate-180 group-hover:rotate-0' />
                                </p>
                                <ul className='hidden group-hover:flex flex-col absolute right-0 top-10 py-3 gap-1 bg-white shadow-md p-6 w-52 rounded-t-md text-gray-600 gap-y-4  border-t-2 border-[#70a13e]'>
                                    <Link to="/history" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>History</Link>
                                    <Link to="/service" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Our Services</Link>
                                    <Link to="/fq" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Faq</Link>
                                    <Link to="/boardstaff" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Bord&Staff</Link>
                                </ul>
                            </Link>

                            <Link className='hover:text-[#70a13e] capitalize relative group py-3'>
                                <p className='flex items-center px-3'>
                                    <span>Adopt</span>
                                    <IoIosArrowDown className=' rotate-180 group-hover:rotate-0' />
                                </p>
                                <ul className='hidden group-hover:flex flex-col absolute right-0 top-10 py-3 gap-1 bg-white shadow-md p-6 w-52 rounded-t-md text-gray-600 gap-y-6  border-t-2 border-[#70a13e]'>
                                    <Link to="/dogapplication" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Dog Application</Link>
                                    <Link to="/readytoadopt" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Ready to Adopt?</Link>
                                    <Link to="/adoptioninfo" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Adoptation Information</Link>
                                    <Link to="/discount" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Adoptation Discount</Link>
                                </ul>
                            </Link>
                            <Link className='hover:text-[#70a13e] capitalize group py-3 relative'>
                                <p className='flex items-center px-3'>
                                    <span>Large Breeds</span>
                                    <IoIosArrowDown className=' rotate-180 group-hover:rotate-0' />
                                </p>
                                <ul className='hidden group-hover:flex flex-col absolute right-0 top-10 py-3 gap-1 bg-white shadow-md p-6 w-52 rounded-t-md text-gray-600 gap-y-6  border-t-2 border-[#70a13e]'>
                                    <Link to='/germanshepherd' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>German Shepherd</Link>
                                    <Link to='/dobermann' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Dobermann Puppies</Link>
                                    <Link to='/alaskan' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Alaskan Malamute</Link>
                                    <Link to='/airedale' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Airedale Terrier</Link>
                                </ul>
                            </Link>
                            <Link className='hover:text-[#70a13e] capitalize py-3 relative group'>
                                <p className='flex items-center px-3'>
                                    <span>Small Breeds</span>
                                    <IoIosArrowDown className=' rotate-180 group-hover:rotate-0' />
                                </p>
                                <ul className='hidden group-hover:flex flex-col absolute right-0 top-10 py-3 gap-1 bg-white shadow-md p-6 w-52 rounded-t-md text-gray-600 gap-y-6  border-t-2 border-[#70a13e]'>
                                    <Link to='/maltese' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Maltese puppies </Link>
                                    <Link to='/chihuahua' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Chihuahua puppies </Link>
                                    <Link to='/shihtzu' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Shih Tzu puppies </Link>
                                    <Link to='/pug' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Pug puppie's</Link>
                                    <Link to='/toypoodle' onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Toy poodle puppies </Link>
                                    <Link className='hover:text-[#70a13e] transition-all text-sm'>Yorkshire Terrier puppies </Link>
                                </ul>
                            </Link>
                            <Link className='hover:text-[#70a13e] capitalize py-3 relative group'>
                                <p className='flex items-center px-3'>
                                    <span>Categories</span>
                                    <IoIosArrowDown className=' rotate-180 group-hover:rotate-0' />
                                </p>
                                <ul className='hidden group-hover:flex flex-col absolute right-0 top-10 py-3 gap-1 bg-white shadow-md p-6 w-52 rounded-t-md text-gray-600 gap-y-6  border-t-2 border-[#70a13e]'>
                                    <Link to="/emotional" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Emotional Sopport dogs</Link>
                                    <Link to="/apartmentsdogs" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Our Apartments dogs</Link>
                                    <Link to="/family" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Farmily Dogs </Link>
                                    <Link to="/smaill_dogs" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Small Dogs</Link>
                                    <Link to="/hypoallergenic" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Hypoallergenic dogs</Link>
                                    <Link to="/midum_breed" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Medium Breed</Link>

                                </ul>
                            </Link>
                            <Link className='hover:text-[#70a13e] capitalize py-3 relative group'>
                                <p className='flex items-center px-3'>
                                    <span>Toy Breeds</span>
                                    <IoIosArrowDown className=' rotate-180 group-hover:rotate-0' />
                                </p>
                                <ul className='hidden group-hover:flex flex-col absolute right-0 top-10 py-3 gap-1 bg-white shadow-md p-6 w-52 rounded-t-md text-gray-600 gap-y-6  border-t-2 border-[#70a13e]'>
                                    <Link to="/yorkshire" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Yorkshire</Link>
                                    <Link to="/chihuahuas" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Chihuahua's</Link>
                                    <Link to="/poodle" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Poodle's</Link>
                                    <Link to="/maltese" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Maltese's</Link>
                                    <Link to="/pomeranian" onClick={handleScrollToTop} className='hover:text-[#70a13e] transition-all text-sm'>Pomeranian's</Link>

                                </ul>
                            </Link>
                        </ul>
                        <div className='px-3'>
                            <p className='bg-[#70a13e] p-2 rounded-md text-white px-4'>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='bg-white z-50'>
                <div className='flex bg-white font-medium justify-between p-2 items-center fixed top-0 left-0 right-0 z-50'>
                    <div className='z-50 md:w-auto w-full flex justify-between items-center'>
                        <img src={Logo} alt="logo" className='md:cursor-pointer w-24' />
                        <div className='md:hidden text-3xl cursor-pointer' onClick={(() => setOpen(!open))}>
                            {open ? <IoClose /> : <FiMenu />}
                        </div>
                    </div>

                    <ul className='md:flex hidden capitalize items-center gap-8 font-serif'>
                        <li>
                            <Link to='/' className='py-7 px-3 inline-block' onClick={handleScrollToTop}>
                                Home
                            </Link>
                        </li>
                        <Navlinks />
                    </ul>

                </div>
                {/* mobile nav */}
                <ul className={`md:hidden bg-white  fixed top-0 bottom-0 w-[250px] overflow-y-scroll h-[100vh] pl-4 py-10 z-50 duration-500 ${open ? 'left-0' : 'left-[-100%] bottom-0'}`}>
                    <li>
                        <Link to='/' className='py-2 px-3 inline-block'>
                            Home
                        </Link>
                    </li>
                    <Navlinks />
                </ul>
            </div>
        </>
    )
}

export default Header