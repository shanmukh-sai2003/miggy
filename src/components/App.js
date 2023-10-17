import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, Outlet} from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import appStore from "../utils/store/appStore";
import CartPage from "./CartPage";

// lazy loading
const About = lazy(() => import("./About"));

function App() {
    return (
        <Provider store={appStore}>
            <div className="main">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<div>loading...</div>}><About/></Suspense>
            },
            {
                path: "/cart",
                element: <CartPage/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ]
    }
]);

export default appRouter;