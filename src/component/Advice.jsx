import React from 'react'

const Advice = () => {
    return (
        <div className='px-3'>
            <p className='text-center text-2xl md:text-3xl py-2 font-semibold text-[#70a13e] font-sans'>See our adoption counsel</p>

            <div className='grid md:grid-cols-2 justify-center mx-auto py-4 mt-2 gap-x-4 gap-py-4'>
                <div className='shadow-lg border border-3 py-4'>
                    <p className='text-center p-2 text-2xl font-semibold'>Adoption Over Buying</p>
                    <div className=' text-justify px-3'>
                        Adopting a pet instead of buying one has numerous benefits.
                        First, it helps reduce the number of animals in shelters, giving them a second
                        chance at a loving home. Adoption often costs less than buying from a breeder or
                        pet store, saving you money while supporting a good cause. Adopted pets are usually
                        vaccinated, spayed or neutered, and health-checked, providing peace of mind. It also
                        discourages unethical breeding practices and puppy mills. By adopting, you're not only
                        giving an animal a better life but also making a positive impact on the broader issue of
                        pet overpopulation. Adoption promotes responsible pet ownership and compassion.
                    </div>
                </div>
            
                <div className='shadow-lg border border-3 py-4'>
                    <p className='text-center p-2 text-2xl font-semibold '>How to locate perfect pet</p>
                    <div className=' text-justify px-3'>
                        Finding the perfect pet to adopt at Destiny Shelter starts with reviewing their
                        available animals on their website or in person. Consider your lifestyle, space,
                        and time availability to choose a pet that fits your home environment. Destiny Shelter
                        provides detailed profiles for each pet, including their age, breed, temperament, and
                        any special needs. It's important to communicate with shelter staff to ask questions
                        and gain insights about the pet’s behavior and personality. Submitting an adoption
                        application helps the shelter match you with a suitable companion. Take your time in
                        the selection
                        process to ensure the pet you choose aligns with your family and lifestyle.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advice
