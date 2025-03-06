import Application from "../components/Application";
import MarkdownContent from "../components/BlogMarkdownContent"

import aboutme_markdown from "../data/aboutme/aboutme.md"

const AboutMe = () => {
  return (
    <Application currentRoute={"/about"} pageTitle={"ARGOSTA → About Me"}>
      <div style={{marginTop: 20, padding: 10}}>
      <MarkdownContent MarkdownFileContent={aboutme_markdown} />
      </div>
    </Application>
  );
};

export default AboutMe;
