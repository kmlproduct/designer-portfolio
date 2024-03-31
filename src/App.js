import Portfolio from "./components/portfolio";
import NavBar from "./components/navbar";
import Slider from "./components/slider";
import Features from "./components/features";
import SpecialHeading from "./components/Specialheading";
import ServiceContent from "./components/Servicecontent";
export default function App() {
  const images = [
    { image: `${process.env.PUBLIC_URL}/imgs/image-1.jpeg` },
    { image: `${process.env.PUBLIC_URL}/imgs/image-2.jpeg` },
    { image: `${process.env.PUBLIC_URL}/imgs/image-3.jpeg` },
    { image: `${process.env.PUBLIC_URL}/imgs/image-4.jpeg` },
    { image: `${process.env.PUBLIC_URL}/imgs/image-5.jpg` },
  ];
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="container-slider ">
        <Slider images={images} />
      </div>
      <Features />
      <SpecialHeading
        uniqueId="1"
        heading1="اخر اعمالي"
        heading3="كن مبدعا بقدر ما تستطيع !"
      />
      <ServiceContent />
      <SpecialHeading
        uniqueId="2"
        heading1="اعمالي في التصميم"
        heading3="كل فكرة تستحق ان تحظى بتصميم انيق"
      />
      <Portfolio />
    </div>
  );
}
