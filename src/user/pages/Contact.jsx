import React from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div>
            <UserHeader />
            <div>
                <div className='flex flex-col items-center my-10 mx-20'>
                    <h1 className='font-bold text-2xl'>Contact</h1>
                    <p className='md:text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure doloremque mollitia repellendus ut unde earum corrupti rem aspernatur nisi voluptatibus adipisci, fugit odio veritatis itaque quis incidunt ea dignissimos. Facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident consequatur laudantium dolore porro! Magni inventore quo animi excepturi commodi in magnam temporibus vel iste possimus! Veniam cumque repudiandae recusandae?</p>
                </div>
                <div className='md:flex justify-between mx-20 p-5 '>
                    <div className='flex items-center'>
                        <div className='w-15 h-15 bg-gray-600 rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faLocationDot} className='text-2xl' />
                        </div>
                        <div>
                            <h3 className=''>123 Main Street,<br /> Apt 4B, Anytown, CA 91234</h3>
                        </div>

                    </div>

                    <div className='flex items-center my-5 '>
                        <div className='w-15 h-15 bg-gray-600 rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faPhone} className='text-2xl' />
                        </div>
                        <div>
                            <h3>+91 9874561230</h3>
                        </div>

                    </div>

                    <div className='flex items-center '>
                        <div className='w-15 h-15 bg-gray-600 rounded-full flex justify-center items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-2xl' />
                        </div>
                        <div>
                            <h3>Bookstore@gmail.com</h3>
                        </div>

                    </div>


                </div>

                <div className='md:grid grid-cols-2 p-5 my-5'>
                    <div className='bg-gray-400 mx-10 rounded'>
                        <h1 className='text-center font-bold p-5'>Send me Message</h1>
                        <div className='p-3'>
                            <input type="text" placeholder='Name' className='bg-white w-full p-2 rounded' />
                            <input type="text" placeholder='Email' className='bg-white w-full p-2 my-5 rounded' />
                            <textarea type="text" placeholder='message' rows={8} className='bg-white w-full p-2 rounded' />
                        </div>
                        <div className='p-3'>
                            <button className='w-full bg-gray-900 text-white rounded p-2'>Submit <FontAwesomeIcon icon={faPaperPlane}/></button>
                        </div>


                    </div>
                    <div className=' p-3 w-full'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.47361681562!2d75.72841358158635!3d11.255723875380596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Keralam!5e0!3m2!1sen!2sin!4v1790766714633!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact