import React from 'react'
import Train from '../images/pet4.jpg'
import Train1 from '../images/train/train1.jpeg'
import Train2 from '../images/train/train5.jpeg'
import Train3 from '../images/train/train3.jpeg'
import Train4 from '../images/train/train4.jpeg'
import Train5 from '../images/pet0.jpg'

const BestTrainer = () => {
    const tratin = [
        
        {
            id: 1,
            img: Train
        },
        {
            id: 2,
            img: Train4
        },
        {
            id: 3,
            img: Train1
        },
        {
            id: 4,
            img: Train2
        },
        {
            id: 5,
            img: Train3
        },
        {
            id: 6,
            img: Train5
        },
        
    ]
    return (
        <div className='mt-5 py-8 md:mb-[7rem] px-3'>
            <div className='flex justify-center mx-auto'>
                <div>
                    <div className='text-center mb-[3rem]'>
                        <p className='text-2xl text-[#70a13e] mb-3 font-semibold'>Our Best Trainer</p>
                        <p className='text-2xl md:text-5xl font-semibold text-black'>Look How We Train Them</p>
                    </div>
                        <div className='grid md:grid-cols-3 gap-x-3 gap-y-[4rem] md:gap-y-[7rem]'>
                            {tratin.map((data) => (
                                <div className='w-[100%] h-[300px]  transition-all hover:scale-105 duration-300' key={data.id}>
                                    <img src={data.img} alt="" />
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default BestTrainer