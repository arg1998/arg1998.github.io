import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout currentRoute={"/"} pageTitle={"ARGOSTA → Home"}>
      <div className="personal-message">
        <h2>Passionate About Writing...</h2>
        <h2>Code for Creation;</h2>
        <h2>Poetry for Inspiration!</h2>
      </div>

      <p className="skill-summary">Game Engines | Graphics | Optimization</p>
    </Layout>
  );
};

export default Home;
