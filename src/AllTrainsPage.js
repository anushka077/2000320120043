import React, { useEffect, useState } from 'react';
import { getAllTrains } from './api/api';

const AllTrainsPage = ({ token }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const data = await getAllTrains(token);
        setTrains(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrains();
  }, [token]);

  return (
    <div>
      <h1>All Trains</h1>
      {/* Display trains data here */}
    </div>
  );
};

export default AllTrainsPage;
