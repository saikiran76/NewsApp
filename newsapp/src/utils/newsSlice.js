import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '52528d471d614a33a80ce050118344ce';

export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async ({ category, page }) => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=${API_KEY}`
    );
    console.log(response.data)
    return response.data;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
