import Article from "./Article"
import blogData from "../data/blog";

function ArticleList() {
    const posts = blogData.posts
    return (
        <main>
            {posts.map((post, index) => (
                <Article key={index} title={post.title} date={post.date} preview={post.preview} />
            ))}
        </main>
    );
}

export default ArticleList;
