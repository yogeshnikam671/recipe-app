import { BFF_BASE_URL, recipePerPage } from "@/constants/api";
import { recipeTypes } from "@/constants/recipe";
import { RecipeModel } from "@/shared.types";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRef } from "react";

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
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchedRecipe = searchInputRef.current?.value || '';

  const getRecipeesLinkWith = ({
    pageNumber,
    recipeName
  }: { pageNumber: number, recipeName: string }) => {
    let link = `/recipees?page=${pageNumber}`;
    if (recipeName) link += `&name=${recipeName}`;
    return link;
  }
  
  const noOfPages = Math.ceil(totalRecipees/recipePerPage);
  // TODO - the table can be extracted into a separate component 
  // to which we can pass the recipees list, that component will be very simple one.
  return (
    <>
      <div className="border border-black p-10">
        <div className="border border-black p-5">
          <input
            className="border-none p-2 font-mono"
            type="text"
            ref={searchInputRef}
            placeholder="Enter recipe name"
          />
          <button
            className="border-none bg-red-50 ml-2"
          >
            <Link href={getRecipeesLinkWith({ pageNumber: 1, recipeName: searchedRecipe })}>
              search
            </Link>
          </button>

        </div>
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
            <Link href={getRecipeesLinkWith({ pageNumber: page-1, recipeName: searchedRecipe })}>
              Prev
            </Link>
          }
          <p>{page}</p>
          {page < noOfPages &&
            <Link href={getRecipeesLinkWith({ pageNumber: page+1, recipeName: searchedRecipe })}>
              Next
            </Link>
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
  const searchByName = context?.query?.name || '';
  
  const recipeesResponse = await axios.get(
    `${BFF_BASE_URL}/recipees?fields=type,name,category&page=${page}&name=${searchByName}`
  );

  const totalRecipeesResponse = await axios.get(
    `${BFF_BASE_URL}/recipe/count?name=${searchByName}`
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


