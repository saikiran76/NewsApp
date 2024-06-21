import { MdArrowDropDownCircle } from "react-icons/md";
import { IoIosArrowDropup } from "react-icons/io";
import {useState} from "react"

const CatBar = ({ categories, currentCategory, onSelectCategory }) =>{

    const [visible, setVisible] = useState(false);

    const handleDown = ()=>{
        setVisible(true)
    }

    const handleUp = ()=>{
        setVisible(false)
    }

    return(
        <div className="p-4 md:p-10">
            <h2 className="font-semibold text-xl font-Poppin flex items-center gap-2">
                Categories
                {
                    !visible ? (<div onClick={()=>handleDown()} className="cursor-pointer"><MdArrowDropDownCircle/></div>):

                    (<div onClick={()=>handleUp()} className="cursor-pointer"><IoIosArrowDropup/></div>)

                }
            </h2>
            <ul className={`list-none p-1 font-Poppin font-normal ${visible ? "block" : "hidden"}`}>
                {
                    categories.map((category)=>(
                        <li className={`cursor-pointer p-1 hover:bg-slate-300 ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded p-2 m-1 md:m-1 font-semibold max-w-fit md:w-full`} onClick={() => onSelectCategory(category)} key={category}>
                            {category}
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default CatBar;