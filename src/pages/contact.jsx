import Application from "../components/Application";
import MarkdownContent from "../components/BlogMarkdownContent"

import contact_me_markdown from "../data/contact/contact_me.md"

const ContactMe = () => {
  return (
    <Application currentRoute={"/contact"} pageTitle={"ARGOSTA → Contact Me"}>
      <div style={{marginTop: 20, padding: 10}}>
        <MarkdownContent MarkdownFileContent={contact_me_markdown} />
      </div>
    </Application>
  );
};

export default ContactMe;
