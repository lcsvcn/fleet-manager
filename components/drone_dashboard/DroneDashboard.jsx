import React, { useState, useEffect} from "react";
import PageComponentTitle from "../common/PageComponentTitle";
import DroneTable from "./DroneTable";
import { useDroneData } from '../../state/useDroneData';

const DroneDashboard = ({id}) => {
    const { droneData, addDrone, error } = useDroneData(id);

    const [snackbarMessage, setSnackbarMessage] = useState(null);

    useEffect(() => {
      if (error) {
        setSnackbarMessage(error);
        localStorage.setItem("snackbarMessageFromDrone", error);
      }
    }, [error]);

    useEffect(() => {
      const storedSnackbarMessage = localStorage.getItem("snackbarMessageFromDrone");
      if (storedSnackbarMessage) {
        setSnackbarMessage(storedSnackbarMessage);
        setTimeout(() => {
          closeSnackbar();
        }, 5000);
      }
    }, []);

    const closeSnackbar = () => {
      localStorage.removeItem("snackbarMessageFromDrone"); 
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
              modalTitle="Create new Drone"
              addItem={addDrone}
              options={[
                { "title": "ID", "key": "drone_id", "type": "number"},
                { "title": "Name", "key": "drone_name", "type": "alphanumeric"},
                { "title": "Model", "key": "drone_model", "type": "alphanumeric"},
              ]}
              buttonTitle="Create new Drone"
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
          
          <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <DroneTable data={droneData} />
          </div>
                    
        </section>
        
       
      </main>
    );
};

export default DroneDashboard;