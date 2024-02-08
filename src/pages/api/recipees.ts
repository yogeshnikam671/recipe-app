import { NextApiRequest, NextApiResponse } from "next";
import { RecipeModel } from "@/shared.types";
import { sql } from "@vercel/postgres";
import { recipePerPage } from "@/constants/api";

type ResponseData = Array<RecipeModel>

const fetchRecipees = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const reqFields = req.query.fields as string | undefined;
  const page = (req.query.page != undefined ? req.query.page : 1) as number;
  const fields = reqFields != undefined ? reqFields : '*';
  
  const query = `
    SELECT ${fields} FROM recipe 
    ORDER BY id
    LIMIT ${recipePerPage} OFFSET ${recipePerPage * (page-1)}
  `;
  const { rows } = await sql.query(query);

  return res.status(200).json(rows as ResponseData);
};

export default fetchRecipees;

/*
PRONE to sql injection?
What is sql injection?
How to sanitize the custom dynamic query?

sql.identifier([selectedFields]) is used to safely handle the field names. 
It ensures that the field names are properlyquoted and sanitized.
With this modification, you reduce the risk of SQL injection and improve the safety of your dynamic field selection. 
Always validate and sanitize user inputs to prevent security vulnerabilities,
especially when constructing SQL queries dynamically.
*/
