import { Link } from 'react-router-dom';
import Icon from '../assets/favicon-32x32.png';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../sharedContext/ThemeContext';

export default function Navabar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [bgColor, setBgColor] = useState(theme ? "bg-white" : "bg-black");

    useEffect(() => {
        setBgColor(theme ? "bg-white" : "bg-black")
    }, [theme])
    return (

        <div className="w-full">
            <div className={'w-7/12 fixed  bg-opacity-90 flex items-center mx-auto ' + bgColor}>
                <div className="flex justify-between font-mono text-primary h-14  items-center w-11/12 mx-auto" >
                    <div className="px-4 py-3 text-2xl  flex items-center relative">
                        <img src={Icon} className=" px-2 " />
                        Ayush Doshi</div>

                    <div className="px-4 py-3  text-lg flex w-1/3 justify-around items-center relative mx-16">

                        {
                            theme && (
                                <button className=" text-primary hover:bg-blue-900 hover:bg-opacity-30 px-3 py-3 rounded-full ease-in-out hover:text-secondary " onClick={toggleTheme}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='h-6 w-6 '>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                    </svg>

                                </button>
                            )
                        }
                        {
                            !theme && (
                                <button className="text-primary hover:bg-blue-900 hover:bg-opacity-30 px-3 py-3 rounded-full ease-in-out hover:text-secondary" onClick={toggleTheme}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                    </svg>
                                </button>
                            )
                        }

                        <button className='hover:bg-blue-900 hover:bg-opacity-30 px-4 py-2 rounded-xl ease-in-out hover:text-secondary'>
                            <Link to={"/"} >About</Link>
                        </button>
                        <button className='hover:bg-blue-900 hover:bg-opacity-30 px-4 py-2 rounded-xl ease-in-out hover:text-secondary'>
                            <Link to={"/project"} >Projects</Link>
                        </button>
                        <button className='hover:bg-blue-900 hover:bg-opacity-30 px-4 py-2 rounded-xl ease-in-out hover:text-secondary'>
                            <Link to={"/resume"} >Resume</Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}