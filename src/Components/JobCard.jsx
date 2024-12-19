import React from 'react';
import { FaCode, FaMapMarkerAlt, FaMoneyBillWave, FaRegClock } from 'react-icons/fa';

const JobCard = ({job}) => {
    const {title, company,company_logo,requirements,description,location,salaryRange,jobType,category,applicationDeadline} = job
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-orange-200 ">
        <div className="p-6">
          {/* Company Logo */}
          <div className="flex justify-center">
            <figure className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
              <img src={company_logo} alt="Company Logo" className="w-full h-full object-contain" />
            </figure>
          </div>
          
          {/* Job Title */}
          <h2 className="text-2xl font-bold text-gray-800 text-center mt-4">{title}</h2>
          
          {/* Details Section */}
          <div className="mt-4 space-y-3">
            {/* Location */}
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="text-blue-500 w-5 h-5 mr-2" />
              <span>{location}</span>
            </div>
            {/* Job Type */}
            <div className="flex items-center text-gray-600">
              <FaRegClock className="text-blue-500 w-5 h-5 mr-2" />
              <span>{jobType}</span>
            </div>
            {/* Category */}
            <div className="flex items-center text-gray-600">
              <span className="font-medium">Category:</span>
              <span className="ml-2">{category}</span>
            </div>
            {/* Application Deadline */}
            <div className="flex items-center text-gray-600">
              <FaRegClock className="text-blue-500 w-5 h-5 mr-2" />
              <span>
                Application Deadline: {new Date(applicationDeadline).toLocaleDateString()}
              </span>
            </div>
            {/* Salary Range */}
            <div className="flex items-center text-gray-600">
              <FaMoneyBillWave className="text-blue-500 w-5 h-5 mr-2" />
              <span>
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
              </span>
            </div>
          </div>
          {/* requirements */}
          <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800">Requirements:</h3>
          <ul className="mt-3 space-y-2">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <FaCode className="text-green-500 w-5 h-5 mr-2" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

          
          {/* Apply Button */}
          <div className="text-center mt-6">
            <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default JobCard;