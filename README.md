# Cocktail Info App (Frontend)

## Description

Welcome to my React practice project! This is a simple App made in React framework and Vite for development environment. It allows users to search the cocktails and see the details of the drink provided by [TheCocktailDB](https://www.thecocktaildb.com/).

## Front-End

- [React Router](https://reactrouter.com/en/main): using latest React Router syntax (v6)
- [Styled Components](https://styled-components.com/): using css in Js to style each components separately from the global css, avoiding name collisions
- [TheCocktailDB](https://www.thecocktaildb.com/): free JSON API to grab the info from the cocktail database
- [TanStack Query](https://tanstack.com/): cache the searching result for better UX

## My Big Gotcha

- React Router v6
  - Routes: action / loader
  - Component: Form
  - Hooks: useLoaderData / useRouteError / useActionData / useNavigation
- Web api
  - FormData (return array of arrays)
  - URL constructor
- TanStack Query (React Query)
  - grab react query in the loader: avoid refetching within stale time
  ```js
  //pass queryClient instance as parameter and return a actual loader function in a function
  const loader =
    (queryClient) =>
    async ({ params }) => {
      const { id } = params;
      await queryClient.ensureQueryData(singleCocktailQuery(id));
      return { id };
    };
  ```

## Reference

Last but not least...
I would like to shout out to my online teacher John Smilga who designed the application, it's a really good practice to effectively learn routing and query packages.
