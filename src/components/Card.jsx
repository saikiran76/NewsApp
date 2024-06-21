import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { setNull } from '../utils/newsSlice';

export const Card = ({article}) =>{
    const dispatch = useDispatch();

    return(
        <div className="border-gray-300 border-[1px] rounded-lg hover:shadow-md p-2 overflow-hidden w-[30rem] md:w-[15rem] font-serif hover:scale-105 duration-150 cursor-pointer h-[24rem] flex flex-col justify-between">
            <img className="h-48 object-cover rounded" src={article.urlToImage} alt={article.title} />
            <div>
                <h1 className="font-semibold m-2 text-sm">{article.title}</h1>
                
                <Link to={`/article/${article.title}`}>
                    <button
                    onClick={()=>{
                        dispatch(setNull())
                    }}
                    className="px-3 text-base font-Poppin font-normal py-2 m-1 flex gap-2 items-center bg-gray-200 rounded hover:bg-blue-400 duration-200 hover:text-gray-200">
                    Read More <FiExternalLink/>
                    </button>
                </Link>
            </div>

            {/* <p className="mt-2 text-gray-500 text-sm">{article.description}</p> */}

        </div>
    )
}