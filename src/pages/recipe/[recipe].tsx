import { recipePerPage } from "@/constants/api";
import { fetchRecipeWithDesc } from "@/lib/fetchRecipeWithDesc";
import { RecipeModel } from "@/shared.types";
import { sql } from "@vercel/postgres";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

type RecipePropsType = {
  recipe: RecipeModel
}

const Recipe = ({
  recipe
}: RecipePropsType) => {

  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {recipe.name}
      <br/>
      {recipe.description}
    </>
  );
};

export default Recipe;

export const getStaticPaths = async () => {
  const query = `
    SELECT name FROM recipe
    ORDER BY id
    LIMIT ${recipePerPage}
  `;
  const { rows: preRenderedRecipees } = await sql.query(query);
  
  const paths = preRenderedRecipees.map((recipe) => {
    return {
      params: { recipe: recipe.name }
    }
  });

  return { paths, fallback: true };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const recipeName = context.params?.recipe as string;
  
  const recipe = await fetchRecipeWithDesc({name: recipeName});
  // TODO - implement redirect to a valid page.
  if(!recipe) {
    return {
      redirect: {
        destination: '/recipees',
        permanent: true
      }
    };
  }

  return {
    props: {
      recipe: JSON.parse(JSON.stringify(recipe))
    }
  }
}
