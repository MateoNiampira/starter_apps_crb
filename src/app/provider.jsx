"use client";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import {store} from "./store";
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Provider store={store}>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"/>
            {children}
      </Provider>
    </SessionProvider>
  );
}