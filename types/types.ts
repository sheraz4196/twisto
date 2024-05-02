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




export type TestimonialsCarouselProps = {
  imgUrl: string;
  name: string;
  review: string;
  date: string;
};