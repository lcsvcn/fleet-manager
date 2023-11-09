import { useState, useEffect } from 'react';

export function useFleetData() {
  const [fleetData, setFleetData] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = 'http://localhost:3100';

  useEffect(() => {
    fetch(`${baseUrl}/fleets`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFleetData(data);
      })
      .catch((error) => {
        setError(error);
        console.error('Error fetching fleet data:', error);
      });
  }, []);

  const addFleet = (newFleet) => {
    console.log(newFleet)
    fetch(`${baseUrl}/fleets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFleet),
    })
      .then((response) => response.json())
      .then((data) => {
        setFleetData([...fleetData, data]);
      })
      .catch((error) => {
        setError(error);
        console.error('Error adding fleet:', error);
      });
  };

  const deleteFleet = (fleetId) => {
    fetch(`${baseUrl}/fleets/${fleetId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setFleetData(fleetData.filter((fleet) => fleet.fleet_id !== fleetId));
      })
      .catch((error) => {
        setError(error);
        console.error('Error deleting fleet:', error);
      });
  };

  return { fleetData, addFleet, deleteFleet, error };
}