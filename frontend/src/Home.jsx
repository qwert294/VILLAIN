const Home = () => {
    const posts = [

        {
            id: 1,
            title: "Getting Started with React and Tailwind CSS",
            description: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from set",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "sai"
        },
        {
            id: 2,
            title: "Getting Started with React and Tailwind CSS",
            description: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from set",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "sai"
        },
        {
            id: 3,
            title: "Getting Started with React and Tailwind CSS",
            description: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from set",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "sai"
        }, {
            id: 4,
            title: "Getting Started with React and Tailwind CSS",
            description: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from set",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "sai"
        },
        {
            id: 5,
            title: "Getting Started with React and Tailwind CSS",
            description: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from set",
            time: "5 min read",
            profile: "vite.svg",
            pic: "image.png",
            author: "sai"
        },
        {
            id: 6,
            title: "Getting Started with React and Tailwind CSS",
            description: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from set",
            time: "5 min read",
            profile: "vite.svg",
            pic: "suri.png",
            author: "sai"
        }
    ]
    return (
        <div className="  ">
            <div className="">
                <h1 className="font-bold text-4xl text-black text-center">Welcome To Blog-Verse</h1>
                <p className="text-center text-gray-900 max-w-xl mx-auto">Discover amazing stories, insights, and ideas from our community of writers.<span><button className="text-blue-500-400 underline text-blue-600 decoration-blue-500 ">Sign in</button></span> to create your own posts and save your favorites.</p>
                <div className="flex flex-row w-1/3">
                    {
                        posts.map((post)=>(
                            <div key={post.id}>
                                <div>{<img src="photo.png" alt="suri " />}
                                    </div>
                                    {<img src="suri.png" alt="sf"></img>}
                                    {post.author}
                                    <div>{post.title}</div>
                                    <div>{post.description}</div>
                                    <div>{post.title}</div>
                                    <div>{post.time}</div>
                                    <div>{post.profile}</div>
                                    <div>{post.pic}</div>
                                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}


export default Home;
{/*     
            </div>
            <div className="border-1 border-black w-1/4 ">
                <img src="suri.jpg" alt="no" className="w-[100%] h-[200px]" />
                <div className="">
                    <img src="image.png" alt="" className="w-[10px] h-[100px]" />
                </div>
             */}
