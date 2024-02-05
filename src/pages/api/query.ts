import { Recipe } from '@/shared.types';
import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = Array<Recipe>

const queryDb = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  
  const { rows : recipees } = await sql`SELECT * FROM recipe`;
  
  return res.status(200).json(recipees as ResponseData);
};

export default queryDb;

