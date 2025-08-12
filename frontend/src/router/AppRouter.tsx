import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LottiHandelr from "../components/feedback/lottiHandler/LottiHandelr";
import PageSuspenseFallback from "../components/feedback/pageSuspenseFallback/PageSuspenseFallback";
import path from "path";
import ProtectedComponnent from "../components/protectedComponnent/ProtectedComponnent";
const MainLayout = lazy(() => import("@layout/MainLayout"));

/* lazy loading */
const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Catogery = lazy(() => import("@pages/Catogeries"));
const Products = lazy(() => import("@pages/Products"));
const Error = lazy(() => import("@pages/Error"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Orders = lazy(() => import("@pages/Orders"));
const Profile = lazy(() => import("@pages/Profile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <LottiHandelr type="loadingLotti" />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback="loading please wait..">
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "categories",
        element: (
          <PageSuspenseFallback>
            <Catogery />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/categories/:prefix",
        loader: async ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Not Found", {
              status: 404,
              statusText: "Not Found",
            });
          }
          return;
        },

        element: (
          <PageSuspenseFallback>
            <Products />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "about",
        element: (
          <PageSuspenseFallback>
            <About />
          </PageSuspenseFallback>
        ),
      },

      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedComponnent>
            <PageSuspenseFallback>
              <Wishlist />
            </PageSuspenseFallback>
          </ProtectedComponnent>
        ),
      },

      {
        path: "cart",
        element: (
          <PageSuspenseFallback>
            <Cart />
          </PageSuspenseFallback>
        ),
      },
      /* sub layouts  */
      {
        path: "porfile",
        element: (
          <ProtectedComponnent>
            <PageSuspenseFallback>
              <Profile />
            </PageSuspenseFallback>
          </ProtectedComponnent>
        ),
      },
    ],
  },
  /* anthor layout  */
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
