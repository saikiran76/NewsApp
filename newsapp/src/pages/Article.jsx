import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoLogoDesignernews } from "react-icons/io";

const ArticlePage = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.title === title)
  );

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="container m-8 font-Poppin w-fit">
        
        <h1 className="font-Poppin font-bold text-2xl flex items-center gap-2 mb-4"><IoLogoDesignernews/>NewsCenter</h1>
    
      <h1 className="text-xl font-bold w-fit">{article.title}</h1>
      <img className="w-full md:w-[50%] my-4" src={article.urlToImage} alt={article.title} />
      <p className='font-serif w-fit mb-3 text-sm p-2 border-blue-500 border-2 rounded'>{article.description}</p>
      <p className='font-serif w-fit'>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
