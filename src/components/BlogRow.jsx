import TagsDatabase from "../data/postTags";
import { formatDate } from "../utils/formatDate"
const BlogRow = ({ postData }) => {

  const has_image = !!postData.imageUri;
  if(!has_image) {
    throw new Error("A post must have an image")
  }
  return (
    <div className="blog-row">
      <div className="blog-card-left-border"></div>
      <div className="blog-card">
        {/* Blog Image */}
        <div className="blog-card-img">
          {has_image  && <img
            src={postData.imageUri}
            className="card-img-top"
            alt={postData.imageAlt}
          />}
          {/* Post Tags */}
          {postData.tags && Object.values(postData.tags).length > 0 && (
            <div className="post-tags">
              {postData.tags.map((tag_id, index) => {
                const tag = TagsDatabase[tag_id];
                if (tag) {
                  return <span className="single-post-tag" key={index}>{tag.label}</span>;
                }
                return null;
              })}
            </div>
          )}
        </div>

        {/* Blog Content */}
        <div className="blog-card-body">
          <h5 className="blog-card-title">{postData.fancyTitle}</h5>
          <p className="blog-card-text">{postData.excerpt}</p>

          {/* Footer with Date and Read More Link */}
          <div className="blog-card-footer">
            <p className="publish-date">
              <small>{formatDate(new Date(postData.date))}</small>
            </p>
            <a
              href={`/blog/${postData.slug}`}
              className="btn btn-primary read-more"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRow;
