import TagsDatabase from "../data/postTags"
import { formatDate } from "../utils/formatDate"


const BlogPostBanner = ({ postData,
    bannerImage = '',
    bannerImageMaxHeight = null,
    bannerImagePosition = { x: 0.5, y: 0.5 },
    drawBttomseparator = false
}) => {
    return (
        <div id="blog-post-banner-container">
            <a className="blog-post-back-btn" href="/blog" ><i className="bi bi-arrow-left" /> Back to Blog</a>

            {/* Post Header Title */}
            <h1 className="title" >{postData.fancyTitle}</h1>


            <div className="blog-post-tag-date-container">
                <span className="blog-post-banner-date">{formatDate(new Date(postData.date))}</span>

                <div style={{ display: 'flex' }}>
                    {postData.tags && Object.values(postData.tags).length > 0 && (
                        <div>
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
            </div>


            {/* Banner Image */}
            {bannerImage &&
                <img
                    className="blog-post-banner-image"
                    src={bannerImage}
                    alt={postData.fancyTitle}
                    style={{
                        maxHeight: bannerImageMaxHeight ? bannerImageMaxHeight : null,
                        objectPosition: `${bannerImagePosition.x * 100}% ${bannerImagePosition.y * 100}%`
                    }}
                />
            }

            {/* Horzontal Separator */}
            {drawBttomseparator && <hr />}
        </div>
    )

}


export default BlogPostBanner;