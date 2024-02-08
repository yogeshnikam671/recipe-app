import { BFF_BASE_URL, recipePerPage } from "@/constants/api";
import { recipeTypes } from "@/constants/recipe";
import { RecipeModel } from "@/shared.types";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

type RecipeesProps = {
  recipees: Array<RecipeModel>,
  page: number,
  totalRecipees: number
}

const Recipees = ({
  recipees,
  page,
  totalRecipees
}: RecipeesProps) => {
  
  const router = useRouter();

  const goToPrev = () => {
    router.push(`/recipees?page=${page-1}`)
  }

  const goToNext = () => {
    router.push(`/recipees?page=${page + 1}`)
  }

  const noOfPages = Math.ceil(totalRecipees/recipePerPage);

  return (
    <>
      <div className="border border-black p-10">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {recipees.map(recipe =>
              <tr key={recipe.id}>
                <td key={recipe.id}>{recipe.name}</td>
                <td key={recipe.id}>{recipeTypes[recipe.type]}</td>
                <td key={recipe.id}>{recipe.category}</td>
              </tr>
            )}
          </tbody>
        </table>
        <br/>
        <div className="p-2 flex justify-evenly">
          {page > 1 &&
            <button onClick={goToPrev}>
              Prev
            </button>
          }
          <p>{page}</p>
          {page < noOfPages &&
            <button onClick={goToNext}>
              Next
            </button>
          }
        </div>
      </div>
    </>
  ); 
};
export default Recipees;


// since we want to make an API call via BFF layer, we cannot really use getStaticProps here.
// getStaticProps can only be used in a valid manner if some static data is being returned.
// getServerSideProps runs every time a page is requested.
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const page = +(context?.query?.page || 1);
  const recipeesResponse = await axios.get(
    `${BFF_BASE_URL}/recipees?fields=type,name,category&page=${page}`
  );

  const totalRecipeesResponse = await axios.get(
    `${BFF_BASE_URL}/recipe/count`
  );

  const recipees = recipeesResponse.data;
  const totalRecipees = totalRecipeesResponse.data.count 
  return {
   props: {
    recipees,
    totalRecipees,
    page
   } 
  };
}


