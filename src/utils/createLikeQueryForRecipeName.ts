
export const createLikeQueryForRecipeName = (name: string) => {
  const patterns = name.trim().split(' ') || [];
  const likeAccQuery = patterns.length
    ? patterns.reduce((acc: string, pattern: string) => `${acc} name ILIKE '%${pattern}%' OR`, '')
    : '';
  return likeAccQuery.substring(0, likeAccQuery.length - 3);
}
