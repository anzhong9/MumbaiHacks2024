import React, { useState } from 'react';
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
  // Sample data
  { id: 1, title: 'Campaign 1', audienceTarget: 'Audience 1', caption: 'Caption 1', ageTarget: '18-24', genderTarget: 'Male', picUrl: 'https://via.placeholder.com/50' },
  { id: 2, title: 'Campaign 2', audienceTarget: 'Audience 2', caption: 'Caption 2', ageTarget: '25-34', genderTarget: 'Female', picUrl: 'https://via.placeholder.com/50' },
  { id: 3, title: 'Campaign 3', audienceTarget: 'Audience 3', caption: 'Caption 3', ageTarget: '35-44', genderTarget: 'Male', picUrl: 'https://via.placeholder.com/50' },
  { id: 4, title: 'Campaign 4', audienceTarget: 'Audience 4', caption: 'Caption 4', ageTarget: '45-54', genderTarget: 'Female', picUrl: 'https://via.placeholder.com/50' },
  { id: 5, title: 'Campaign 5', audienceTarget: 'Audience 5', caption: 'Caption 5', ageTarget: '55+', genderTarget: 'Male', picUrl: 'https://via.placeholder.com/50' },
  { id: 6, title: 'Campaign 6', audienceTarget: 'Audience 6', caption: 'Caption 6', ageTarget: '18-24', genderTarget: 'Female', picUrl: 'https://via.placeholder.com/50' },
  { id: 7, title: 'Campaign 7', audienceTarget: 'Audience 7', caption: 'Caption 7', ageTarget: '25-34', genderTarget: 'Male', picUrl: 'https://via.placeholder.com/50' },
  { id: 8, title: 'Campaign 8', audienceTarget: 'Audience 8', caption: 'Caption 8', ageTarget: '35-44', genderTarget: 'Female', picUrl: 'https://via.placeholder.com/50' },
  { id: 9, title: 'Campaign 9', audienceTarget: 'Audience 9', caption: 'Caption 9', ageTarget: '45-54', genderTarget: 'Male', picUrl: 'https://via.placeholder.com/50' },
  { id: 10, title: 'Campaign 10', audienceTarget: 'Audience 10', caption: 'Caption 10', ageTarget: '55+', genderTarget: 'Female', picUrl: 'https://via.placeholder.com/50' },
  { id: 11, title: 'Campaign 11', audienceTarget: 'Audience 11', caption: 'Caption 11', ageTarget: '18-24', genderTarget: 'Male', picUrl: 'https://via.placeholder.com/50' },
  // Add more sample data as needed
];

const CampaignPreview: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleRowClick = (id: number) => {
    navigate(`/EditCampaign/${id}`);
  };

  const totalPages = Math.ceil(campaigns.length / itemsPerPage);
  const currentItems = campaigns.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className=" flex flex-col items-center bg-gradient-to-br from-blue-100 to-white py-20 px-4">
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
