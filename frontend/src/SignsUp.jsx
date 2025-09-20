import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { BadgePlus } from 'lucide-react'
import { Lock } from "lucide-react"
import { Eye } from "lucide-react"
import { EyeOff } from "lucide-react"
import { Mail } from "lucide-react"
import { useState } from "react"
import { useEffect } from "react"



const SignUp = () => {

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        Password: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowconfirmPassword] = useState(false);
    const [formData, setformData] = useState(
        {
            fullName: "",
            email: "",
            Password: "",
            confirmPassword: ""

        })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')



    const handlePassword = () => {
        setShowPassword((Password) => !Password)
    }
    const handleConfirmPassword = () => {
        setShowconfirmPassword((ConfirmPassword) => !ConfirmPassword)
    }
    const handleChange = (e) => {
        setError('')
        setSuccess('')
        setformData((formData) => (
            {
                ...formData,
                [e.target.name]: e.target.value
            }

        ))
    }
    let newErrors = {};
    if (!formData.fullName) {
        newErrors.fullName = "please enter full name"
    }
    if (!formData.email) {
        newErrors.email = "please enter email"
    }
    if (!formData.Password) {
        newErrors.Password = "please enter password"
    } else if (formData.Password.length < 8) {
        newErrors.Password = "Password must be at least 8 characters";
    }
    if (!formData.confirmPassword) {
        newErrors.confirmPassword = "please enter password"
    } else if (formData.Password !== formData.confirmPassword) {
        newErrors.confirmPassword = "password does not match "
    }

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
    } else {
        setErrors({});
        setSuccess("account created succesfuly")
        setformData({
            fullName: "",
            email: "",
            Password: "",
            confirmPassword: ""
        })
    }
    //     const handleSubmit = (event) => {
    //         event.preventDefault();
    //         if (!formData.fullName || !formData.email || !formData.Password || !formData.confirmPassword) {
    //             setError("Please fill all the fields")
    //         } else if (formData.Password.length < 8) {
    //             setError("Password must be at least 8 characters")
    //             setSuccess('')
    //         } else if (formData.Password !== formData.confirmPassword) {
    //             setError("your password did not match")
    //         } else{
    //             setError('')
    //         setSuccess("Account created successfully")
    //         setformData({
    //             fullName: "",
    //             email: "",
    //             Password: "",
    //             confirmPassword: ""
    //         })
    //     }
    // }


    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess('');
            }, 5000); // 3 seconds
            return () => clearTimeout(timer);
        }
    }, [success]);


    return (
        <div><NavBar />
            <div className=" flex flex-col  items-center mt-10 gap-6">
                <h1 className="text-5xl text-bold text-blue-500 ">JOIN BLOG-VERSE</h1>
                <p className="text-gray-700 text-center text-semibold text-xl">create your account and <br></br>start Blogging journey today</p>
                <form onSubmit={handleSubmit} className="flex flex-col border-2 py-5 items-center w-1/3 rounded-2xl shadow-2xl  border-white gap-2 ">
                    <div className="w-[90%] items-center">
                        <p className="text-md text-gray-600 font-semibold pb-2">FullName</p>
                        <input value={formData.fullName} onChange={handleChange} name="fullName" type="text" placeholder="Enter your FullName" className="border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400" />
                        {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}

                    </div>
                    <div className="w-[90%] items-center pt-5">
                        <p className="text-md text-gray-600 font-semibold pb-2">Email</p><div className="relative">
                            <input value={formData.email} onChange={handleChange} name="email" type="email" placeholder="Enter your Email" className="border-1 rounded-xl pl-8 w-full py-1 focus:outline-none focus:border-purple-400" />
                            <Mail className="absolute top-1 pl-2" />
                            {errors.email && <p className="text-red-600">{errors.email}</p>}

                        </div></div>
                    <div className="w-[90%] items-center pt-5">
                        <p className="text-md text-gray-600 font-semibold pb-2">Password</p>
                        <div className="relative">
                            <input value={formData.Password} onChange={handleChange} name="Password" type={showPassword ? "password" : "text"} placeholder="Enter your Password" className="pl-8 border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400" />
                            <p onClick={handlePassword}>{showPassword ? <Eye className="absolute top-1 right-3 p-1" /> : <EyeOff className="absolute top-1 right-3 p-1" />}<Eye className="absolute top-1 right-3 p-1" /></p>


                            <Lock className=" absolute top-1 pl-2" />
                            {errors.Password && <p className="text-red-600">{errors.Password}</p>}

                        </div></div>
                    <div className="w-[90%] items-center pt-5">
                        <p className="text-md text-gray-600 font-semibold pb-2">Confirm Password</p>
                        <div className="relative">
                            <input value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" type={showConfirmPassword ? "password" : "text"} placeholder="confirm your password" className="border-1 pl-8 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400" />
                            <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className="absolute top-1 right-3 p-1" /> : <EyeOff className="absolute top-1 right-3 p-1" />}<Eye className="absolute top-1 right-3 p-1" /></p>
                            <Lock className=" absolute top-1 pl-2" />
                            {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}


                        </div>

                    </div>
                    <div className="flex gap-2 mt-5 w-[90%] border-1 rounded-xl border-red-400 px-4 py-5 items-center justify-center">
                        <input type="checkbox" name="" id="" className="h-5 w-5" />
                        <p>I agree to the Terms of service and Privacy policy</p>
                    </div>
                    {error && <p className="text-red-600">{error}</p>}
                    {success && <p className="text-green-400">{success}</p>}
                    <button className="bg-purple-500 font-bold text-white w-[90%] p-3 rounded-xl mt-4 flex justify-center gap-10"><BadgePlus /><p>Create Account</p></button>
                    <div className="border-gray-500 border-[0.5px] w-[90%] mt-5"></div>
                    <p className="text-semibold text-gray-700 mt-5 ">Already have an Account ?  <Link to="/signin" className="text-purple-500">Sign In Here</Link></p>
                    <Link to="/" className="text-semibold mt-5 ">Back to Home </Link>
                </form>
            </div></div>

    )
}
export default SignUp