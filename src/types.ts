export interface StarType {
  id: string;
  nameIs: string;
  nameEn: string;
  descriptionIs?: string;
  descriptionEn?: string;
  color: string;
}

export type Locale = "is" | "en";
