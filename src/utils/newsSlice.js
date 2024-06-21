import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY_NEWS } from './constants';

const API_TOKEN = API_KEY_NEWS
export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async ({ category, page }) => {
    const response = await axios.get(`https://api.thenewsapi.com/v1/news/top`, {
      params: {
        api_token: API_TOKEN,
        cache: {},
        locale: 'us',
        categories: category,
        page: page,
      }
    });
    // return response.data.data;
    return response.data.data
  }
);

export const fetchArticleByUuid = createAsyncThunk(
  'news/fetchArticleByUuid',
  async (uuid, { getState }) => {
    const { articles } = getState().news;
    const article = articles.find(article => article.uuid === uuid);
    if (article) {
      return article;
    }
    const response = await axios.get(`https://api.thenewsapi.com/v1/news/top`, {
      params: {
        api_token: API_TOKEN,
        locale: 'us',
        uuid: uuid
      }
    });
    const fetchedArticles = response.data.data;
    const foundArticle = fetchedArticles.find(article => article.uuid === uuid);
    return foundArticle || null;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    filteredArticles: [],
    selectedArticle: null,
    searchQuery: '',
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
    setNull: (state) => {
      state.filteredArticles = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
        state.filteredArticles = action.payload.filter(article =>
          article.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchArticleByUuid.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticleByUuid.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedArticle = action.payload;
      })
      .addCase(fetchArticleByUuid.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery, setNull } = newsSlice.actions;
export default newsSlice.reducer;
