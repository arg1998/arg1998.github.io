
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Application from "../../../components/Application";
import BlogPostVerticalLayout from "../../../components/BlogPostVertcalLayout"
import BlogPostBanner from "../../../components/BlogPostBanner";
import TableOfContents from "../../../components/TableOfContents";
import BlogMarkdownContent from "../../../components/BlogMarkdownContent";

//----------------------------- Import Markdown Content Here --------------------------------
import markdownContent from "./content.md"

const NextjsOnGithubPages = ({postData}) => {

  // redirect to 404 if this post is not on display
  if (!postData.active) {
    const router = useRouter();
    useEffect(() => { router.replace('/404');}, []);
    return null;
  }
  

  return (
    <Application currentRoute={postData.URI} pageTitle={postData.fancyTitle}>
      <BlogPostVerticalLayout>
        <BlogPostBanner postData={postData} bannerImage={"banner.jpg"} />
        <TableOfContents markdownContents={[markdownContent]} showHeader={true} generateReference={true} />

        <BlogMarkdownContent MarkdownFileContent={markdownContent} />

      </BlogPostVerticalLayout>
    </Application>
  );
};

// Fetch data at build time
import POSTS from "../../../data/posts.json";
export async function getStaticProps() {
  const { nextjsOnGithubPages } = POSTS;

  return {
    props: {
      postData: nextjsOnGithubPages,
    },
  };
}

export default NextjsOnGithubPages;
