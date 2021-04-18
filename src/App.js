import { Header } from "./pages/header/index";
import { Provider } from "react-redux";
import { store } from "./models/index";
import MainRoutes from "./router/router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <MainRoutes />
      </Provider>
    </div>
  );
}

export default App;
