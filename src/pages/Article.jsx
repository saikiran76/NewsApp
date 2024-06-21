import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArticleByUuid } from '../utils/newsSlice';
import Loading from '../components/Loading';
import { Error } from '../components/Error';
import { IoLogoDesignernews } from 'react-icons/io';
import { SlUser } from "react-icons/sl";

const ArticlePage = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.news.selectedArticle);
  const status = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    dispatch(fetchArticleByUuid(uuid));
  }, [dispatch, uuid]);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <Error message={error} />;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="p-[4rem] m-4">
      <h1 className="font-Poppin font-bold text-xl flex items-center gap-2 mb-4"><IoLogoDesignernews/>NewsCenter</h1>
      <div className='rounded border-black border-[1.5px] p-7'>
        <h1 className="text-3xl font-bold mb-5 font-Poppin">{article.title}</h1>
        <p className='m-2 font-Poppin flex gap-1 items-center'>Author:<SlUser/></p>
        <img src={article.image_url} alt={article.title} className="w-full mb-4" />
        <p className="mb-4 font-serif p-2 border-blue-500 border-2 rounded">{article.description}</p>
        <p className='font-serif'>{article.snippet}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-serif">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticlePage;
