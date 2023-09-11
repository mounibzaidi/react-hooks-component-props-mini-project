import blogData from "../data/blog";

function About({ image = "https://via.placeholder.com/215", about = blogData.about }) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About;
