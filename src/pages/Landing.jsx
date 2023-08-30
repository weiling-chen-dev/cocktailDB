import { useLoaderData } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Cocktails from "../components/Cocktails";
import { useQuery } from "@tanstack/react-query";

function getCocktails(searchTerm) {
  const fetchCocktailsUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=
`;

  return {
    queryKey: ["searchTerm", searchTerm],
    queryFn: async () => {
      try {
        const res = await axios.get(`${fetchCocktailsUrl}${searchTerm}`);
        return res.data.drinks;
      } catch (error) {
        throw Error(error);
      }
    },
  };
}
export const landingLoader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("searchTerm");
    console.log(queryClient);
    await queryClient.ensureQueryData(
      getCocktails(searchTerm ? searchTerm : "")
    );

    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();

  const { data: drinks } = useQuery(getCocktails(searchTerm ? searchTerm : ""));

  return (
    <div>
      <SearchBar searchTerm={searchTerm} />
      <Cocktails drinks={drinks} />
    </div>
  );
};
export default Landing;
