const Home = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen ">
            <div className="flex flex-col justify-end p-4 w-1/5 min-h-5/6 border border-gray-200 shadow-md">
                <span className="text-xl font-bold">Welcome to PopX</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                <div className="">
                    <button className="bg-blue-500 text-sm text-white mt-4 px-4 py-1 rounded w-full">Create Account</button>
                    <button className="bg-blue-200 text-sm text-gray-800 mt-2 px-4 py-1 rounded w-full">Already Registered? Login</button>
                </div>
            </div>
        </div>
    )
}
export default Home

