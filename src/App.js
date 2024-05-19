// import logo from "./logo.svg";
import "./App.css";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./SPA/Routes";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Toaster />
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
