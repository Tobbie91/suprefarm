import FarmWeather from "../components/projects/FarmWeather";


const Ilora: React.FC = () => {
    return (
      <div className="container mx-auto py-8">
        <FarmWeather
          lat={7.8} 
          lng={3.9} 
          locationName="Ilora, Oyo State"
          videoUrl="/videos/ilora.mp4" 
          faqUrl="/faq" // Link to FAQ page
          appUrl="https://suprefarmapp.netlify.app/login" 
        />
      </div>
    );
  };
  
  export default Ilora;
