import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ArticlePage from './pages/Article';

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article/:title" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
};

export default MainApp;
