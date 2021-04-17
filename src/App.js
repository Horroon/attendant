import { Header } from "./pages/header/index";
import { Provider } from "react-redux";
import { store } from "./models/index";
import MainRoutes from "./pages/main";

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
