import { IoLogoDesignernews } from "react-icons/io";
export const NavBar = ()=>{
    return(
        <div className="w-full h-[10%] shadow-lg flex p-5 justify-between">
            <h1 className="font-Poppin font-bold text-xl flex items-center gap-2"><IoLogoDesignernews/>NewsCenter</h1>
        </div>
    )
}