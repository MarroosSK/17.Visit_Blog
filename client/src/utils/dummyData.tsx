//icons
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { PiLinkedinLogo, PiTwitterLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
//img - gallery
import galleryImg from "../assets/thanksImg.jpg";
import galleryImg2 from "../assets/santorini.jpg";
import galleryImg3 from "../assets/canyon.jpg";
import galleryImg4 from "../assets/mountains.jpg";
import galleryImg5 from "../assets/polynesia.jpg";
import galleryImg6 from "../assets/suspension-bridge.jpg";
import galleryImg7 from "../assets/utah.jpg";
import galleryImg8 from "../assets/sagrada.jpg";
import galleryImg9 from "../assets/spis-castle.jpg";
import galleryImg10 from "../assets/iceland.jpg";
import galleryImg11 from "../assets/africa.jpg";
import galleryImg12 from "../assets/south-africa.jpg";
import galleryImg13 from "../assets/china.jpg";
import galleryImg14 from "../assets/india.jpg";
import galleryImg15 from "../assets/penguins.jpg";
import galleryImg16 from "../assets/big-ben.jpg";
import africaCat from "../assets/africaCat.jpg";
import asiaCat from "../assets/asiaCat.jpg";
import australiaCat from "../assets/australiaCat.jpg";
import europeCat from "../assets/europeCat.jpg";
import northACat from "../assets/northAmericaCat.jpg";
import SouthACat from "../assets/southAmerica.jpg";
import { DestinationTypes, GalleryTypes, SocialTypes } from "../types/types";

export const socialIcons = [
  { icon: <FiFacebook /> },
  { icon: <FiInstagram /> },
  { icon: <PiLinkedinLogo /> },
  { icon: <PiTwitterLogoBold /> },
  { icon: <CgMail /> },
];

export const galleryData: GalleryTypes[] = [
  {
    id: 1,
    title: "",
    img: galleryImg,
  },
  {
    id: 2,
    title: "",
    img: galleryImg2,
  },
  {
    id: 3,
    title: "",
    img: galleryImg3,
  },
  {
    id: 4,
    title: "",
    img: galleryImg4,
  },
  {
    id: 5,
    title: "",
    img: galleryImg5,
  },
  {
    id: 6,
    title: "",
    img: galleryImg6,
  },
  {
    id: 7,
    title: "",
    img: galleryImg7,
  },
  {
    id: 8,
    title: "",
    img: galleryImg8,
  },
  {
    id: 9,
    title: "",
    img: galleryImg9,
  },
  {
    id: 10,
    title: "",
    img: galleryImg10,
  },
  {
    id: 11,
    title: "",
    img: galleryImg11,
  },
  {
    id: 12,
    title: "",
    img: galleryImg12,
  },
  {
    id: 13,
    title: "",
    img: galleryImg13,
  },
  {
    id: 14,
    title: "",
    img: galleryImg14,
  },
  {
    id: 15,
    title: "",
    img: galleryImg15,
  },
  {
    id: 16,
    title: "",
    img: galleryImg16,
  },
];

export const destinationsData: DestinationTypes[] = [
  {
    id: 1,
    destinationName: "Africa",
    destinationImg: africaCat,
  },
  {
    id: 2,
    destinationName: "Asia",
    destinationImg: asiaCat,
  },
  {
    id: 3,
    destinationName: "Australia",
    destinationImg: australiaCat,
  },
  {
    id: 4,
    destinationName: "Europe",
    destinationImg: europeCat,
  },
  {
    id: 5,
    destinationName: "North America",
    destinationImg: northACat,
  },
  {
    id: 6,
    destinationName: "South America",
    destinationImg: SouthACat,
  },
];
