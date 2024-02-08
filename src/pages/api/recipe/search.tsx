import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

const searchRecipe = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const name = req.query?.name as string || '';
  const patterns = name.trim().split(' ') || [];
  
  const likeAccQuery = patterns.reduce((acc: string, pattern: string) => {
    return `${acc} name LIKE '%${pattern}%' OR`
  }, '');
  const likeQuery = likeAccQuery.substring(0, likeAccQuery.length-3);
  
  const query = `
    SELECT type,name,category 
    FROM recipe
    WHERE ${likeQuery}
  `;
  const { rows: filteredRecipees } = await sql.query(query);

  return res.status(200).json(filteredRecipees);
};

export default searchRecipe;
