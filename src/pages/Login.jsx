import login from '../assets/images/login.png';
import logo from '../assets/logo.svg';

export default function Login() {
    return (
        <>
            <div className='w-full h-screen flex items-center justify-center'>
                <div className='w-[35%] h-[70%] bg-[#00B4D8] bg-opacity-50 backdrop-blur-lg rounded-[10px] flex flex-col items-center shadow-[10px_10px_10px_rgba(0,0,0,0.5)]'>
                    <img className='w-[100px] h-[100x] drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)]' src={logo} alt="Logo" />
                    <h1 className='font-holtwood font-black text-[48px] text-[#FFFFFF] drop-shadow-[10px_10px_10px_rgba(0,0,0,0.3)]'>Sign In</h1>
                    <form className='flex flex-col h-[100%] w-[65%] justify-around'>
                    <div className="flex w-full justify-center items-center">
                            <div className="w-[100%] relative">
                                <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="email" id="email" />
                                <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="password">
                                    Email
                                </label>
                                <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                                    <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex w-full justify-center items-center">
                            <div className="w-[100%] relative">
                                <input className="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-white focus:border-blue-700" type="text" placeholder="" name="password" id="password" />
                                <label className="absolute text-white text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-blue-700" for="password">
                                    Password
                                </label>
                                <svg className="absolute top-6 left-4 fill-current text-white peer-focus:text-blue-700" width="18" height="18" viewBox="0 0 344 384">
                                    <path d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z" />
                                </svg>
                            </div>
                        </div>
                        <button className="self-center border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">

                            <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                            <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
                            <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
                            <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
                            <p className="z-10">Sign In</p>
                        </button>

                    </form>
                </div>
            </div>
            <img className="top-0 -z-20 absolute h-screen w-full" src={login} alt="Login" />
        </>
    )
}