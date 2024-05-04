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
