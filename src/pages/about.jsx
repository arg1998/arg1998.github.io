import Application from "../components/Application";
import MarkdownContent from "../components/BlogMarkdownContent"

import aboutme_markdown from "../data/aboutme/aboutme.md"

const AboutMe = () => {

  const homePagePreviewData = {
    description: "Software Engineer | M.Sc. Computer Science",
    image: "https://www.argosta.me/assets/images/link_preview_img_1.jpeg",
    url: "https://www.argosta.me/about"
  }

  return (
    <Application currentRoute={"/about"} pageTitle={"ARGOSTA → About Me"} pagePreviewData={homePagePreviewData}>
      <div style={{marginTop: 20, padding: 10}}>
      <MarkdownContent MarkdownFileContent={aboutme_markdown} />
      </div>
    </Application>
  );
};

export default AboutMe;
