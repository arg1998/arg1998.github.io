import { useState } from "react";
import Fuse, * as fuse from "fuse.js";
import Application from "../../components/Application";
import FilterBar from "../../components/FilterBar";
import BlogRow from "../../components/BlogRow";
import __post_data from "../../data/posts.json";
import PostsTagSource from "../../data/postTags";

const postData = Object.values(__post_data).filter((post) => post.active)

const Blog = () => {
  const [filterQuery, setFilterQuery] = useState({});
  const [sortPostsNewest, setSortPostsNewest] = useState(true);

  const onFilterbarQueryChanegd = (query) => {
    setFilterQuery(query);
  };

  const filterPostData = () => {
    const isSameMonthYear = (A, B) => {
      return (
        A.getFullYear() === B.getFullYear() && A.getMonth() === B.getMonth()
      );
    };

    let _posts = postData;
    if (filterQuery.selectedTag) {
      _posts = _posts.filter((post) =>
        post.tags.includes(filterQuery.selectedTag)
      );
    }

    if (filterQuery.selectedDate) {
      _posts = _posts.filter((post) =>
        isSameMonthYear(new Date(post.date), filterQuery.selectedDate)
      );
    }

    if (filterQuery.searchQuery) {
      const options = {
        keys: ["fancyTitle", "excerpt"],
        threshold: 0.3,
        includeScore: true,
      };

      const result = new Fuse(_posts, options).search(filterQuery.searchQuery);

      _posts = result.map((val) => val.item);
    }


    
    
    return _posts;
  };

  let postDataFiltered = filterPostData();

  if(sortPostsNewest){
    postDataFiltered.sort((a, b) => b.date - a.date)
  } else {
    postDataFiltered.sort((a, b) => a.date - b.date);
  }

    
  return (
    <Application currentRoute={"/blog"} pageTitle={"ARGOSTA → Blog"}>
      <FilterBar
        onFilterBarUpdate={onFilterbarQueryChanegd}
        TagSource={PostsTagSource}
      />

      <div id="posts-container" className="blog-container">
        {postDataFiltered.map((single_post_data) => {
          return (
            <BlogRow key={single_post_data.date} postData={single_post_data} />
          );
        })}
      </div>
    </Application>
  );
};

export default Blog;
