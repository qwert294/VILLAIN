import React from "react";

const NavBar = () => {
    return (
        <div className="flex justify-around h-16 items-center border-4 border-black">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <button className=" bg-black text-white rounded-2xl p-2 cursor-pointer">Home</button>
            <div className="flex gap-3">
                <button className="font-medium  border-grey-700 cursor-pointer">Sign in</button>
                <button className="font-medium  border-grey-700 bg-blue-400 rounded-3xl p-2 cursor-pointer">Sign Up</button>
            </div>
        </div>
    )
}
export default NavBar