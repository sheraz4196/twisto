export type MailOptions = {
  email: string;
  subject: string;
  text: string;
  html?: string;
};
export type Subscriber = {
  id: number;
  email: string;
  storeId: number;
};

export type CVFormData = {
  firstName: string;
  lastName: string;
  bio: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  goals: string;
  degree: string;
  graduationDate: string;
  institutionName: string;
  majorFieldOfStudy: string;
  jobTitle: string;
  companyName: string;
  responsibilitiesAndAchievements: string;
  companyLocation: string;
  technicalSkills: string;
  softSkills: string;
  certification: string;
  issuingOrganization: string;
  certificationEarnedDate: string;
  languages: string;
  proficiencyLevel: string;
  hobbies: string;
  yearOfResign: string;
  yearOfEmployment: string;
};

export type TestimonialsCarouselProps = {
  imgUrl: string;
  name: string;
  review: string;
  date: string;
};
export type CountriesData = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [code: string]: string;
  };
  translations: {
    [code: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    [code: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [year: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};
