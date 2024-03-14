import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
