import green12 from "../assets/images/green12.webp";
import green11 from "../assets/images/green11.webp";
import green7  from "../assets/images/green7.webp";

export type FarmLocation = {
  name: string;
  slug: "ilora" | "ilaji" | "iseyin";
  lat: number;
  lng: number;
  image: string;
  description: string;
  country: "nigeria";
};

export const farmLocations: FarmLocation[] = [
  { name: "Ilora, Oyo State",  slug: "ilora",  lat: 7.8,    lng: 3.9,    image: green12, description: "15+ acres of transparent co-ownership—jobs, yields, and verified impact.", country: "nigeria" },
  { name: "Ilaji, Oyo State",  slug: "ilaji",  lat: 8.0523, lng: 3.33735, image: green11, description: "Community-led expansion with regenerative practices and fair wages.",       country: "nigeria" },
  { name: "Iseyin, Oyo State", slug: "iseyin", lat: 7.9667, lng: 3.6,     image: green7,  description: "Climate-resilient palm and value-chain jobs with local cooperatives.",     country: "nigeria" },
];
