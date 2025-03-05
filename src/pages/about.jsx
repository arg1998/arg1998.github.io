import Application from "../components/Application";

const AboutMe = () => {
  return (
    <Application currentRoute={"/about"} pageTitle={"ARGOSTA → About Me"}>
      <p>About me</p>
    </Application>
  );
};

export default AboutMe;
