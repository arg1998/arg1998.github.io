// pages/_app.js

import "rsuite/dist/rsuite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../styles/custom.css";
import "../styles/responsive.css";




function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
