import { useState, useEffect } from 'react';
import { baseUrl } from '../constants';

export function useDroneData(id) {
  const [droneData, setDroneData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/fleet/${id}/drones`)
      .then((response) => {
        if (response.status >= 300) {
          setError(`Error getting all drone data: (Status: ${response.status})`);
          throw new Error(`Network response was not ok (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setDroneData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const addDrone = async (newDrone) => {
    try {
      fetch(`${baseUrl}/fleet/${id}/drones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDrone),
      })
        .then((response) => {
          if (response.status >= 300) {
            setError(`Error adding drone (Status: ${response.status})`);
          }
          return response.json();
        })
        .then((data) => {
          setDroneData([...droneData, data]);
        })
    }  catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return { droneData, addDrone, error };
}