const SignIn = () => {
    return (
        <div className="flex flex-col items-center mt-10 gap-6  ` ">
            <div className="border-black  bg-gray-200 border-2 w-1/3 items-center  rounded-2xl pb-4 shadow-2xl">
                <h1 className="font-bold text-3xl  text-center">Sign In</h1>
                <p className="text-semibold text-center text-xl text-gray-800 ">Access your Account</p>

                <form className=" p-6 flex flex-col  rounded-2xl py-5 ">
                    <div className="w-[100%] items-center pt-4">
                        <p className=" text-md text-gray-600 font-semibold pb-2">Email Address</p>
                        <input type="email" placeholder="Sample@gmail.com" className=" border-2  pl-2 rounded-xl  w-full py-1 border-black focus:outline-none focus:border-amber-200" />

                    </div>
                    <div className="w-[100%] items-center pt-5">
                        <p className="text-md text-gray-600 font-semibold pb-2"> Password</p>
                        <input type="password" placeholder="Enter your password" className="border-1 rounded-xl pl-2 w-full py-1 focus:outline-none focus:border-purple-400" />
                    </div>
                    <div className="flex gap-2 mt-5 w-[100%] flex items-center justify-between rounded-xl  px-4 py-5 items-center ">
                        <div className="flex flex-row items-baseline"><input type="checkbox" name="" id="" className="h-4 w-4 mr-2" />
                        <p>Remember me</p></div>
                        <button className="text-md  text-blue-500 ">Forget Password?</button>

                    </div>
                    
                      <button className="bg-purple-500 font-bold text-white w-[90%] p-3 rounded-xl mt-4">SignIn</button>
                      <div className="border-gray-500 border-[0.5px] w-[100%] mt-5"></div>
                <div className=" flex flex-row items-center justify-center w-[100%] mt-5">
                <p className="text-semibold text-gray-700 mt-5 ">Dont have an Account ?  </p>
                <button className="text-semibold mt-5 ">Create one here </button></div>
                </form> </div>
        </div>


    )

}
export default SignIn