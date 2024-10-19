import React from 'react'
import { ImCheckmark } from "react-icons/im";

const Dogaplications = () => {
    return (
        <div className='text-gray-500'>
            <div className='mt-16 bg-gray-200'>
                <p className='py-10 mt-20 text-center text-2xl md:text-4xl px-3 font-semibold'>Application Process</p>
                <div className='flex flex-col items-center mx-auto  text-2 px-3 text-justify'>
                    <p className='text-center'>Thanks for making a choice of adopting pet from Destiny Shelter, we promise to provide your best and friendly pet.</p>
                    In other to complete your application, follow the application process
                </div>
                <div className='flex flex-col px-3 justify-center md:px-48 mt-8 bg-green-50'>
                    <p className='py-4 text-sm md:text-xl flex'><ImCheckmark size={20} /> &nbsp;Step One: Your application must match Destiny Shelter standard</p>
                    <p className='py-4 text-sm md:text-xl flex'><ImCheckmark size={20} /> &nbsp;step Two: Destiny Shelter will contact your vet for a reference.</p>
                    <p className='py-4 text-sm md:text-xl flex'><ImCheckmark size={20} /> &nbsp;step Three: We will contact you to know if the application should be procced.</p>
                    <p className='py-4 text-sm md:text-xl flex'><ImCheckmark size={20} /> &nbsp;Step Four: If approved, payment will be required, and arrangements will be made for transporting the dog to you.<br /> (You pay the transport fee directly to the transport company.)</p>
                </div>
                <div className='px-3 md:px-16 bg-green-50'>
                    <p className='py-10 text-center text-xl md:4xl font-semibold'>Application Form</p>
                    <form action="">
                        <div className='grid md:grid-cols-3 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>
                            <div className='w-full'>
                                <p>First Name</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='First Name' />
                            </div>
                            <div className='w-full'>
                                <p>Second Name (Optional)</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Second Name(Optional)' />
                            </div>
                            <div className='w-full'>
                                <p>Address</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Address' />
                            </div>
                        </div>
                        <div className='grid md:grid-cols-3 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>
                            <div className='w-full'>
                                <p>Apt/suite</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Apt/suite' />
                            </div>
                            <div className='w-full'>
                                <p>State/ province</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='State/ province' />
                            </div>
                            <div className='w-full'>
                                <p>City</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='City' />
                            </div>
                        </div>
                        <div className='grid md:grid-cols-3 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>
                            <div className='w-full'>
                                <p>Postal zip code</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Postal zip code' />
                            </div>
                            <div className='w-full'>
                                <p>Cell Phone</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Cell Phone' />
                            </div>
                            <div className='w-full'>
                                <p>Email</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Email' />
                            </div>
                        </div>

                        <div className='grid px-2 md:px-4 py-3 gap-x-3 gap-y-3'>
                            <div className='w-full'>
                                <p>Work phone</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Work phone' />
                            </div>
                        </div>

                        <p className='py-4 px-3'>Please note any person (co-applicant) who will be sharing ownership of this pet.</p>
                        <div className='grid md:grid-cols-3 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>
                            <div className='w-full'>
                                <p>Co-Applicants first name</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Co-Applicants first name' />
                            </div>
                            <div className='w-full'>
                                <p>Co-Applicants Last name</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Co-Applicants Last name' />
                            </div>
                            <div className='w-full'>
                                <p>Co-Applicants Phone#</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Co-Applicants Phone#' />
                            </div>
                        </div>
                        <p className='py-4 px-3'>Are you Above 18 year old?.</p>
                        <div className='grid md:grid-cols-2 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>
                            <div className='w-full'>
                                <p className='py-4'>Are you at least 18 years of age? </p>
                                <p>
                                    Yes:<input type="radio" className='p-3 border border-3 border-gray-300 ' name='age' value="Yes" />
                                </p>
                                <p>
                                    No: <input type="radio" className='p-3 border border-3 border-gray-300 ' name='age' value="No" />
                                </p>
                            </div>
                            <div className='w-full'>
                                <p>Who are you adopting this pet for?</p>
                                <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Frend/Family/Relative' />
                            </div>
                        </div>
                        <p className='py-5 font-semibold'>DOG INFORMATION</p>
                        <p>Please list the name of the dog(s) you're interested in adopting. If you're not <br />interested in a particular dog, please just type "pre-approval" in the first choice box.</p>
                        <div className='py-10'>
                            <div className='grid md:grid-cols-3 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>
                                <div className='w-full'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='First Choice: Name of Dog Your most intrested on In(Reqiured)' />
                                </div>
                                <div className='w-full'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='Second choice if applicatble ' />
                                </div>
                                <div className='w-full'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 rounded-md w-full' placeholder='3 Choice if Applicable ' />
                                </div>
                            </div>
                        </div>

                        <div className='py-2'>
                            <div className='grid md:grid-cols-2 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>
                                <div className='w-full'>
                                    <p>Have you ever owned a dog?</p>
                                    <p className='flex items-center'>
                                        Yes&nbsp; <input type="radio" className='p-3 border border-3 border-gray-300' name="own_dog" value="" />
                                    </p>
                                    <p className='flex items-center'>
                                        No&nbsp;<input type="radio" className='p-3 border border-3 border-gray-300' name="own_dog" value="" />
                                    </p>
                                </div>
                                <div className='w-full'>
                                    <p>Why do you want to adopt a dog? (Check all that apply) </p>
                                    <p><input type="radio" className='p-3 border border-3 border-gray-300 rounded-md' />&nbsp;Guard Dog</p>
                                    <p><input type="radio" className='p-3 border border-3 border-gray-300 rounded-md' />&nbsp;Companionship</p>
                                    <p> <input type="radio" className='p-3 border border-3 border-gray-300 rounded-md' />&nbsp; Outdoor Dog</p>
                                    <p> <input type="radio" className='p-3 border border-3 border-gray-300 rounded-md' /> &nbsp;Indoor Dog</p>
                                    <p> <input type="radio" className='p-3 border border-3 border-gray-300 rounded-md' />&nbsp;Breeding</p>
                                    <p> <input type="radio" className='p-3 border border-3 border-gray-300 rounded-md' /> &nbsp;Watch Dog</p>
                                    <p> <input type="radio" className='p-3 border border-3 border-gray-300 rounded-md' /> &nbsp;Item 1Service/Therapy</p>
                                    <p> <input type="radio" className='p-3 border border-3 border-gray-300 rounded-md' /> &nbsp;Gift for Someone</p>

                                </div>

                            </div>
                        </div>
                        <div>
                            <div className='w-full'>
                                <div className='grid md:grid-cols-2 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>

                                    <div className='flex flex-col items-center'>
                                        <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder='If is Gist For Someone , Who?' name="own_dog" value="" />
                                        <p className='py-2'>
                                            Please tell us what you're looking for in a dog (example: size, age, breed, sex, temperament/personality, energy level, housebroken, good with cats/kids/dogs, etc.)
                                        </p>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder="Describe what you'r looking for in a dog" name="own_dog" value="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='py-2.5'>If you move in the future, what will you do with the dog you adopt?</p>
                                <textarea name="" id="" rows="5" className='w-full pl-3 border border-3 rounded-md' placeholder='If you move in the future, what will you do with the dog you adopt?'></textarea>
                            </div>
                        </div>
                        <div className=' grid md:grid-cols-2 items-center'>
                            <p className='py-3'>
                                <p className='py-3'>
                                    During the day, where will this dog be kept? (Check all that apply)
                                </p>
                                <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="indor" value="" />&nbsp;Indoors</p>
                                <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="outdor" value="" />&nbsp; Outdoors</p>
                                <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="create" value="" />&nbsp;Crate</p>
                                <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="garage" value="" />&nbsp;Garage</p>
                                <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="kannel" value="" />&nbsp;Kennel</p>
                                <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp;Other</p>
                            </p>
                            <div>
                                <input type="text" className='p-3 border border-3 border-gray-300 w-full rounded-md' placeholder="If other specify" name="own_dog" value="" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className=''>This pet will be will be home alone how many hours (on average) each day?</p>
                                <div className='grid md:grid-cols-2 gap-x-4'>
                                    <div>
                                        <input type="text" className='p-3 border border-3 border-gray-300 w-full rounded-md' placeholder="If other specify" name="own_dog" value="" />
                                    </div>
                                    <div>
                                        <p className=''>Do you plan to take your dog to obedience training? </p>
                                        <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp;Yes</p>
                                        <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp;No</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-5'>
                            <input type="text" className='p-3 border border-3 border-gray-300 w-full rounded-md' placeholder="If yes where will go to obidence traning at?" name="own_dog" value="" />
                        </div>
                        <div>
                            <p className='py-2.5'>If you move in the future, what will you do with the dog you adopt?</p>
                            <textarea name="" id="" rows="5" className='w-full pl-3 border border-3 rounded-md' placeholder='If you move in the future, what will you do with the dog you adopt?'></textarea>
                        </div>
                        <p className='py-4 border-b-2 text-black font-semibold text-2xl md:text-4xl '>ABOUT YOU & YOUR HOUSEHOLD</p>
                        <div>
                            <p className='py-3'>Please indicate the type of you home live in? </p>
                            <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp;House - Own</p>
                            <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp; House - Rent</p>
                            <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp; Mobile Home - Own</p>
                            <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp; Mobile Home - Rent</p>
                            <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp; Apartment - Rent</p>
                            <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp;Condo - Rent</p>
                            <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp; Live with Parents</p>
                        </div>
                        <div className='w-full'>
                            <div className='grid md:grid-cols-2 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>

                                <div className='flex flex-col items-center'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder='If live with parent, list parent name(s)' name="own_dog" value="" />
                                    <p className='py-2'>
                                        If you rent, Landlords/Rental Agencies will be contacted to verify permission to own pets. This includes mobile home parks. Please provide the following:                                    </p>
                                </div>
                                <div className='flex items-center'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder="Prent Mobile Number" name="own_dog" value="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='grid md:grid-cols-3 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>

                                <div className='flex flex-col items-center'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder='Name of apartment complex or mobile home park' name="own_dog" value="" />

                                </div>
                                <div className='flex items-center'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder="Landlord or Rental Agency's Name" name="own_dog" value="" />
                                </div>
                                <div className='flex items-center'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder="Landlord or Rental Agency's Mobile " name="own_dog" value="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='py-3'>Do you have a fenced yard? </p>
                            <div>
                                <p className='py-3'>Please indicate the type of you home live in? </p>
                                <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp;Yes</p>
                                <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp; No</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='grid md:grid-cols-2 px-2 md:px-4 py-3 gap-x-3 gap-y-3'>

                                <div className='flex flex-col items-center'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder='If yes, Type/Hight' name="own_dog" value="" />

                                </div>
                                <div className='flex items-center'>
                                    <input type="text" className='p-3 border border-3 border-gray-300 w-full' placeholder="How manay people live in your house" name="own_dog" value="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='py-3 text-2xl md:text-4xl font-semibold text-black'>ADOPTION DISCOUNTS</p>
                            <div>
                                Please mark if any apply to you. We offer discounted adoption fees for senior citizens (ages 65 and over), as well as active military members and veterans. We may ask for proof of age/service.
                                <div className='flex flex-col py-4'>
                                    <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp; Senior Citizen (65 yrs. and older)</p>
                                    <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp;  Active Military Member or Veteran</p>
                                    <p><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp;   N/A</p>
                                </div>
                                <div className='py-3'>
                                    Since many animals come from unknown backgrounds, Homeward Animal Shelter cannot be responsible for the health or behavioral problems and cannot guarantee personality or temperament. Therefore, I am prepared to provide any necessary medical care including regular vet care and annual vaccinations as well as any humane behavioural training required. 
                                    <p className='py-2'><input type="checkbox" className='p-3 border border-3 border-gray-300' name="other" value="" />&nbsp; Check this box to indicate that you understand and agree to the above.</p>
                                </div>
                                <p className='py-3'>
                                    By typing my name below, I certify that the information I have given is true and that I recognize that any misrepresentation of the facts may result in my losing privilege of adopting a pet. I authorize investigation of all statements on this application. I also understand that Homeward Animal Shelter reserves the right to deny my adoption application for any reason if they feel it is not in the best interest of the animal(s).
                                </p>
                            </div>
                        </div>
                        <div className='pb-12'>
                            <button className='bg-black text-white p-2 rounded-md text-xl font-semibold py-3'>Submit Aplication</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dogaplications
