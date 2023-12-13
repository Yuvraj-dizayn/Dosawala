import "./App.css";
import Header from "./Componets/Header/Header";
import ImageWithDescMain from "./ImageWithDescMain";
import FirstSlide from "./Componets/Home/FirstSlide/FirstSlide";
import SecondSlide from "./Componets/Home/SecondSlide/SecondSlide.";
import SecondSlideComp from "./Componets/Home/SecondSlideComp/SecondSlideComp";
import ThirdSlide from "./Componets/Home/ThirdSlide/ThirdSlide";
import SecondSlide2 from "./Image/Group 10.png";
import Four from "./Componets/Home/Four/Four";
import Map from "./Componets/Map/Map";
import Map_Image from "../src/Image/Map_Image.jpeg";
import Footer from "./Componets/Footer/Footer";
import Menu from "./Componets/Home/Menu/Menu";
import SlickSlider from "./Componets/Home/SlickSlider/SlickSlider";
import ThirdSlickSlider from "./Componets/Home/ThirdSlickSliderComp/ThirdSlickSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSlide />
      <SecondSlide /> <ThirdSlide />
      <Menu />
      <SecondSlideComp
        style={{ backgroundColor: "#fcfbef" }}
        type
        image={SecondSlide2}
        Title={"A Winning Franchise Team"}
        Desc1={
          "Dosawala strives to provide its customers, the healthiest and wholesome meal at a very affordable prices and to generate prots for the benet of the franchise in a short duration of time. Dosawala dedicate to ensure the success of our franchisee associates by focussing and providing exclusive support and service on committed environment"
        }
        Desc2={
          "To spread the product across the globe through our chain of retail outlets. Our brand chain special taste makers and ingredients will spread a standard avor of taste all over the country"
        }
      />{" "}
      <Four />
      <SlickSlider />
      {/* <ThirdSlickSlider /> */}
      <Map image={Map_Image} />
      <Footer />
      {/* <ImageWithDescMain /> */}
    </div>
  );
}

export default App;
