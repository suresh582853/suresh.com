import { map } from "lodash";
import React, { useRef } from "react";
import './viewstyles.css';


const ViewPopUp = ({ setShowModal,mainData ,columnMappings}) => {

  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const dataDeatisl = (rowData) =>
  {
    const columnMappingKeys = Object.keys(columnMappings);
      const columnData = columnMappingKeys.map((keyD, i) => {
   
      return  <div>
              <span>{columnMappings[keyD]}</span> <span>{rowData[keyD]}</span>
          </div>;
      
    });
    return columnData;
  }
  return (
               <div className="container" ref={modalRef} onClick={closeModal}>
                       <div className="modal">
                         
                           
                         { 
                          mainData.map((val)=>{
                            return(
                                     <div key={val.id}>



  

                                      
                                           <div><img src={val.image} width="120px" height="auto" /></div> 
                                             
                                           {dataDeatisl(val)}
                                     </div>
                            )
                          })
                         }
                        
                        <div className="btn" onClick={() => setShowModal(false)}>X</div>
                       </div>
               </div>
  )
};

export default ViewPopUp;