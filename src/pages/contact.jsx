import Application from "../components/Application";
import MarkdownContent from "../components/BlogMarkdownContent"

import contact_me_markdown from "../data/contact/contact_me.md"

const ContactMe = () => {
  const homePagePreviewData = {
    description: "Software Engineer | M.Sc. Computer Science",
    image: "https://www.argosta.me/assets/images/link_preview_img_1.jpeg",
    url: "https://www.argosta.me/contact"
  }
  return (
    <Application currentRoute={"/contact"} pageTitle={"ARGOSTA → Contact Me"} pagePreviewData={homePagePreviewData}>
      <div style={{marginTop: 20, padding: 10}}>
        <MarkdownContent MarkdownFileContent={contact_me_markdown} />
      </div>
    </Application>
  );
};

export default ContactMe;
