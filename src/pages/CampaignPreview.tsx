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
    <div className="min-h-screen flex flex-col gap-10 py-20 items-center">
      <h1 className="text-3xl font-bold w-fit mb-4">Campaign Preview</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Audience Target</th>
            <th className="py-2">Caption</th>
            <th className="py-2">Age Target</th>
            <th className="py-2">Gender Target</th>
            <th className="py-2">Picture</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((campaign) => (
            <tr key={campaign.id} className="cursor-pointer" onClick={() => handleRowClick(campaign.id)}>
              <td className="border px-4 py-2">{campaign.title}</td>
              <td className="border px-4 py-2">{campaign.audienceTarget}</td>
              <td className="border px-4 py-2">{campaign.caption}</td>
              <td className="border px-4 py-2">{campaign.ageTarget}</td>
              <td className="border px-4 py-2">{campaign.genderTarget}</td>
              <td className="border px-4 py-2"><img src={campaign.picUrl} alt="Campaign" className="w-12 h-12" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="w-full flex justify-end py-10">
        <button 
        onClick={() => navigate('/CampaignPreview')}
        className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500">
          Run Campaign
        </button>
      </div>
    </div>
  );
};

export default CampaignPreview;