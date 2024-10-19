import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";


const Fqcontent = ({ shotContent, longContent }) => {
    const [collaps, setCollaps] = useState(false)
    
    console.log(collaps)
    return (
        <div className='px-2 bg-green-50'>
            <div>
                <div className='py-2 bg-gray-100 p-3 mb-2 content'>
                    <p className='flex items-center'> {collaps && collaps ? <FaMinus size={20} onClick={() => setCollaps((prev) => !prev)} className='text-gray-500' /> : <FaPlus size={20} onClick={() => setCollaps((prev) => !prev)} className='text-gray-500' /> }&nbsp;{shotContent}</p>
                    <span className={`h-0 overflow-hidden inline-block transition-all duration-300 ${collaps ? "h-[20rem] md:h-[5rem] transition-all duration-300 mt-4 text-gray-600" : ""}`}>
                        {longContent}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Fqcontent
