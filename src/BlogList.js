const BlogList = (props) => {
  const blogs = props.blogs;
  return (
    <div>
      {blogs.map((blog) => (
        <h1 key={blog.id}>{blog.title}</h1>
      ))}
    </div>
  );
};
export default BlogList;
