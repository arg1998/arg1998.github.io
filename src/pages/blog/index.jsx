import { useState } from "react";
import Fuse, * as fuse from "fuse.js";
import Layout from "../../components/Layout";
import FilterBar from "../../components/FilterBar";
import BlogRow from "../../components/BlogRow";
import __post_data from "../../data/posts.json";

const postData = Object.values(__post_data);

const Blog = () => {
  const [filterQuery, setFilterQuery] = useState({});

  const onFilterbarQueryChanegd = (query) => {
    console.log(query);
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

  return (
    <Layout currentRoute={"/blog"} pageTitle={"ARGOSTA → Blog"}>
      <FilterBar onFilterBarUpdate={onFilterbarQueryChanegd} />

      <div id="posts-container" className="blog-container">
        {postDataFiltered.map((single_post_data) => {
          return (
            <BlogRow key={single_post_data.date} postData={single_post_data} />
          );
        })}
      </div>
    </Layout>
  );
};

export default Blog;
