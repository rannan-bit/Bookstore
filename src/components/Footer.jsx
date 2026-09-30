import { faFacebook, faInstagram, faLinkedin, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'







function Footer() {
    return (
        <div className='md:grid grid-cols-3 bg-black text-white p-5'>
            <div className='mt-5'>
                <h4>ABOUT US</h4>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident quam ipsam delectus, nemo quia nesciunt modi amet eligendi autem nobis deserunt animi eius dolores, laborum, reprehenderit odio dolore perferendis!</p>
            </div>
            <div className='ms-5 mt-5'>
                <h4 >NEWSLETTER</h4>
                <p className='mt-4'>stay updated with our latest trends</p>
                <div className='mt-3'>
                    <input type="text" placeholder='email id' className='placeholder-black bg-white h-10 p-3' />
                    <button className='bg-yellow-500 h-10 w-[40px]'><FontAwesomeIcon icon={faArrowRight} style={{ color: "rgb(255, 255, 255)", }} /></button>
                </div>
            </div>
            <div className='ms-5 mt-5'>
                <h4>FOLLOW US</h4>
                <p className='mt-4'>Let us be social</p>
                <div className='mt-5'>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} className='text-2xl' ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter} className='ms-3 text-2xl'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faSquareFacebook} className='ms-3 text-2xl'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faLinkedin} className='ms-3 text-2xl'></FontAwesomeIcon>

                        <div className='my-3 flex '>
                            <Link to={'/'} className='bg-white text-black p-2 rounded'>
                                Home
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer