import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout currentRoute={"/"}>
      
        <div class="personal-message">
          <h2>Passionate About Writing...</h2>
          <h2>Code for Creation;</h2>
          <h2>Poetry for Inspiration!</h2>
        </div>

        <p class="skill-summary">Game Engines | Graphics | Optimization</p>
      
    </Layout>
  );
};

export default Home;
