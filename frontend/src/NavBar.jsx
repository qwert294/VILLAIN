import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex justify-around h-16 items-center border-1   border-white shadow-xl">
            <h1 className=" text-xs sm:text-xl md:text-xl font-semibold">BlogVerse</h1>
            <Link to="/" className=" bg-[#353839] text-white text-xs sm:text-xl md:text-xl rounded-2xl p-2 cursor-pointer">Home</Link>
            <div className="flex gap-3">
                <Link to="/signin" className="font-medium pt-2 border-grey-700 text-xs sm:text-xl md:text-xl cursor-pointer">Sign in</Link>
                <Link to="/signup" className="font-medium  border-grey-700 text-xs sm:text-xl md:text-xl bg-[#5880ff] rounded-3xl p-2  cursor-pointer">Sign Up</Link>
            </div>
        </div>
    )
}
export default NavBar