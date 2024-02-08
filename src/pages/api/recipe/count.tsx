import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  count: number
}

const fetchRecipeesCount = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const query = `
    SELECT COUNT(id) as count FROM recipe
  `;
  const { rows } = await sql.query(query);
  const count = rows.length ? rows[0] : { count: 0 };

  return res.status(200).json(count);
}

export default fetchRecipeesCount;
