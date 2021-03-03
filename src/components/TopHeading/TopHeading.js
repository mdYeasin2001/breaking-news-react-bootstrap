import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeading = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e51a5085b6314f16878112af9f4aea06')
        .then(response => response.json())
        .then(data => setArticles(data.articles))
        .catch(error => error);
    }, [])

    return (
        <div>
            <h1>Top Heading: {articles.length}</h1>
            {articles.map(article => <News article={article}></News>)}
        </div>
    );
};

export default TopHeading;