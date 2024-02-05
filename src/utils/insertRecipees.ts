// use this utility function to insert data into remote postgres db.
// use this only on local. do not introduce any feature in the app that uses this function for now.

import { sql } from "@vercel/postgres";

export const recipees = [
];

const insertRecipees = async () => {
  
  for(let i=0; i < recipees.length; i++) {
    const { name, category, type, description } = recipees[i];
    await sql.query(
      `
        INSERT INTO recipe(name, category, type, description) 
        VALUES ($1, $2, $3, $4)
      `,
      [name, category, type, description]
    );
  }
};
