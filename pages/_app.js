import "bootstrap/dist/css/bootstrap.min.css";
import Footers from "../components/Footer";
import Headers from "../components/Headers";
import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="d-flex flex-column justify-content-between h-100">
        <Headers />
        <Component {...pageProps} />
        <Footers />
      </div>
    </Provider>
  );
}

export default MyApp;
