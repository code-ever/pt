import React, { useState } from 'react'
import Buttons from '../buttons/Buttons'
import GermanShepherd from '../emotional/GermanShepherd'
import GoldenRetriever from '../emotional/GoldenRetriever'
import JackRussellTerrier from '../emotional/JackRussellTerrier'
import LabradorRetriever from '../emotional/LabradorRetriever'
import CavalierKing from '../emotional/CavalierKing'
import PugsPupy from '../emotional/PugsPupy'

const Emotional = () => {
    const button = [
        "Golden Retriever", "German Shepherd", "Poodle", "Labrador Retriever", "Cavalier King","Pug"
    ]
    const RenderComponent = ({ index }) => {
        switch (index) {
            case 0:
                return <GoldenRetriever />
                break;
            case 1:
                return <GermanShepherd />
                break;
            case 2:
                return <JackRussellTerrier />
                break;
            case 3:
                return <LabradorRetriever />
                break;
            case 4:
                return <CavalierKing />
                break;
            case 5:
                return <PugsPupy />
                break;
            default:
                break;
        }
    }
    const [isSelected, setIsSelected] = useState(0)
    return (
        <div className='py-16'>
            <div>
                <p className='py-4 text-xl md:text-3xl font-semibold text-center mt-6 '>
                    Best Emotional Support Dogs for adoption
                </p>
                <p className='py-3 text-justify px-4'>
                    Dogs are more attuned to people’s emotions, physical abilities, and even medical needs when required. Some breeds have more of a knack for these senses than others. Here is a list of breeds that are better qualified to bring you comfort and be more attuned to your emotional and physical needs.
                </p>
            </div>

            <div className=' p-3 gap-y-4 bg-[#70a13e] mt-5'>
                <div className=' text-white font-semibold text-2xl mt-4 border-black uppercase'>Emotional Support Puppies</div>
            </div>
            <div className='flex-1 md:flex gap-x-5'>
                <div className=' mt-3 bg-orange-100 md:flex-col md:justify-start text-gray-500'>
                    <div className=' grid-cols-4 gap-x-3 gap-y-2 w-full md:w-[260px] px-4'>
                        <Buttons button={button} isSelected={isSelected} setIsSelected={setIsSelected} />
                    </div>
                </div>
                <div className='mt-5'>
                    <RenderComponent index={isSelected} />
                </div>
            </div>

        </div>
    )
}

export default Emotional
