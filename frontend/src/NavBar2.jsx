import React from "react"
const NavBar=()=>{
    return(
        <>
        <div className="flex justify-around border-1 border-gray-700 bg-gray-700 items-center h-16 ">
            <div className="flex items-center justify-around  ">
            <img src="image.png" alt="W" className=""/>
            <h1 className="text-white font-bold  bg- text-yellow-600 rounder-2xl">BLOG VERSE</h1></div>
            <div>

            <button className=" p-2 cursor-pointer hover:font-bold pt-2 pb-2 pl-5 pr-5 hover:text-black border-1 border-white text-white bg-blue-950 rounded-2xl"> Home</button></div>
            <div className="">
                  
                <button className="font-medium cursor-pointer pr-5 hover:font-bold hover:text-black rounded-xl items-center p-2 ml-3">SignIn</button>
                <button className="font-medium  border-grey-700 bg-blue-400 rounded-xl p-2 cursor-pointer ml-3">SignUp</button>
            </div>
        </div>
        
        </>
    )
}
export default NavBar