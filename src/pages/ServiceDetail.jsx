import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import services from "../data/services.json";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchServiceDetail = () => {
      const matchedService = services.find((service) => service.id === serviceId);
      setService(matchedService);
    };

    fetchServiceDetail();
  }, [serviceId]);

  if (!service) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <p className="text-gray-500">Loading service details...</p>
        </div>
      </section>
    );
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            {service.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            {service.description}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {service.title}
              </h2>
              <p className="leading-relaxed text-base text-gray-500">
                {service.description}
              </p>

              {/* Price Display */}
              <p className="text-gray-900 text-xl font-semibold mt-4">
                Price: {service.price}
              </p>

              <div className="flex justify-between mt-4">
                <Link
                  to="/services"
                  className="text-indigo-500 inline-flex items-center"
                >
                  Back to Services
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7"></path>
                  </svg>
                </Link>

                {/* Book Now Button */}
                <button
                  onClick={toggleModal}
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Book {service.title}</h3>
            <button
                            onClick={() => setIsModalOpen(false)} // Close modal on click
                            className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Close
                        </button>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:outline-none"
              >
                Confirm Booking
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceDetail;
