
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Application from "../../../components/Application";
import BlogPostVerticalLayout from "../../../components/BlogPostVerticalLayout"
import BlogPostBanner from "../../../components/BlogPostBanner";
import TableOfContents from "../../../components/TableOfContents";
import MarkdownContent from "../../../components/MarkdownContent";

//----------------------------- Import Markdown Content Here --------------------------------
import markdown_content from "./content.md"

const StatefulCppPart1 = ({postData, socialPreviewData}) => {

  // redirect to 404 if this post is not on display
  if (!postData.active) {
    const router = useRouter();
    useEffect(() => { router.replace('/404');}, []);
    return null;
  }
  

  return (
    <Application currentRoute={postData.URI} pageTitle={postData.fancyTitle} pagePreviewData={socialPreviewData}>
      <BlogPostVerticalLayout>
        <BlogPostBanner postData={postData} bannerImage={postData.URI + "/banner.jpg"} />
        <TableOfContents markdownContents={[markdown_content]} showHeader={true} generateReference={true} />

        <MarkdownContent MarkdownFileContent={markdown_content} />

      </BlogPostVerticalLayout>
    </Application>
  );
};

// Fetch data at build time
import POSTS from "../../../data/posts.json";
export async function getStaticProps() {
  const { statefulCppPart1 } = POSTS;
  const socialPreviewData = {
    description: statefulCppPart1.excerpt || "",
    keywords: statefulCppPart1?.tags.join(", ") || "",
    image: "https://www.argosta.me" + statefulCppPart1.imageUri,
    url: statefulCppPart1.URL,
    type: "article"
  }

  return {
    props: {
      postData: statefulCppPart1,
      socialPreviewData
    },
  };
}

export default StatefulCppPart1;
