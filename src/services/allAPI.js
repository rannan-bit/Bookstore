import apiService from "../api/apiService";
//register api
export const registerAPI = async (userData) => {
    return await apiService('POST', '/register', userData)
}
//login
export const loginrAPI = async (userData) => {
    return await apiService('POST', '/login', userData)
}
//googgle login
export const googleloginrAPI = async (userData) => {
    return await apiService('POST', '/google-login', userData)
}
//update profile
export const userUpdateAPI = async (userId, userData) => {
    return await apiService('PUT', `/user/edit/${userId}`, userData)
}
//add-book
export const addBookAPI = async (bookDetails) => {
    return await apiService('POST', '/add-book', bookDetails)
}
//get homebooks api
export const getHomeBookAPI = async () => {
    return await apiService('GET', '/homebooks', {})
}
//get books api
export const getBooksAPI = async (searchkey) => {
    return await apiService('GET', `/all-books?search=${searchkey}`, {})
}
//books uploaded by the login user
export const getUserBooksAPI = async () => {
    return await apiService('GET', '/user-books')
}
//user bought books
export const getUserBoughtBooksAPI = async () => {
    return await apiService('GET', '/bought-books', {})
}
//get single book
export const getSingleBookAPI = async (id) => {
    return await apiService('GET', `/single-book/${id}`, {})
}
//payment api
export const paymentAPI = async (id) => {
    return await apiService('GET', `/make-payment/${id}`, {})
}
//verify payment
export const verifyPaymentAPI = async (reqBody) => {
    return await apiService('POST', `/verify-payment`, reqBody)
}
//admin get allbooks
export const BooksAPI = async () => {
    return await apiService('GET', `/books`, {})
}
//admin edit
export const adminEditAPI = async (id, reqBody) => {
    return await apiService('PUT', `/admin/edit/${id}`, reqBody)
}
//book-update api
export const editBookStatusAPI = async (id) => {
    return await apiService('PUT', `/book-update/${id}`, {})
}
//users list
export const getUserAPI = async () => {
    return await apiService('GET', `/all-users`, {})
}
//get generated books abstract via ai
export const getAbstractAPI = async (title) => {
    return await apiService('POST', `/books-ai`, { title })
}