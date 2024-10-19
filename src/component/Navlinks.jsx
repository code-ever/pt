import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navlinks = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };
    const Links = [
        {
            name: "About", submenu: true, sublinks: [
                {
                    Head: "About",
                    sublink: [
                        {
                            name: 'History', link: '/history'
                        },
                        {
                            name: 'Our Services', link: '/service'
                        },
                        {
                            name: 'Faq', link: '/fq'
                        },
                        {
                            name: 'Bord&Staff', link: '/boardstaff'
                        },
                    ]
                },
            ]
        },
        {
            name: "Adopt", submenu: true, sublinks: [
                {
                    Head: "About",
                    sublink: [
                        {
                            name: 'Dog Application', link: '/dogapplication'
                        },
                        {
                            name: 'Ready to Adopt?', link: '/readytoadopt'
                        },
                        {
                            name: 'Adoptation Information', link: '/adoptioninfo'
                        },
                        {
                            name: 'Adoptation Discount', link: '/discount'
                        },
                    ]
                },
            ]
        },
        {
            name: "Large Breeds", submenu: true, sublinks: [
                {
                    Head: "About",
                    sublink: [
                        {
                            name: 'German Shepherd', link: '/germanshepherd'
                        },
                        {
                            name: 'Dobermann Puppies', link: '/dobermann'
                        },
                        {
                            name: 'Alaskan Malamute', link: '/alaskan'
                        },
                        {
                            name: 'Airedale Terrier', link: '/airedale'
                        },
                    ]
                },
            ]
        },
        {
            name: "Small Breeds", submenu: true, sublinks: [
                {
                    Head: "About",
                    sublink: [
                        {
                            name: 'Maltese puppies', link: '/maltese'
                        },
                        {
                            name: 'Chihuahua puppies', link: '/chihuahua'
                        },
                        {
                            name: 'Shih Tzu puppies', link: '/shihtzu'
                        },
                        {
                            name: "Pug puppie's", link: '/pug'
                        },
                        {
                            name: 'Toy poodle puppies', link: '/toypoodle'
                        },
                    ]
                },
            ]
        },
        {
            name: "Categories", submenu: true, sublinks: [
                {
                    Head: "About",
                    sublink: [
                        {
                            name: 'Emotional Sopport dogs', link: '/emotional'
                        },
                        {
                            name: 'Our Apartments dogs', link: '/apartmentsdogs'
                        },
                        {
                            name: 'Farmily Dogs', link: '/family'
                        },
                        {
                            name: "Small Dogs", link: '/smaill_dogs'
                        },
                        {
                            name: 'Hypoallergenic dogs', link: '/hypoallergenic'
                        },
                        {
                            name: 'Medium Breed', link: '/midum_breed'
                        },
                    ]
                },
            ]
        },
        {
            name: "Toy Breeds", submenu: true, sublinks: [
                {
                    Head: "About",
                    sublink: [
                        {
                            name: 'Yorkshire', link: '/yorkshire'
                        },
                        {
                            name: "Chihuahua's", link: '/chihuahuas'
                        },
                        {
                            name: "Poodle's", link: '/poodle'
                        },
                        {
                            name: "Maltese's", link: '/maltese'
                        },
                        {
                            name: "Pomeranian's", link: '/pomeranian'
                        },
                       
                    ]
                },
            ]
        },
        {
            name: "Contact Us", submenu: true, sublinks: [
                {
                    Head: "About",
                    sublink: [
                        {
                            name: 'Contact Us', link: '/contact'
                        },
                       

                    ]
                },
            ]
        },
      
      
    ]
    const [header, setHeader] = useState("")
    return (
        <>
            {Links.map((data) => (

                <div >
                    <div className='px-3 md:px-1 text-left md:cursor-pointer group'>
                        <p className='py-4 flex justify-between items-center md:pr-0 pr-5 group cursor-pointer' onClick={() => header !== data.name ? setHeader(data.name) : setHeader("")}>{data.name}
                            <span className='md:hidden text-xl md:mt-1 md:ml-3 inline'>
                                {header === data.name ? <IoIosArrowDown /> : <IoIosArrowUp />}
                            </span>
                            <span className='hidden md:inline text-xl md:mt-1 md:ml-2 group-hover:rotate-180'>
                                <IoIosArrowDown />
                            </span>
                        </p>
                        {data.submenu && (
                            <div className=''>
                                <div className=' absolute top-10 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-7'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-gray-100 shadow-lg rotate-45'>

                                        </div>
                                    </div>
                                    <div className='bg-white shadow-xl p-3.5'>
                                        {data.sublinks.map((mydatalink) => (
                                            <div>
                                                {mydatalink.sublink.map((allmydata) => (
                                                    <li className='text-sm my-4 text-gray-600 cursor-default' onClick={handleScrollToTop}>
                                                        <Link to={allmydata.link} >{allmydata.name}</Link>
                                                        {header}
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* mobile */}
                    <div className={`${header === data.name ? 'md:hidden' : 'hidden'}`}>
                        {data.sublinks?.map((links) => (
                            <div>
                                {links.sublink.map((listLink) => (
                                    <li className='py-4 pl-14'>
                                        <Link to={listLink.link}>{listLink.name}</Link>
                                    </li>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </>
    )
}

export default Navlinks
