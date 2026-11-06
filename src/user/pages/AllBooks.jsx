import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'
import { getBooksAPI } from '../../services/allAPI'
import { searchContext } from '../../context/SearchContext'
import { useContext } from 'react'


function AllBooks() {
    const [token, setToken] = useState("")
    const [categoryList, setCategoryList] = useState([])
    const [allBooks, setAllBooks] = useState([])
    const [dummyBooks, setDummyBooks] = useState()
    const { searchKey, setSearchKey } = useContext(searchContext)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        getBooks()


    }, [searchKey])
    console.log(allBooks);


    const getBooks = async () => {
        const res = await getBooksAPI(searchKey)
        console.log(res);



        if (res.status == 200) {
            setAllBooks(res.data)
            setDummyBooks(res.data)
            const tempCategoryList = res.data.map(bk => bk.category)
            setCategoryList([...new Set(tempCategoryList)])
        }


    }
    const filterBooks = (category) => {
        console.log(category);
        if (category != 'all') {
            setAllBooks(dummyBooks?.filter(book => book.category == category))
        }
        else {
            getBooks()
        }
    }
    return (
        <div>
            <UserHeader />
            <section>
                <div>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-3xl font-bold my-10'>Collections</h1>
                        <div>
                            <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='Search by Title' className='border border-gray-300 my-5 w-100 p-1' />
                            <button className='bg-blue-700 p-1 text-white '>Search</button>
                        </div>
                    </div>

                    {
                        token ?
                            <div className='md:flex my-10'>
                                <div className='ms-20'>
                                    <h3 className='text-xl mb-10'>Filters</h3>
                                    <div className='flex flex-col me-20'>
                                        {
                                            categoryList?.map(cat => (
                                                <label className=' mb-2'>
                                                    <input onClick={() => filterBooks(cat)} type="radio" />
                                                    <span>{cat}</span>
                                                </label>
                                            ))
                                        }
                                        <label className=' mb-2'>
                                            <input onClick={() => filterBooks('all')} type="radio" />
                                            <span>No Filter</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='md:grid grid-cols-4'>

                                    {
                                        allBooks?.length > 0 ?
                                            allBooks?.map(book => (
                                                <div hidden={book?.status == 'pending' || book?.status == 'sold'} className='p-3'>
                                                    <div className='shadow p-3 rounded text-center'>
                                                        <Link to={`/view/${book?._id}/book`}>
                                                            <img src={book?.imageUrl} alt="" style={{ height: '300px', width: '100%' }} />
                                                        </Link>
                                                        <h4 className='mt-3 text-blue-800'>{book?.author}</h4>
                                                        <h4 className='font-bold'>{book?.title}</h4>
                                                        <button className='bg-blue-600 p-1 w-full rounded text-white'>{book?.price}</button>
                                                    </div>
                                                </div>
                                            ))
                                            :
                                            <p className='text-center font-bold my-3'>Loading...</p>
                                    }
                                </div>
                            </div>
                            :
                            <div className='min-h-screen flex justify-center items-center flex-col'>
                                <img src="https://img.freepik.com/premium-vector/locked-icon-isolated-white-background-vector-illustration_230920-1643.jpg?w=1380" alt="" style={{ height: '300px' }} />
                                <Link to={'/login'} className='text-blue-500'>please login</Link>

                            </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default AllBooks