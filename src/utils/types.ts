export interface ProductI {
  id: number;
  userId: number;
  title: string;
  images: string;
  primaryTag: string[];
  secondaryTag: string[];
  privilege: string[];
  country: string[];
  onlineMember: string;
  memberInput: string[];
  note: string;
  url: string;
  leads: string;
  created_at: string;
}

export interface ProductListI {
  products: ProductI[];
}

export interface selectedI {
  label: string;
  selected: boolean;
}

export interface selectedFilter {
  primaryTag: selectedI[];
  secondaryTag: selectedI[];
}
