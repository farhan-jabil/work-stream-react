import React from "react";

const Customization = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Customization
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-12">
          Tailor Flexi Leave to meet your organization's specific needs with customizable features and settings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="customization-item bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Custom Leave Policies
            </h3>
            <p className="text-gray-700">
              Define custom leave policies to fit the unique needs of your organization, including different leave types and accrual methods.
            </p>
          </div>

          <div className="customization-item bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Role-Based Access
            </h3>
            <p className="text-gray-700">
              Set up role-based access controls to ensure that employees have the appropriate level of access to the system based on their roles.
            </p>
          </div>

          <div className="customization-item bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              Custom Notifications
            </h3>
            <p className="text-gray-700">
              Customize notification settings to ensure that employees and managers receive timely alerts and reminders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
