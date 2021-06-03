import { Link } from "react-router-dom";
import "./index.css";
const BlogList = ({ data, title }) => {
  return (
    <>
      <h2 className="title">{title}</h2>
      {data.map((elem) => (
        <div className="blog-preview" key={elem.id}>
          <Link to={`/blogs/${elem.id}`}>
            <h2>{elem.title}</h2>
            <p>written by {elem.author}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogList;
