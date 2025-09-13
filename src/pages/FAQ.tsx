import { Link } from "react-router-dom";

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold text-center text-emerald-800 mb-8">
        Frequently Asked Questions
      </h1>
      
      <div className="space-y-6">
        {/* Introduction */}
        <p className="text-lg text-gray-700">
          Welcome to the Suprefarm FAQ section! Here you’ll find answers to some of the most frequently asked questions about our platform, farm co-ownership, and how you can get involved in creating a more sustainable future through climate-smart agriculture.
        </p>
        
        {/* Question 1 */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-emerald-800">
            What is Suprefarm?
          </h3>
          <p className="text-gray-600 mt-2">
            Suprefarm is a climate-smart agri-tech platform that empowers communities to co-own and manage farmland using AI, satellite imagery, and climate data analytics. Our mission is to restore ecosystems, capture carbon, and generate sustainable income for communities through regenerative farming practices.
          </p>
        </div>

        {/* Question 2 */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-emerald-800">
            How does co-ownership work?
          </h3>
          <p className="text-gray-600 mt-2">
            Co-ownership allows you to invest in farmland and share the benefits, including yields and ecosystem restoration. As a co-owner, you can track farm progress, receive updates, and contribute to sustainable farming practices. Our platform makes it easy to monitor your investment and see the impact in real-time.
          </p>
        </div>

        {/* Question 3 */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-emerald-800">
            What are the benefits of participating in Suprefarm?
          </h3>
          <p className="text-gray-600 mt-2">
            By joining Suprefarm, you are contributing to climate-smart farming while benefiting from the economic returns of sustainable agriculture. Your investment helps to create jobs, support local communities, and restore ecosystems while providing you with a financial stake in the growth of the farm.
          </p>
        </div>

        {/* Question 4 */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-emerald-800">
            How do I invest in Suprefarm?
          </h3>
          <p className="text-gray-600 mt-2">
            To invest, simply sign up on our platform, choose the farm you would like to co-own, and make an investment. We offer flexible investment options to suit your preferences. Once invested, you will receive updates and see how your farm is progressing.
          </p>
        </div>

        {/* Question 5 */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-emerald-800">
            How do I track farm progress and impact?
          </h3>
          <p className="text-gray-600 mt-2">
            Suprefarm uses satellite imagery and AI-powered tools to track farm progress and environmental impact. You will receive regular updates on farm performance, including data on carbon capture, ecosystem restoration, and financial returns. This ensures transparency and accountability for all co-owners.
          </p>
        </div>

        {/* Question 6 */}
        <div className="border-b pb-4">
          <h3 className="text-xl font-semibold text-emerald-800">
            What are the sustainability practices at Suprefarm?
          </h3>
          <p className="text-gray-600 mt-2">
            At Suprefarm, we prioritize regenerative farming practices that enhance soil health, increase biodiversity, and promote sustainable water management. Our farms use environmentally friendly techniques, such as agroforestry and organic fertilizers, to minimize environmental impact while maximizing productivity.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Didn’t find your answer here? Feel free to reach out to our support team for more information.
          </p>
          <Link to="/contact" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
