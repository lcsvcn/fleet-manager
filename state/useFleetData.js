import { useState, useEffect } from 'react';
import { baseUrl } from '../constants';

export function useFleetData() {
  const [fleetData, setFleetData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/fleets`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setFleetData(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error fetching fleet data:', error);
      });
  }, []);

  const addFleet = (newFleet) => {
    const owner_email = localStorage.getItem("client_email");

    newFleet.owner_email = owner_email;

    fetch(`${baseUrl}/fleets`, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
      body: JSON.stringify(newFleet),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error adding fleet (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setFleetData([...fleetData, data]);
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error adding fleet:', error);
      });
  };

  return { fleetData, addFleet, error };
}
