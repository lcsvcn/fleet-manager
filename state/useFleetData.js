import { useState, useEffect } from 'react';
import { baseUrl } from '../constants';

export function useFleetData() {
  const [fleetData, setFleetData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/fleets`)
      .then((response) => {
        if (response.status >= 300) {
          setError(`Error getting all fleet data: (Status: ${response.status})`);
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

  const addFleet = async (newFleet) => {
    const owner_email = localStorage.getItem("client_email");
    
    if (owner_email) {
      newFleet.owner_email = owner_email;
    }

    try {
      fetch(`${baseUrl}/fleets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFleet),
      })
        .then((response) => {
          if (response.status >= 300) {
            setError(`Error adding fleet (Status: ${response.status})`);
          }
          return response.json();
        })
        .then((data) => {
          setFleetData([...fleetData, data]);
        })
    } catch(error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return { fleetData, addFleet, error };
}
