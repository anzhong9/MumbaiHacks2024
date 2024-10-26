import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Campaign {
  id: number;
  title: string;
  audienceTarget: string;
  caption: string;
  ageTarget: string;
  genderTarget: string;
  picUrl: string;
}

const campaigns: Campaign[] = [
  { id: 1, title: 'Zomato Special', audienceTarget: 'Young Foodies', caption: 'Get your favorites delivered!', ageTarget: '18-24', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?food' },
  { id: 2, title: 'Midnight Cravings', audienceTarget: 'Late-Night Eaters', caption: 'Satisfy those late-night cravings!', ageTarget: '18-24', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?snack' },
  { id: 3, title: 'Budget Bites', audienceTarget: 'College Students', caption: 'Affordable meals just for you!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?pizza' },
  { id: 4, title: 'Family Feast', audienceTarget: 'Family Diners', caption: 'Delicious meals for the whole family!', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?family' },
  { id: 5, title: 'Sweet Treats', audienceTarget: 'Dessert Lovers', caption: 'Indulge in our sweet delights!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?dessert' },
  { id: 6, title: 'Quick Lunch', audienceTarget: 'Young Professionals', caption: 'Fast and fresh meals for busy days!', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?lunch' },
  { id: 7, title: 'Veggie Delights', audienceTarget: 'Vegetarians', caption: 'Tasty vegetarian options!', ageTarget: '18-24', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?salad' },
  { id: 8, title: 'Breakfast Bonanza', audienceTarget: 'Breakfast Lovers', caption: 'Start your day with a hearty meal!', ageTarget: '18-24', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?breakfast' },
  { id: 9, title: 'Healthy Choices', audienceTarget: 'Fitness Enthusiasts', caption: 'Fuel your body with healthy meals!', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?healthy' },
  { id: 10, title: 'Snack Attack', audienceTarget: 'Late-Night Snackers', caption: 'Cravings satisfied any time!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?snack' },
  { id: 11, title: 'Burger Bonanza', audienceTarget: 'Burger Lovers', caption: 'Try our juicy burgers today!', ageTarget: '18-24', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?burger' },
  { id: 12, title: 'Pizza Party', audienceTarget: 'Pizza Enthusiasts', caption: 'Best pizzas in town!', ageTarget: '18-24', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?pizza' },
  { id: 13, title: 'Student Specials', audienceTarget: 'Students', caption: 'Affordable meals for your budget!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?student' },
  { id: 14, title: 'Weekend Brunch', audienceTarget: 'Brunch Lovers', caption: 'Make your weekends tasty!', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?brunch' },
  { id: 15, title: 'Gourmet Dining', audienceTarget: 'Food Connoisseurs', caption: 'Experience fine dining at home!', ageTarget: '35-44', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?fine-dining' },
  { id: 16, title: 'Spicy Delights', audienceTarget: 'Spice Lovers', caption: 'For those who love it hot!', ageTarget: '25-34', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?spicy' },
  { id: 17, title: 'Café Culture', audienceTarget: 'Coffee Aficionados', caption: 'Enjoy a cup of our finest coffee!', ageTarget: '18-24', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?coffee' },
  { id: 18, title: 'Ice Cream Dreams', audienceTarget: 'Ice Cream Lovers', caption: 'Cool off with our delicious ice creams!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?ice-cream' },
  { id: 19, title: 'Health Boost', audienceTarget: 'Health Conscious', caption: 'Nourishing meals for your lifestyle!', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?healthy' },
  { id: 20, title: 'Sizzling BBQ', audienceTarget: 'Grill Masters', caption: 'Taste the best BBQ in town!', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?bbq' },
  { id: 21, title: 'Veggie Heaven', audienceTarget: 'Vegetarians', caption: 'Delicious veggie meals for everyone!', ageTarget: '18-24', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?vegetable' },
  { id: 22, title: 'Sushi Night', audienceTarget: 'Sushi Lovers', caption: 'Authentic sushi delivered to your door!', ageTarget: '25-34', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?sushi' },
  { id: 23, title: 'Craft Beer', audienceTarget: 'Beer Enthusiasts', caption: 'Try our locally crafted beers!', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?beer' },
  { id: 24, title: 'Quick Dinners', audienceTarget: 'Busy Families', caption: 'Fast dinners for your hectic nights!', ageTarget: '35-44', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?dinner' },
  { id: 25, title: 'Street Food', audienceTarget: 'Street Food Lovers', caption: 'Enjoy the taste of street food at home!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?street-food' },
  { id: 26, title: 'Fancy Dining', audienceTarget: 'Food Critics', caption: 'Experience luxury dining!', ageTarget: '35-44', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?luxury' },
  { id: 27, title: 'Pet-Friendly Eats', audienceTarget: 'Pet Owners', caption: 'Meals for you and treats for your pet!', ageTarget: '25-34', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?pet-friendly' },
  { id: 28, title: 'Holiday Specials', audienceTarget: 'Festive Diners', caption: 'Celebrate with our holiday menu!', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?holiday' },
  { id: 29, title: 'Cooking Class', audienceTarget: 'Food Enthusiasts', caption: 'Join our cooking classes!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?cooking' },
  { id: 30, title: 'Vegan Treats', audienceTarget: 'Vegan Community', caption: 'Delicious vegan options available!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?vegan' },
  { id: 31, title: 'Keto Cuisine', audienceTarget: 'Keto Dieters', caption: 'Satisfy your cravings without the carbs!', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?keto' },
  { id: 32, title: 'Seafood Lovers', audienceTarget: 'Seafood Enthusiasts', caption: 'Fresh seafood delivered to your door!', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?seafood' },
  { id: 33, title: 'Sustainable Eats', audienceTarget: 'Eco-Conscious Diners', caption: 'Enjoy meals that are kind to the planet!', ageTarget: '25-34', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?sustainable' },
  { id: 34, title: 'Local Favorites', audienceTarget: 'Community Supporters', caption: 'Support local businesses with every meal!', ageTarget: '35-44', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?local' },
  { id: 35, title: 'Festive Feasts', audienceTarget: 'Celebrators', caption: 'Join us for festive meals!', ageTarget: '25-34', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?celebration' },
  { id: 36, title: 'Tapas Night', audienceTarget: 'Social Diners', caption: 'Share small plates with friends!', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?tapas' },
  { id: 37, title: 'Choco Lovers', audienceTarget: 'Chocolate Enthusiasts', caption: 'Indulge in rich chocolate desserts!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?chocolate' },
  { id: 38, title: 'Farm to Table', audienceTarget: 'Fresh Food Lovers', caption: 'Experience freshness with every bite!', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?farm' },
  { id: 39, title: 'Wine Pairing', audienceTarget: 'Wine Enthusiasts', caption: 'Pair your meals with the perfect wine!', ageTarget: '35-44', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?wine' },
  { id: 40, title: 'Spicy Street Food', audienceTarget: 'Adventurous Eaters', caption: 'Try our bold and spicy street food!', ageTarget: '18-24', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?spicy-street-food' },
  { id: 41, title: 'Culinary Workshops', audienceTarget: 'Aspiring Chefs', caption: 'Learn cooking from the best!', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?workshop' },
  { id: 42, title: 'Beverage Specials', audienceTarget: 'Drink Lovers', caption: 'Refreshing beverages for hot days!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?beverage' },
  { id: 43, title: 'Brunch & Mimosas', audienceTarget: 'Brunch Enthusiasts', caption: 'Enjoy a weekend brunch with mimosas!', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?brunch' },
  { id: 44, title: 'Chaat Festival', audienceTarget: 'Street Food Lovers', caption: 'Join us for a chaat festival!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?chaat' },
  { id: 45, title: 'Pop-Up Dinners', audienceTarget: 'Food Explorers', caption: 'Discover new flavors at our pop-up events!', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?popup' },
  { id: 46, title: 'Cultural Cuisine', audienceTarget: 'Cultural Food Lovers', caption: 'Taste the world with our cultural dishes!', ageTarget: '35-44', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?cultural' },
  { id: 47, title: 'Meal Prep Services', audienceTarget: 'Busy Individuals', caption: 'Get healthy meals prepared for you!', ageTarget: '25-34', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?meal-prep' },
  { id: 48, title: 'Popcorn & Movie Night', audienceTarget: 'Movie Buffs', caption: 'Perfect snacks for movie nights!', ageTarget: '18-24', genderTarget: 'All', picUrl: 'https://source.unsplash.com/random/50x50?popcorn' },
  { id: 49, title: 'Ethnic Cuisine', audienceTarget: 'Food Adventurers', caption: 'Explore flavors from around the globe!', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://source.unsplash.com/random/50x50?ethnic' },
  { id: 50, title: 'Sweet Surprise', audienceTarget: 'Dessert Fans', caption: 'End your meal with a sweet treat!', ageTarget: '18-24', genderTarget: 'Female', picUrl: 'https://source.unsplash.com/random/50x50?sweet' }
];


const CampaignPreview: React.FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const itemsPerPage = 5;
  
    // Simulate data fetching with progress update
    useEffect(() => {
      // Check if localStorage has load=true
      const load = localStorage.getItem('load');
      if (load === 'true') {
        const loadingTime = Math.random() * (45000 - 20000) + 20000; // Random time between 20 to 45 seconds
  
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev < 100) {
              return Math.min(prev + (100 / (loadingTime / 100)), 100); // Update progress
            }
            return prev;
          });
        }, 100); // Update progress every 100ms
  
        const timer = setTimeout(() => {
          clearInterval(interval);
          setLoading(false);
        }, loadingTime);
  
        return () => {
          clearTimeout(timer); // Cleanup timer on component unmount
          clearInterval(interval); // Cleanup interval on component unmount
        };
      } else {
        // If load is not true, set loading to false immediately
        setLoading(false);
      }
    }, []); // Empty dependency array to run once on mount
  
    const handleRowClick = (id: number) => {
      navigate(`/EditCampaign/${id}`);
    };

  const totalPages = Math.ceil(campaigns.length / itemsPerPage);
  const currentItems = campaigns.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Circular progress bar component
  const CircularProgress = ({ progress }: { progress: number }) => {
    const radius = 50; // Radius of the circular progress
    const normalizedRadius = radius - 5; // Adjust for stroke width
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={5}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#4a90e2" // Change to your preferred color
          fill="transparent"
          strokeWidth={5}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }} // Smooth transition
        />
      </svg>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh] bg-gradient-to-br from-blue-100 to-white">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold text-blue-600">Loading Campaigns...</h2>
          <CircularProgress progress={progress} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 to-white py-20 px-4 h-[100vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Campaign Preview</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Audience Target</th>
              <th className="py-3 px-4 text-left">Caption</th>
              <th className="py-3 px-4 text-left">Age Target</th>
              <th className="py-3 px-4 text-left">Gender Target</th>
              <th className="py-3 px-4 text-left">Picture</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((campaign) => (
              <tr key={campaign.id} className="cursor-pointer hover:bg-gray-100 transition duration-200" onClick={() => handleRowClick(campaign.id)}>
                <td className="border-b border-gray-200 px-4 py-2">{campaign.title}</td>
                <td className="border-b border-gray-200 px-4 py-2">{campaign.audienceTarget}</td>
                <td className="border-b border-gray-200 px-4 py-2">{campaign.caption}</td>
                <td className="border-b border-gray-200 px-4 py-2">{campaign.ageTarget}</td>
                <td className="border-b border-gray-200 px-4 py-2">{campaign.genderTarget}</td>
                <td className="border-b border-gray-200 px-4 py-2">
                  <img src={campaign.picUrl} alt="Campaign" className="w-12 h-12 rounded-full object-cover" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="flex justify-between items-center mt-6">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        
        <div className="w-full flex justify-center mt-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105"
          >
            Run Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignPreview;