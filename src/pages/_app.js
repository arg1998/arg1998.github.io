// pages/_app.js

import "../styles/custom.css";
import "../styles/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
