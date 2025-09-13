import FarmWeather from "../components/projects/FarmWeather";


const Iseyin: React.FC = () => {
    return (
      <div className="container mx-auto py-8">
        <FarmWeather
         lat={7.9667} // Iseyin latitude
         lng={3.6} // Iseyin longitude
          locationName="Ilaji, Oyo State"
          videoUrl="/videos/ilaji.mp4" // Replace with your farm video URL
          faqUrl="/faq" // Link to FAQ page
          appUrl="https://suprefarmapp.netlify.app/login" // Link to Buy Now (the web app)
        />
      </div>
    );
  };
  
  
  export default Iseyin;