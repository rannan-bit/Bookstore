import { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { getHomeBookAPI } from '../../services/allAPI'
import { searchContext } from '../../context/SearchContext'
import { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'




function Home() {
    const navigate = useNavigate()

    const [homeBooks, setHomeBooks] = useState([])
    const [homeBooksError, setHomeBooksError] = useState('')
    const { searchKey, setSearchKey } = useContext(searchContext)

    useEffect(() => {
        getBooks()
    }, [])
    const getBooks = async () => {
        const res = await getHomeBookAPI()
        if (res.status == 200) {
            setHomeBooks(res.data)
        }

    }

    const handleSearch = () => {
        if (!searchKey) {
            toast.warning("please input a book title here!")
        }
        else if (!sessionStorage.getItem("token")) {
            toast.warning("please login!!!")
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }
        else if (searchKey && sessionStorage.getItem("token")) {
            navigate('/all-books')
        }
        else {
            toast.error("something went wrong")
        }
    }
    return (
        <div>
            <UserHeader />
            <section className="h-100 bg-[url('/bg-img.jpg')] bg-cover bg-center">
                <div className='text-center flex flex-col justify-center items-center h-100' style={{ backgroundColor: 'rgb(0,0,0,0.5)' }}>
                    <h1 className='text-white text-6xl font-bold' style={{ fontFamily: 'Dancing Script' }}>Wonderful Gifts</h1>
                    <p className='text-white mt-5'>Give your family and friends a book</p>
                    <div>
                        <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='Search Books' className='bg-white w-100 h-[51px] p-2 rounded-3xl placeholder-gray-600 my-10' />
                        <FontAwesomeIcon onClick={handleSearch} icon={faMagnifyingGlass} style={{ color: "rgb(0, 0, 0)", marginLeft: '-40px' }} />
                    </div>
                </div>

            </section>
            <section className='flex flex-col justify-center items-center my-10'>
                <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
                <h1 className='text-xl mt-4'>Explore Our Latest Collection</h1>
                <div className='md:grid grid-cols-4'>

                    {homeBooks.map(book => (
                        <div className='p-3' key={book._id}>
                            <div className='shadow p-3 rounded text-center'>
                                <img src={book.imageUrl} alt={book.title} style={{ height: '300px', width: '100%', objectFit: 'contain' }} />
                                <h4 className='mt-3 text-blue-800'>{book.author}</h4>
                                <h4 className='font-bold'>{book.title}</h4>
                                <h4 className='text-lg'>{book.price}</h4>
                                <Link to={`/view/${book._id}/book`}><h4 className='bg-blue-500 p-1 rounded'>View Book</h4></Link>
                            </div>
                        </div>
                    ))}
                    {homeBooksError && <p className='col-span-4 text-center text-red-600'>{homeBooksError}</p>}
                    {!homeBooksError && homeBooks.length === 0 && (
                        <p className='col-span-4 text-center'>No books available yet.</p>
                    )}
                </div>
                <div className='text-center my-10'>
                    <Link to={'/all-books'} className='bg-blue-900 text-white p-3'>Explore More</Link>
                </div>

                <div className='md:grid grid-cols-2 mt-10'>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold'>FEATURED AUTHORS</h1>
                        <h1 className='text-xl font-bold'>Captivates With Every Words</h1>
                        <p className='text-justify px-10 mt-5'>Authors in a bookstore application are the visionaries behind the books that fill the shelves, each contributing their own unique voice, creativity, and perspective to the world of literature. Whether writing fiction, non-fiction, poetry, or educational works, authors bring stories, ideas, and knowledge to life in ways that resonate with readers of all backgrounds.

                            Their work spans a wide array of genres, from thrilling mysteries and heartwarming romances to thought-provoking memoirs and insightful self-help books. Through their words, authors not only entertain and inform but also inspire and challenge readers to think deeply, reflect, and grow. In a bookstore application, authors' works become accessible to readers everywhere, offering a diverse and rich tapestry of voices and experiences, all of which contribute to the evolving landscape of modern literature.

                        </p>
                    </div>
                    <div>
                        <img src="https://www.shutterstock.com/image-photo/happy-attractive-african-business-leader-600nw-2451794349.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className='text-center my-10'>
                <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
                <h1 className='text-xl mt-4'>See What Others Are Saying</h1>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s" alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                    <h3 className='text-xl font-bold my-5'>Teressa Joy</h3>
                    <p className='text-justify px-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda earum quos quam est commodi doloribus sapiente! Tempora fuga perspiciatis soluta assumenda nam expedita sunt vel aliquam, explicabo necessitatibus provident odit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis necessitatibus fugiat quas dicta a, adipisci quasi incidunt quam optio esse, reprehenderit dolor nihil quaerat suscipit et natus delectus sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quia repellendus illum similique placeat inventore quasi molestiae, labore perferendis fugiat omnis? Beatae aliquam ratione itaque eligendi laudantium eaque saepe officia.</p>
                </div>
            </section>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />

        </div>
    )
}

export default Home