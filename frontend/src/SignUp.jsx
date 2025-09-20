import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import {BadgePlus} from 'lucide-react'
import { Lock } from "lucide-react"
const SignUp=()=>{
    return(<div><NavBar/>
        <div className=" flex flex-col  items-center mt-10 gap-6">
            <h1 className="text-5xl text-bold text-blue-500 ">JOIN BLOG-VERSE</h1>
            <p className="text-gray-700 text-center text-semibold text-xl">create your account and <br></br>start Blogging journey today</p>
            <form className="flex flex-col border-2 py-5 items-center w-1/3 rounded-2xl shadow-2xl  border-white gap-2 ">
                <div className="w-[90%] items-center">
                    <p className="text-md text-gray-600 font-semibold pb-2">FullName</p>
                    <input  type="text"placeholder="Enter your FullName" className="border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400"/>
                </div>
                <div className="w-[90%] items-center pt-5">
                    <p className="text-md text-gray-600 font-semibold pb-2">Email</p>
                    <input  type="email"placeholder="Enter your Email" className="border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400"/>
                </div>
                <div className="w-[90%] items-center pt-5">
                    <p className="text-md text-gray-600 font-semibold pb-2">Password</p>
                    <div className="relative">
                    <input  type="password"placeholder="Enter your Password" className="pl-8 border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400"/>
                    <Lock className=" absolute top-1 pl-2"/>
                </div></div>
                <div className="w-[90%] items-center pt-5">
                    <p className="text-md text-gray-600 font-semibold pb-2">Confirm Password</p>
                    <input  type="password"placeholder="confirm your password" className="border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400"/>
                </div>
                <div className="flex gap-2 mt-5 w-[90%] border-1 rounded-xl border-red-400 px-4 py-5 items-center justify-center">
                    <input type="checkbox" name=""id="" className="h-5 w-5" />
                    <p>I agree to the Terms of service and Privacy policy</p>
                </div>
                <button className="bg-purple-500 font-bold text-white w-[90%] p-3 rounded-xl mt-4 flex justify-center gap-10"><BadgePlus/><p>Create Account</p></button>
                <div className="border-gray-500 border-[0.5px] w-[90%] mt-5"></div>
                <p className="text-semibold text-gray-700 mt-5 ">Already have an Account ?  <Link to="/signin" className="text-purple-500">Sign In Here</Link></p>
                <Link to="/" className="text-semibold mt-5 ">Back to Home </Link>
            </form>
        </div></div>

    )
}
export default SignUp