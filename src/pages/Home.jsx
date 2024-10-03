import Navbar from "../components/NavBar";

const Home = ()=>{
    return(
        <>
            <Navbar></Navbar>
            <div className='flex flex-row h-[82vh] px-4 py-4 bg-purple-50'>

            {/* First Div - 40% width */}
            <div className='w-3/5 flex items-center justify-center'>
                <img className=" h-[400px] rounded-xl shadow-xl shadow-gray-500/50" src="https://img.freepik.com/free-photo/portrait-young-boy_23-2150773172.jpg?t=st=1727948338~exp=1727951938~hmac=b7acf60080fd826fc12842ff18f58fe43c49d45174c031fea1b40c5e150de555&w=1380" alt="child photo"/>
            </div>

            {/* Second Div - 60% width */}
            <div className="w-2/5 p-4 bg-gray-100 rounded-lg shadow-lg h-70vh flex flex-col justify-center">
            {/* Greeting Section */}
            <div className="mb-6 text-[40px] font-semibold text-gray-700">
                <p>Hello,</p>
                <p>Welcome Back</p>
            </div>

            {/* Input Field */}
            <div className="mb-6">
                <input
                onChange={(e) => setRollno(e.target.value)}
                type="text"
                placeholder="Enter Student's Rollno"
                className="border-2 border-gray-300 p-2 w-full focus:border-blue-500 focus:outline-none rounded-xl"
                />
            </div>

            
            {/* Buttons */}
            <div className="flex space-x-4">
                
                <button
                className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg h-16 w-full"
                
                >
                Progress
                </button>
                
                <button
                className="bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg h-16 w-full"
                
                >
                Edit
                </button>
            </div>
            </div>

        </div>
        </>
    )
}
export default Home;