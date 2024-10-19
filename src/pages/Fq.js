
import images from '../images/question-mark-7046730.jpg'
import Fqcontent from './Fqcontent';
const Fq = () => {
  return (
    <div className='mt-[3rem]'>
      <div>
        <div className=' relative'>
          <div style={{ backgroundImage: `url(${images})` }} className='w-full h-80 bg-no-repeat bg-cover bg-center absolute'>
            <p className='bg-black/70 absolute z-20 w-full h-80 '></p>
            <div className=' mt-[6rem] py-[6rem] inset-0 flex flex-col justify-center mx-auto items-center z-30 text-white absolute'>
              <p className='text-xl sm:text-2xl md:text-4xl uppercase font-semibold'>Ask Your Queston</p>
              <p className='text-4xl text-[#70a13e] font-semibold -z-0'>&</p>
              <p className='text-3xl font-semibold'>Get and answer</p>
            </div>
          </div>
        </div>
        <div className='px-3 py-4 bg-green-50 mt-8'>
          <p className='text-2xl md:text-5xl py-5 pl-7'>Adoption</p>
          <Fqcontent
            shotContent="What is included in my adoption fee?"
            longContent="Your $300-$600 adoption fee includes spay/neuter, microchip, and vaccines current to the age of the dog/puppy . If you adopt a animal under 6 months old, an additional $50 training deposit will be required and refunded once your animal has completed training before the 6-month mark. This is to ensure all of our puppies are set up for success in their new homes."
          />
          <Fqcontent
            shotContent="Do you know the history of my dog?"
            longContent="Unfortunately, many dogs that we save entered the shelter as strays or were surrendered by their owners with little or no information. We do our best to include any information about their history in their profile if it is known. Otherwise, we will always report information about their personalities and health and training based on how they’ve done in our program."

          />
          <Fqcontent
            shotContent="How do i lisence my dog?"
            longContent=" There are different rules and requirements based on where you live. We do not and cannot keep up with all the rules
                    and changes for all locations we adopt to. The best way to confirm is to contact your local animal services
                    department."
          />
          <Fqcontent
            shotContent="Do you offer discount?"
            longContent="We do not offer discounted adoption rates. We are a nonprofit organisation and our adoption fees go directly towards
                    medical bills, training, food, and other costs to care for dogs in need. Each rescued dog costs an average of $500."

          />

          <Fqcontent
            shotContent="Is my dog well trained ?"
            longContent="to add later"

          />
          <Fqcontent
            shotContent="Is my dog well trained ?"
            longContent="to add later"

          />
          <p className='py-4 text-2xl pl-7 font-semibold'>Medication</p>
          <Fqcontent
            shotContent="What vaccinations do you cover and what schedule do you recommend?"
            longContent="to add later"
          />
          <Fqcontent
            shotContent="What types of reactions can dogs have to vaccinations?"
            longContent="to add later"
          />
          <Fqcontent
            shotContent="What types of reactions can dogs have to vaccinations?"
            longContent="to add later"
          />

          <p className='py-4 text-2xl pl-7 font-semibold'>Foster</p>
          <Fqcontent
            shotContent="What if I want to adopt my foster dog?"
            longContent="to add later"
          />
          <Fqcontent
            shotContent=" Do you provide supplies?"
            longContent="to add later"
          />
          <Fqcontent
            shotContent="Will vet care be required?"
            longContent="to add later"
          />
          <Fqcontent
            shotContent="How long is the foster commitment?"
            longContent="to add later"
          />
          <Fqcontent
            shotContent="I have my own dog, can I still foster?"
            longContent="to add later"
          />
          <Fqcontent
            shotContent="Do I get to choose my foster dog?"
            longContent="to add later"
          />
          <Fqcontent
            shotContent="Can I foster if I live in an apartment?"
            longContent="to add later"
          />
        </div>

      </div>
    </div>
  )
}

export default Fq