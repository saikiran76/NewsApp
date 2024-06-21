import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY_NEWS } from './constants';

const API_KEY = API_KEY_NEWS;

export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async ({ category, page }, {getState}) => {
    const state = getState()
    const cachedArticles = state.news.cache[`${category}-${page}`]
    if(cachedArticles){
      return {articles: cachedArticles, fromCache: true};
    }

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'in',
        category: category,
        page: page,
        apiKey: API_KEY
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    console.log(response.data)
    return {articles: response.data.articles, fromCache: true}
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    cache: {},
    articles: [],
    filteredArticles:[],
    searchQuery:'',
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredArticles = state.articles.filter(article =>
        article.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    setNull:(state)=>{
      state.filteredArticles = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        // state.status = 'succeeded';
        state.status = action.payload.fromCache ? `FromCache`:`succeded`;
        state.articles = action.payload.articles;
        if(!action.payload.fromCache){
          const { category, page } = action.meta.arg;
          state.cache[`${category}-${page}`] = action.payload.articles;
        }
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {setSearchQuery, setNull} = newsSlice.actions;
export default newsSlice.reducer;
