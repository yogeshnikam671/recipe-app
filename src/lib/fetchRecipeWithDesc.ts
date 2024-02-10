import { sql } from "@vercel/postgres";

export const fetchRecipeWithDesc = async ({
  name
}: { name: string }) => {
  
  const query = `
    SELECT * FROM recipe 
    WHERE name IN ('${name}')
  `;

  const { rows: recipe } = await sql.query(query);
  
  if(!recipe.length) return null;
  return recipe[0];
};
