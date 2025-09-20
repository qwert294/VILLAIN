import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="flex justify-around h-16 items-center border-4 border-black">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <Link to="/" className=" bg-black text-white rounded-2xl p-2 cursor-pointer">Home</Link>
            <div className="flex gap-3">
                <Link to="/signin" className="font-medium  border-grey-700 cursor-pointer">Sign in</Link>
                <Link to="/signup" className="font-medium  border-grey-700 bg-blue-400 rounded-3xl p-2 cursor-pointer">Sign Up</Link>
            </div>
        </div>
    )
}
export default NavBar