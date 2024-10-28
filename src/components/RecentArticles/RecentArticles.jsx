const articles = [
  {
    id: 1,
    title: "Corporate Law Insights",
    summary: "Understanding the basics of corporate law...",
    image: "article1.jpg",
  },
  {
    id: 2,
    title: "Intellectual Property Basics",
    summary: "Protecting your intellectual assets...",
    image: "article2.jpg",
  },
  {
    id: 3,
    title: "Navigating Real Estate Law",
    summary: "Important considerations in real estate...",
    image: "article3.jpg",
  },
];

const RecentArticles = () => {
  return (
    <section className="recent-articles">
      <div className="container">
        <h3>Recent Articles</h3>
        <div className="articles-list">
          {articles.map((article) => (
            <article key={article.id} className="article-item">
              <img src={article.image} alt={article.title} />
              <h4>{article.title}</h4>
              <p>{article.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
