import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";

const DroneTable = ({ data }) => {
  const columns = [
        {
          title: 'Drone ID',
          dataIndex: 'drone_id',
          key: 'droneId',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon"
        },
        {
          title: 'Drone Name',
          dataIndex: 'drone_name',
          key: 'droneName',
          width: 400,
          className:"text-white bg-gray-600 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon"
        },
        {
          title: 'Drone Model',
          dataIndex: 'drone_model',
          key: 'droneModel',
          width: 400,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Operations',
          dataIndex: 'fleet_id',
          key: 'operations',
          className: "text-white bg-gray-600 p-2 border-b-2",
          render: (fleetId) => (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateToFleet(fleetId);
              }}
            >
              View
            </a>
          ),
        },
      ];
      const [activePage, setActivePage] = useState(1)
  
      const handlePageChange = (pageNumber)=>{
        setActivePage(pageNumber)
      }
      const navigateToFleet = (fleetId) => {
        const url = `/fleet/${fleetId}`;
        window.location.href = url;
      };

    return (
        <>
        <Table columns={columns} data={data} rowKey={data => data.id}  className='bg-purple-700 p-4 w-full text-center text-white rc-table-custom font-semibold '/>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={data.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          nextPageText={'Next'}
          prevPageText={'Prev'}
          firstPageText={'First'}
          lastPageText={'Last'}
          innerClass="js-ul"
          itemClass='js-li'
          linkClass='page-link'
        />
        </>
        
    );
};

export default DroneTable;