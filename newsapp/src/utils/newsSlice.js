import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '52528d471d614a33a80ce050118344ce';

export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async ({ category, page }, {getState}) => {
    const state = getState()
    const cachedArticles = state.news.cache[`${category}-${page}`]
    if(cachedArticles){
      return {articles: cachedArticles, fromCache: true};
    }

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=${API_KEY}`
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

export const {setSearchQuery} = newsSlice.actions;
export default newsSlice.reducer;
