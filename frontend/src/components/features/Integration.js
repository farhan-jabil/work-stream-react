import React from "react";
import { FaSlack, FaTrello, FaGoogleDrive, FaMicrosoft, FaDropbox } from "react-icons/fa";

const Integration = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-green-100 py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrations</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Seamlessly integrate Flexi Leave with your favorite tools to streamline your workflow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="integration-item bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
            <FaSlack className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Slack</h3>
            <p className="text-gray-700">Receive leave notifications directly in Slack.</p>
          </div>

          <div className="integration-item bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
            <FaTrello className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Trello</h3>
            <p className="text-gray-700">Manage leave requests as Trello cards.</p>
          </div>

          <div className="integration-item bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
            <FaGoogleDrive className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Google Drive</h3>
            <p className="text-gray-700">Store and share leave documents easily.</p>
          </div>

          <div className="integration-item bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
            <FaMicrosoft className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Microsoft 365</h3>
            <p className="text-gray-700">Sync leave with your Microsoft Calendar.</p>
          </div>

          <div className="integration-item bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
            <FaDropbox className="h-16 w-16 text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dropbox</h3>
            <p className="text-gray-700">Easily back up your leave records.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
