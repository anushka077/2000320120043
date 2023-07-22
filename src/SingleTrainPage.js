import React, { useEffect, useState } from 'react';
import { getTrainById } from './api/api';

const SingleTrainPage = ({ match, token }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const data = await getTrainById(match.params.trainId, token);
        setTrain(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrain();
  }, [match.params.trainId, token]);

  return (
    <div>
      {train ? (
        <div>
          <h1>Train Details</h1>
          {/* Display train details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrainPage;

