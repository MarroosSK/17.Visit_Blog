import { useState, useEffect, useLayoutEffect } from "react";
import Create from "./components/blogs/Create";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  AboutPage,
  BlogPage,
  BlogsPage,
  ContactPage,
  GalleryPage,
  Home,
} from "./pages";
import { useScrollTop } from "./hooks/useScrollTop";

const Layout = () => {
  const { isScrolled } = useScrollTop();
  const [isVisible, setIsVisible] = useState(false);

  //scroll
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isScrolled) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isScrolled]);

  //scrollUp
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <button
        id="scrollToTopButton"
        className={isVisible ? "active" : ""}
        onClick={handleTop}
      >
        &#8593;
      </button>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <BlogsPage />,
        },
        {
          path: "/blogs/:id",
          element: <BlogPage />,
        },
        {
          path: "/gallery",
          element: <GalleryPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
