import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import { PropertyProps } from '../interfaces';

const Home: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('');

  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) => {
    return (
      (categoryFilter === '' || property.category.includes(categoryFilter)) &&
      (priceFilter === '' || property.price.toString() === priceFilter)
    );
  });

  return (
    <Layout>
      <section className="hero bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
        <h1 className="text-white text-4xl font-bold">Find Your Perfect Stay</h1>
      </section>
      <section className="filters p-4">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded py-2 px-4 w-full"
          >
            <option value="">All</option>
            <option value="Apartment">Apartment</option>
            <option value="Mansion">Mansion</option>
            <option value="Countryside">Countryside</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border rounded py-2 px-4 w-full"
          >
            <option value="">All</option>
            <option value="$1200/month">$1200/month</option>
            <option value="$1500/month">$1500/month</option>
            {/* Add more price options as needed */}
          </select>
        </div>
      </section>
      <section className="listings p-4">
        <h2 className="text-2xl font-semibold mb-4">Property Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property: PropertyProps, index: number) => (
            <div key={index} className="property-card border rounded-lg overflow-hidden shadow-lg">
              <img src={property.imageUrl} alt={property.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{property.name}</h3>
                <p className="text-gray-600">{property.address}</p>
                <p className="text-gray-800">{property.price}</p>
                <p className="text-gray-600">{property.offers}</p>
                <p className="text-yellow-500">Rating: {property.rating}</p>
                <p className="text-gray-600">Category: {property.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
