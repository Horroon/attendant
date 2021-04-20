import { Header } from "./pages/header/index";
import { Provider } from "react-redux";
import { store } from "./models/index";
import MainRoutes from "./pages/main";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div className="App">
      <ToastProvider autoDismiss autoDismissTimeout={6000} placement={"bottom-right"}>
        <Provider store={store}>
          <Header />
          <MainRoutes />
        </Provider>
      </ToastProvider>
    </div>
  );
}

export default App;
