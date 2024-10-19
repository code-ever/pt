import React, { useState } from 'react'
import Buttons from '../buttons/Buttons'
import Yorkshis_ from '../Toy_breed/Yorkshis_'
import Chihuahuas from '../Toy_breed/Chihuahuas'
import Pomeranians_ from '../Toy_breed/Pomeranians_'
import Maltese_ from '../Toy_breed/Maltese_'
import Pomeranians_ from '../Toy_breed/Pomeranians_'


const Toy_breeds = () => {
    const button = [
        "Yorkshire", "Chihuahua's","Podlle's","Malltes's", "Pomeranians"
    ]
    const RenderComponent = ({ index }) => {
        switch (index) {
            case 0:
                return <Yorkshis_ />
                break;
            case 1:
                return <Chihuahuas />
                break;
            case 2:
                return <Pomeranians_ />
                break;
            case 3:
                return <Maltese_ />
                break;
            case 3:
                return <Pomeranians_ />
                break;
            default:
                break;
        }
    }
    const [isSelected, setIsSelected] = useState(0)

  return (
      <div className='py-16'>
          <div>
              <p className='py-4 text-xl md:text-3xl font-semibold text-center mt-6 capitalize'>
                  Best Charming small Dogs for adoption
              </p>
              <p className='py-3 text-justify px-4'>
                  Small dogs make wonderful additions to any family. Their compact size allows them to easily adapt to different living environments, whether you live in a cozy apartment or a spacious house. Despite their size, small dogs are often full of energy, personality, and affection, bringing joy and companionship to every family member.              </p>
          </div>

          <div className=' p-3 gap-y-4 bg-[#70a13e] mt-5'>
              <div className=' text-white font-semibold text-2xl mt-4 border-black uppercase'>Small Puppies</div>
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

export default Toy_breeds