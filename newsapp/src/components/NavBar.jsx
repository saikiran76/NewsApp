import { IoLogoDesignernews } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export const NavBar = ()=>{
    return(
        <div className="w-full h-[10%] shadow-lg block md:flex p-5 items-center justify-between">
            <h1 className="font-Poppin font-bold text-2xl md:font-xl flex items-center gap-2"><IoLogoDesignernews/>NewsCenter</h1>
            <div className="flex items-center gap-3">
                <CiSearch style={{fontSize:"2rem"}}/>
                <input className="rounded p-2 border-gray-300 border-[1.5px] m-1 text-md font-Poppin mt-5 md:mt-0" placeholder="Search here"/>
            </div>
        </div>
    )
}