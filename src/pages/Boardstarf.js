import React from 'react'
import board14 from '../images/staffs/14.png'
import board1 from '../images/staffs/board6.jpg'
import board3 from '../images/staffs/christophine.jpg'
import board4 from '../images/staffs/board8.jpg'
import board5 from '../images/staffs/Roo.jpg'
import board9 from '../images/staffs/board9.jpg'
import board11 from '../images/staffs/board11.jpg'
import board115 from '../images/staffs/board15.webp'
const Boardstarf = () => {
  const getBoards = [
    {
      id: 0,
      img: board115,
      name: 'my name'
    },
    
    {
      id: 3,
      img: board3,
      name: 'my name'
    },
    {
      id: 0,
      img: board14,
      name: 'Kelvin'
    },
    {
      id: 4,
      img: board4,
      name: 'my name'
    },
    {
      id: 5,
      img: board5,
      name: 'my name'
    },
    {
      id: 6,
      img: board9,
      name: 'my name'
    },
    {
      id: 7,
      img: board11,
      name: 'my name'
    },
    {
      id: 1,
      img: board1,
      name: 'my name'
    },

  ]
  return (
    <div>
      <div className='flex justify-center mx-auto bg-green-50'>
        <div className='mt-[3rem] flex flex-col justify-center mx-auto py-5 px-4 text-inherit'>
          <p className='text-center py-14 text-2xl md:text-4xl uppercase'>Our Boards and Staffs</p>
          <div className=' text-justify'>
            Destiny Shelter is managed by a dedicated board and staff who oversee the daily operations of the company, ensuring that every pet and dog receives the highest level of care. The team is passionate about animal welfare, working tirelessly to provide a safe and nurturing environment for the animals. To ensure the best care for their pets, Destiny Shelter recruits experienced and compassionate veterinary professionals. These experts are responsible for the health and well-being of the animals, offering medical care, vaccinations, and regular check-ups to keep them happy and healthy. The combined efforts of the board, staff, and veterinary team ensure that every pet at Destiny Shelter is well cared for and ready to find a loving home.

        </div>
        </div>
      </div>
      <div className='flex justify-center mx-auto mt-10 mb-8'>
        <div className='grid md:grid-cols-4 gap-x-3 gap-y-10'>
          {getBoards.map((data) => {
            return (
              <div key={data.id} className='flex flex-col w-[300px] h-[350px] hover:scale-105 transition-all duration-300 shadow-lg'>
                <img src={data.img} alt={data.name} className='w-[100%] object-contain rounded-t-3xl' />
                <p>{data.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Boardstarf
