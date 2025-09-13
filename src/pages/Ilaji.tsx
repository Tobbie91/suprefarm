import FarmWeather from "../components/projects/FarmWeather";


const Ilaji: React.FC = () => {
    return (
      <div className="container mx-auto py-8">
        <FarmWeather
          lat={8.0523} // Ilaji latitude
          lng={3.33735} // Ilaji longitude
          locationName="Ilaji, Oyo State"
          videoUrl="/videos/ilaji.mp4" // Replace with your farm video URL
          faqUrl="/faq" // Link to FAQ page
          appUrl="https://suprefarmapp.netlify.app/login" // Link to Buy Now (the web app)
        />
      </div>
    );
  };
  
  export default Ilaji;