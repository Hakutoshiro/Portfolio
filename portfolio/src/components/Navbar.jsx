import Icon from '../assets/favicon-32x32.png';

export default function Navabar() {
    return (
        <div className='w-7/12 fixed bg-backgroundColor bg-opacity-90 flex items-center'>
            <div className="flex justify-between font-mono text-primary h-14  items-center w-11/12 mx-auto" >
                <div className="px-4 py-3 text-2xl  flex items-center relative">
                    <img src={Icon} className=" px-2 " />
                    Ayush Doshi</div>
                <div className="px-4 py-3 text-lg flex w-1/3 justify-around items-center relative">
                    <button className='hover:bg-blue-900 hover:bg-opacity-30 px-4 py-2 rounded-xl ease-in-out hover:text-secondary'>
                        <a href="/" className="">About</a>
                    </button>
                    <button className='hover:bg-blue-900 hover:bg-opacity-30 px-4 py-2 rounded-xl ease-in-out hover:text-secondary'>
                        <a href="/project" className="">Projects</a>
                    </button>
                    <button className='hover:bg-blue-900 hover:bg-opacity-30 px-4 py-2 rounded-xl ease-in-out hover:text-secondary'>
                        <a href="/resume" className="">Resume</a>
                    </button>
                </div>
            </div>
            <button className=" text-primary hover:bg-blue-900 hover:bg-opacity-30 px-3 py-3 rounded-full ease-in-out hover:text-secondary ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" className='h-6 w-6 '>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                    
            </button>
        </div>
    )
}