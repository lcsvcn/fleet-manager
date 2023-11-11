import { useState, useEffect } from 'react';
import { baseUrl } from '../constants';

export function useDroneData(id) {
  const [droneData, setDroneData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const owner_email = localStorage.getItem('client_email');

    fetch(`${baseUrl}/fleet/${id}/drones`, {
      headers: {
        'owner_email': owner_email,
      },
    })
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
  }, [id]);

  const addDrone = async (newDrone) => {
    try {
      const owner_email = localStorage.getItem('client_email');
      newDrone.owner_email = owner_email;

      fetch(`${baseUrl}/fleet/${id}/drones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'owner_email': owner_email,
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
        });
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return { droneData, addDrone, error };
}