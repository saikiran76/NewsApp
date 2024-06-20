const CatBar = ({ categories, currentCategory, onSelectCategory }) =>{
    return(
        <div className="p-10 hidden md:block">
            <h2 className="font-semibold text-xl font-Poppin">Categories</h2>
            <ul className="list-none p-1 font-Poppin font-normal">
                {
                    categories.map((category)=>(
                        <li className={`cursor-pointer p-1 hover:bg-slate-300 ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded p-2 m-1 font-semibold`} onClick={() => onSelectCategory(category)} key={category}>
                            {category}
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default CatBar;