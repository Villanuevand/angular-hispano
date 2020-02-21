export interface Meeting {
  name: string;
  city: string;
  country: string;
  logoUrl: string | null;
  logoType: 'svg' | string;
  meetupUrl: string;
}
