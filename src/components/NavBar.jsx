import { IoLogoDesignernews } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setSearchQuery } from "../utils/newsSlice";

export const NavBar = ()=>{
    const articles = useSelector((state)=>state.news.articles)
    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch()
    const suggestionsRef = useRef(null);

    const handleSearchChange = (e) =>{
        const value = e.target.value;
        setQuery(value);

        if(value){
            const filteredSuggestions = articles.filter(article =>
                article.title.toLowerCase().includes(value.toLowerCase())
            )

            setSuggestions(filteredSuggestions)
        } else {
            setSuggestions([]);
        }
    }

    const handleClick = (title) =>{
        setQuery(title)
        setSuggestions([])
        dispatch(setSearchQuery(title))

    }

    const handleOuterClick = (event)=>{
        if(suggestionsRef.current && !suggestionsRef.current.contains(event.target)){
            setSuggestions([]);
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown", handleOuterClick);
        return () => {
            document.removeEventListener("mousedown", handleOuterClick);
        }
    }, [])
        
    return(
        <div className="w-full h-[10%] shadow-lg block md:flex gap-[8rem] p-5 items-center">
            <h1 className="font-Poppin font-bold text-2xl md:font-xl flex items-center gap-2"><IoLogoDesignernews/>NewsCenter</h1>
            <div className="flex items-center gap-2">
                <CiSearch style={{fontSize:"1.5rem"}}/>
                <input
                 value={query}
                 onChange={handleSearchChange}
                 className="rounded p-2 border-gray-300 border-[1.5px] m-1 text-md font-Poppin mt-5 md:mt-0"
                 placeholder="Search Articles"/>
                {suggestions.length > 0 && (
                    <ul ref={suggestionsRef} className="absolute top-28 md:top-16 left-14 md:left-0 bg-white border border-gray-300 w-[50%] mt-1 rounded shadow-lg z-10 text-xs font-serif">
                        {suggestions.map((suggestion) => (
                            <li
                                key={suggestion.title}
                                className="p-3 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleClick(suggestion.title)}
                            >
                                {suggestion.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}