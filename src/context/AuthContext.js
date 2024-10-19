import React from 'react'
import { createContext } from 'react'
import { json, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    const Contact = async (name, email, phone, location, howsoon, message) => {
        try {
            const response = await fetch('https://djangoapi-bi6p.onrender.com/api/contact/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, location, howsoon, message
                })
            })
            if (response.status === 201) {
                Swal.fire({
                    title: "Your request has been send",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    timerProgressBar: true,
                    showCancelButton: false,
                    position: 'top-right'
                })
                navigate('/')
            } else {
                console.log(response.status)
                console.log('Something Went wrong')
                Swal.fire({
                    title: "Could not send Something went wrong ! ",
                    icon: "error",
                    toast: true,
                    timer: 6000,
                    timerProgressBar: true,
                    showCancelButton: false,
                    position: 'top-right'
                })
            }
        } catch (error) {
            console.error('Network error:', error)
            Swal.fire({
                title: "Network error! Please check your connection.",
                icon: "error",
                toast: true,
                timer: 6000,
                timerProgressBar: true,
                showCancelButton: false,
                position: 'top-right'
            })
        }
    }

    const ContextData = { Contact }

    return (
        <AuthContext.Provider value={ContextData}>
            {children}
        </AuthContext.Provider>
    )

}
