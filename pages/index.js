import Slider from "../components/Slider";
import BrandNavBar from "../components/NavBar"
import About from "../components/about";
import IntroMenu from "../components/menu-intro";
import Ubicacion from "../components/ubicacion";
import Horarios from "../components/horarios";
import Footer from "../components/footer";
import Recomendations from "../components/recomendations";
import Carta from "./carta";
import Video from "../components/video";
import Header from "../components/header";
import OurKitchen from "../components/nuestracocina";
import Notas from "../components/notas";
import { FacebookEmbed, InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import Embed from "../components/embed";
import Images from "../components/images";
import Images2 from "../components/images2"

export default function Home() {
  return <>
  <Header/>
  <OurKitchen/>
  <Recomendations/>
  <Notas/>
  <Images/>
  <Embed/>
  <Images2/>
  <Ubicacion/>
{/*     <Carta/> */}
  </>
}
