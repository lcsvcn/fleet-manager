import { useState, useEffect } from 'react';
import { baseUrl } from '../constants';

export function useDroneData(id) {
  const [droneData, setDroneData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`${baseUrl}/fleet/${id}/drones`);
    fetch(`${baseUrl}/fleet/${id}/drones`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setDroneData(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching drone data:', error);
      });
  }, []);

  const addDrone = (newDrone) => {
    console.log(newDrone);
    fetch(`${baseUrl}/fleet/${id}/drones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDrone),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error adding drone (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setDroneData([...droneData, data]);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error adding drone:', error);
      });
  };

  return { droneData, addDrone, error };
}