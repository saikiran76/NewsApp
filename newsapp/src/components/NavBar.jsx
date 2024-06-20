import { IoLogoDesignernews } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export const NavBar = ()=>{
    return(
        <div className="w-full h-[10%] shadow-lg flex p-5 items-center justify-between">
            <h1 className="font-Poppin font-bold text-xl flex items-center gap-2"><IoLogoDesignernews/>NewsCenter</h1>
            <div className="flex items-center gap-3">
                <CiSearch/>
                <input className="rounded p-2 border-gray-500 border-2 m-1 text-md font-Poppin" placeholder="Search here"/>
            </div>
        </div>
    )
}