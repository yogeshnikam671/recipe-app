
export enum RecipeType {
  VEG = 'VEG',
  NON_VEG = 'NON_VEG'
}

// prefix all db representations with Model
export type RecipeModel = {
  id: string,
  created_at: Date,
  name: string,
  type: RecipeType,
  category: string,
  description: string
}

export type TextInputRef = React.RefObject<HTMLInputElement>;
