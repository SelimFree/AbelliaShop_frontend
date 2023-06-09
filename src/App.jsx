import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Checkout from "./pages/Checkout/Checkout";
import "./app.scss";
import { createContext, useReducer, useState } from "react";

const Layout = ({setSearch}) => {
    
    return (
        <div className="app">
            <Navbar setSearch = {setSearch}/>
            <Outlet />
            <Footer/>
        </div>
    );
};

const defaultGlobalState = {
    lang: "RUS",
    search: "",
};

export const globalStateContext = createContext(defaultGlobalState);
export const dispatchStateContext = createContext(undefined);

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      (state, newValue) => ({ ...state, ...newValue }),
      defaultGlobalState
    );
    return (
      <globalStateContext.Provider value={state}>
        <dispatchStateContext.Provider value={dispatch}>
          {children}
        </dispatchStateContext.Provider>
      </globalStateContext.Provider>
    );
};

function App() {
    const [search, setSearch] = useState("");

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout setSearch = {setSearch} />,
            children: [
                {
                    path: "/",
                    element: <Home setSearch = {setSearch}/>,
                },
                {
                    path: "/products",
                    element: <Products search = {search}/>,
                },
                {
                    path: "/products/:params",
                    element: <Products search = {search}/>,
                },
                {
                    path: "/product/:id",
                    element: <Product/>,
                },
                {
                    path: "/checkout",
                    element: <Checkout/>,
                },
            ],
        },
    ]);


    return (
        <GlobalStateProvider>
            <RouterProvider router={router} />
        </GlobalStateProvider>
    );
}

export default App;
