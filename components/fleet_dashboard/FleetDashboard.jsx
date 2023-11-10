import React, { useState, useEffect} from "react";
import PageComponentTitle from "../common/PageComponentTitle";
import FleetTable from "./FleetTable";
import { useFleetData } from '../../state/useFleetData';

const FleetDashboard = () => {
  const { fleetData, addFleet, error } = useFleetData();
  const [snackbarMessage, setSnackbarMessage] = useState(null);

  useEffect(() => {
    if (error) {
      setSnackbarMessage(error);
      localStorage.setItem("snackbarMessageFromFleet", error);
    }
  }, [error]);

  useEffect(() => {
    const storedSnackbarMessage = localStorage.getItem("snackbarMessageFromFleet");
    if (storedSnackbarMessage) {
      setSnackbarMessage(storedSnackbarMessage);
      setTimeout(() => {
        closeSnackbar();
      }, 5000);
    }
  }, []);

  const closeSnackbar = () => {
    localStorage.removeItem("snackbarMessageFromFleet"); 
    setSnackbarMessage(null);
  };

  return (
    <main className="p-6 sm:p-10 space-y-6">
     {snackbarMessage && (
        <div className="bg-red-500 text-white p-2 h-[50px] fixed top-0 left-0 right-0 flex items-center justify-between">
          <p className="pl-6">{snackbarMessage}</p>
          <button onClick={closeSnackbar} className="text-white  pr-6">
            Close
          </button>
        </div>
      )}
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <PageComponentTitle
          modalTitle="Create new Fleet"
          addItem={addFleet}
          options={[
            { "title": "ID", "key": "fleet_id", "type": "number" },
            { "title": "Name", "key": "fleet_name", "type": "alphanumeric" },
          ]}
          buttonTitle="Create new Fleet"
        />
      </div>

      <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
        <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
          <FleetTable data={fleetData} />
        </div>
      </section>
    </main>
  );
};

export default FleetDashboard;
