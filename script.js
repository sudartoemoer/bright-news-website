// Featured article
const featuredDiv = document.getElementById('featured-article');
featuredDiv.innerHTML = `
    <article>
        <h3>${featuredArticle.title}</h3>
        <p class="meta">${featuredArticle.author} | ${featuredArticle.date}</p>
        <p>${featuredArticle.summary}</p>
        <a href="#">Read more</a>
    </article>
`;

// Categories
function loadArticles(categoryId, data) {
    const container = document.getElementById(categoryId + '-articles');
    data.forEach(article => {
        const art = document.createElement('article');
        art.innerHTML = `
            <h3>${article.title}</h3>
            <p class="meta">${article.date}</p>
            <p>${article.summary}</p>
            <a href="#">Read more</a>
        `;
        container.appendChild(art);
    });
}

loadArticles('world', articles.world);
loadArticles('business', articles.business);
loadArticles('tech', articles.tech);

// Trending
const trendingList = document.getElementById('trending-list');
articles.trending.forEach(topic => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#">${topic}</a>`;
    trendingList.appendChild(li);
});
