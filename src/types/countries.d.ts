export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  ccn3: string;
  capital: string[];
  region: string;
  population: number;
}

export interface CountryWithSlug extends Country {
  slug: string;
}
