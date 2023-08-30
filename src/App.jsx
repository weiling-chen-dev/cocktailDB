import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Landing,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter,
  SingleErrorPage,
} from "./pages";

import { landingLoader } from "./pages/Landing";
import { cocktailLoader } from "./pages/Cocktail";
import { formSubmitAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SingleErrorPage />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: cocktailLoader(queryClient),
        errorElement: <SingleErrorPage />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: formSubmitAction,
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
