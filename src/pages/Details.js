import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import AuthContext from '../context/AuthContext';
import axios from 'axios'
import { useContext } from 'react';

const Details = () => {

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);  // Scroll to top when link is clicked
    };

    const [cat, setCat] = useState([]);
    // contact datas
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")
    const [howsoon, setHowsoon] = useState("")
    const [message, setMessage] = useState("")

    const { Contact } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        Contact(name, email, phone, location, howsoon, message)

        setName("")
        setEmail("")
        setPhone("")
        setLocation("")
        setHowsoon("")
        setMessage("")

    }

    const [product, setProduct] = useState({})
    const [openform, setOpenform] = useState(false)

    let { slug } = useParams()

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/prductView/${slug}/`);
                setProduct(response.data)

                //related product
                const resp = await axios.get(`${process.env.REACT_APP_API_URL}/api/reletedprduct/`);
                console.log(resp.data)
                setCat(resp.data)
                // console.log(response.data)
            } catch (error) {
                //console.log(error)
            }
        }
        if (slug) {
            fetchDetails();
        }

    }, [slug], [])
    console.log(openform)
    return (
        <div className='mx-auto mt-16 px-6 relative'>
            <div className='py-12 mt-10'>
                <div className='flex justify-center mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-24'>
                        <div className='w-full'>
                            <img src={product.images} alt={product.images} className='rounded-lg shadow-lg object-fill h-full w-full  ' />
                        </div>
                        <div>
                            <div>
                                <p className='text-2xl md:text-3xl font-semibold uppercase border-b border-b-6'><b className='text-[#70a13e]'>{product?.petname}'s</b>&nbsp; Profile</p>
                                <div className='flex items-center gap-x-10 mt-4'>
                                    <div className=''>
                                        <p className="py-3"><b className=''>Name:</b>&nbsp;{product.petname}</p>
                                        <p className="py-3"><b className=''>Species:</b>&nbsp;{product.species}</p>
                                        <p className="py-3"><b className=''>Fence Required:</b>&nbsp;{product.fenceRequired}</p>
                                        <p className="py-3"><b className=''>Rxercise Needs:</b>&nbsp;{product.exerciseNeeds}</p>
                                        <p className="py-3"><b className=''>Reaction to New People:</b>&nbsp;{product.reaction_to_New_People}</p>
                                        <p className="py-3"><b className=''>Breed:</b>&nbsp;{product.breed}</p>
                                    </div>
                                    <div>
                                        <p className="py-3"><b className=''>Sex:</b>&nbsp;{product.sex}</p>
                                        <p className="py-3"><b className=''>Current Size:</b>&nbsp;{product.currentSize}</p>
                                        <p className="py-3"><b className=''>House Trained:</b>&nbsp;{product.housetrained}</p>
                                        <p className="py-3"><b className=''>Owner Experience:</b>&nbsp;{product.ownerExperience}</p>
                                        <p className="py-3"><b className=''>Adoption fee:</b>&nbsp;${product.adoption_fee}</p>
                                        <p className="py-3"><b className=''>Obedience Training:</b>&nbsp;{product.obedienceTraining}</p>
                                    </div>
                                </div>
                                <div onClick={() => setOpenform(!openform)} className='mt-10 w-[200px] hover:text-gray-700 transition-all duration-300 cursor-pointer'>
                                    <p className='bg-black text-white p-2 py-3 rounded-full text-center caption-bottom text-2xl font-semibold'>Adopt now</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            {/* catigory */}
            <div className='py-10 px-4'>
                <p className='py-6 text-3xl font-semibold text-gray-600'>Related products</p>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3'>
                    {cat.map((catDaata) => (
                        <Link to={`/details/${catDaata.slug}`} onClick={handleScrollToTop}>
                            <div key={catDaata.id} className=''>
                                <img src={catDaata.images} alt={catDaata.petname} className='w-full h-auto shrink md:h-52 object-cover' />
                                <div className='py-4'>
                                    <p className='text-xl font-semibold text-gray-700'>{catDaata.petname}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={`${openform ? 'flex absolute bg-black/75 w-full h-[100vh] z-20 top-0 left-0 right-0' : 'hidden'} `}>
                <div className='flex justify-center items-center mx-auto inset-0'>
                    <div className='pt-[10rem] md:pt-[10rem] px-4'>
                        <p onClick={() => setOpenform(!openform)} className='flex justify-end text-[#70a13e] cursor-pointer'><IoCloseCircleSharp size={40} /></p>
                        <div className='bg-white rounded-md shadow-xl border border-3 border-gray-400'>
                            <form action="" className='mb-4' onSubmit={handleSubmit}>
                                <div className='p-2 flex flex-col'>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} className='border border-3 pl-2 border-gray-400 py-3 md:w-[400px] rounded-lg' placeholder='Eg: John Doe' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label htmlFor="email">E-mail Address</label>
                                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='border border-3 pl-2 border-gray-400 py-3 md:w-[400px] rounded-lg' placeholder='Eg:example@gmail.com' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label htmlFor="contact">Moble Number</label>
                                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className='border border-3 pl-2 border-gray-400 py-3 md:w-[400px] rounded-lg' placeholder='Eg:+14973627622' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label htmlFor="contact">Location</label>
                                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} className='border border-3 pl-2 border-gray-400 py-3 md:w-[400px] rounded-lg' placeholder='Eg:Austerelia' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label htmlFor="contact">How Soon</label>
                                    <input type="text" value={howsoon} onChange={e => setHowsoon(e.target.value)} className='border border-3 pl-2 border-gray-400 py-3 md:w-[400px] rounded-lg' placeholder='Eg:Today,Tomorrow....' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label htmlFor="contact">Your Message</label>
                                    <textarea name="" value={message} onChange={e => setMessage(e.target.value)} className='border border-3 border-gray-400 py-3 md:w-[400px] rounded-md' cols="30" rows="3"></textarea>
                                </div>
                                <div className='p-2 pb-4'>
                                    <button type='submit' className='p-2 text-white bg-[#70a13e] px-[40px] rounded-md font-semibold flex items-center  hover:bg-gray-500 hover:text-[#70a13e]'>Send&nbsp;<FaPaperPlane size={25} /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details