import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
