import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";

export const Card = ({article}) =>{
    return(
        <div className="border-[#293548] border-1 rounded-lg shadow-md p-2 overflow-hidden w-[15rem] font-serif hover:scale-105 duration-150 cursor-pointer h-[24rem]">
            <img className="h-48 object-cover rounded" src={article.urlToImage} alt={article.title} />
            
            {/* <Link to={`/article/${article.title}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"> */}
            <h1 className="font-semibold m-2 text-sm">{article.title}</h1>
            {/* </Link> */}

            <button
            className="px-3 text-base font-Poppin font-normal py-2 m-1 flex gap-2 items-center bg-gray-200 rounded hover:bg-blue-400 duration-200 hover:text-gray-200">
            Read More <FiExternalLink/>
            </button>

            {/* <p className="mt-2 text-gray-500 text-sm">{article.description}</p> */}

        </div>
    )
}