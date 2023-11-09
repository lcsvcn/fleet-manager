import React from "react";
import PageComponentTitle from "../common/PageComponentTitle";
import FleetTable from "./FleetTable";
import { useFleetData } from '../../state/useFleetData';

const Dashboard = () => {
  const { fleetData, addFleet, deleteFleet } = useFleetData();

    return (
        <main className="p-6 sm:p-10 space-y-6">
        
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <PageComponentTitle
              modalTitle="Create new Fleet"
              addFleet={addFleet}
              options={[
                { "title": "Fleet ID", "key": "fleet_id" },
                { "title": "Fleet Name", "key": "fleet_name"  },
                { "title": "Number of Drones", "key": "number_drones" },
              ]}
              buttonTitle="Create new Fleet"
            />
        </div>

        <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
          
          <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
            <FleetTable fleetData={fleetData} deleteFleet={deleteFleet} />
          </div>
                    
        </section>
        
       
      </main>
    );
};

export default Dashboard;