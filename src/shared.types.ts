
enum RecipeType {
  'VEG',
  'NON_VEG'
}

export type Recipe = {
  id: string,
  created_at: Date,
  name: string,
  type: RecipeType,
  category: string,
  description: string
}
