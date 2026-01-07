
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  height: string; // Used for masonry variation
}

export interface ClientLogo {
  name: string;
  url: string;
}
