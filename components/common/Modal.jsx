/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const Modal = ({title, addFleet, options, modal, setModal}) => {
    const [data, setData] = useState({});

    const handleSubmit = () => {
        console.log(data);
        addFleet(data);
    }

    const handleInputChange = (index, e) => {
        const { key } = options[index];
        const value = e.target.value;
    
        setData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };    
    return (
    <>
        <PureModal
        isOpen={modal}
        className="w-500"
        onClose={() => {
            setModal(false);
        }}
        >
        <div className="flex-row relative">
            <div className="bg-purple-600 pt-4 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
                <p>{title}</p>
            </div>
            <form
                id="modal-form"
                className="space-y-4"
                onSubmit={handleSubmit}
            >    
                {options.map((item, index) => (
                    <div key={index} className="flex justify-between">
                        <label className="w-1/2 font-semibold pr-4">{item.title}</label>
                        <input className="w-[75%] border-2 border-purple-600/50" onChange={(e) => handleInputChange(index, e)} type="text" />
                    </div>
                ))}
                    
            <div className="flex justify-between">
                <button className="bg-purple-700 text-white p-3 w-full mt-5 text-lg rounded-lg">Submit</button>
            </div>
            </form>
            
        </div>
        </PureModal>
        ;
    </>
  );
};

export default Modal;
