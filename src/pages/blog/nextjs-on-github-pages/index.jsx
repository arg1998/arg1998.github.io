
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Application from "../../../components/Application";
import BlogPostVerticalLayout from "../../../components/BlogPostVerticalLayout"
import BlogPostBanner from "../../../components/BlogPostBanner";
import TableOfContents from "../../../components/TableOfContents";
import MarkdownContent from "../../../components/MarkdownContent";

//----------------------------- Import Markdown Content Here --------------------------------
import markdownContent from "./content.md"

const NextjsOnGithubPages = ({ postData, socialPreviewData }) => {

  // redirect to 404 if this post is not on display
  if (!postData.active) {
    const router = useRouter();
    useEffect(() => { router.replace('/404'); }, []);
    return null;
  }


  return (
    <Application currentRoute={postData.URI} pageTitle={postData.fancyTitle} pagePreviewData={socialPreviewData}>
      <BlogPostVerticalLayout>
        <BlogPostBanner postData={postData} bannerImage={"banner.jpg"} />
        <TableOfContents markdownContents={[markdownContent]} showHeader={true} generateReference={true}/>

        <MarkdownContent MarkdownFileContent={markdownContent}/>

      </BlogPostVerticalLayout>
    </Application>
  );
};

// Fetch data at build time
import POSTS from "../../../data/posts.json";
export async function getStaticProps() {
  const { nextjsOnGithubPages } = POSTS;
  const socialPreviewData = {
    description: nextjsOnGithubPages.excerpt || "",
    keywords: nextjsOnGithubPages?.tags.join(", ") || "",
    image: "https://www.argosta.me" + nextjsOnGithubPages.imageUri,
    url: nextjsOnGithubPages.URL,
    type: "article"
  }

  return {
    props: {
      postData: nextjsOnGithubPages,
      socialPreviewData
    },
  };
}

export default NextjsOnGithubPages;
