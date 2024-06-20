import './App.css'
import { Card } from './components/Card';
import CatBar from './components/CatBar';
import { NavBar } from './components/NavBar';
import Pagination from './components/Pagination';
import Loading from './components/Loading';
import {Error} from './components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchArticles } from './utils/newsSlice';


const categories = ['business', 'technology', 'entertainment']; 

const App = ()=>{
  const dispatch = useDispatch();
  const articles = useSelector((state)=>state.news.articles)
  const status = useSelector((state)=>state.news.status)
  const error = useSelector((state)=> state.news.error)

  const [category, setCategory] = useState(categories[0])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    dispatch(fetchArticles({category, page}))
  }, [category, page, dispatch])

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return(
    <>
    <div className='w-full'>
      <NavBar/>
      
        <div className='block md:flex w-full'>
          <div><CatBar categories={categories} currentCategory={category} onSelectCategory={handleCategoryChange}/></div>
          {status === 'loading' && <Loading />}
          {status === 'failed' && <Error message={error} />}
          {(status === 'succeeded' || status === "FromCache") && (
          <div className="font-Inter font-bold flex flex-wrap justify-center m-1 md:m-8 gap-4 p-1 md:p-4">
            {
            articles.map((article)=>(
              <Card key={article.title} article={article}/>
            ))
            }

            
          </div>
          )}
          
        </div>
        <Pagination currentPage={page} totalPages={6} onPageChange={handlePageChange} />
      
    </div>

    </>
  )
}

export default App;