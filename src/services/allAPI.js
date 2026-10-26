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
export const addBookAPI = async (userId, userData) => {
    return await apiService('POST', '/', userData)
}
//get homebooks api
export const getHomeBookAPI = async (userId, userData) => {
    return await apiService('GET', '/homebook', {})
}