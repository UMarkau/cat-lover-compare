export interface ICat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: IBreed[] | [];
  categories?: { id: number; name: string }[];
}

export interface IBreed {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vocalisation: number;
  weight: { imperial: string; metric: string };
  wikipedia_url: string;
}

export interface IFavourite {
  created_at: string;
  id: number;
  image: { id: string; url: string };
  image_id: string;
  sub_id: string | null;
  user_id: string;
}
