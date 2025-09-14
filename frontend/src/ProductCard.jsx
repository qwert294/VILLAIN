const ProductCard = () => {
    return (
        <div>

            <div className="border-2 border-black w-[350px] h-[450px] flex flex-col items-center pb-5 gap-10 rounded-2xl py-5">
                <img src="vite.svg" alt="Nothing to display" className="w-[150px] h-[150px] p-5   border-5 rounded-full border-amber-800 " />
                <div className="gap-5 items-center flex flex-col">
                    <h2 className="font-bold text-4xl text-red-900 ">Product 1</h2>
                    <p className="text-2xl text-green-600 text-center px-5">This is a sample Product</p>
                    <p className="text-2xl font-bold text-indigo-700">$29.99</p>
                </div>
                <button className="text-black font-bold  bg-yellow-500 w-[60%] p-3 pr-6 pl-6 rounded-full cursor-pointer hover:bg-yellow-400 ">Add To Cart</button>

            </div>
           
        </div>



    )

}
export default ProductCard