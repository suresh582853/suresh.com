import React,{useEffect,useState,useRef} from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import ViewPopUp from "./ViewPopUp";
import { TABLE_PAGE_SIZE,getApiData,tableData,headRow } from '../common/common'

const Category=()=>{
    const categoryTableColumnsMapping = {
        id:"ID",
        name: "Name",
       image:"Image",
       actions:"Actions"
       
      };
      const categoryViewColumnsMapping = {
     
        id:"ID:",
        name: "Name:",
        description:"Description:",
       
  };
     

   const allData=useRef([]);
   const [showModal, setShowModal] = useState(false);

const [showCategory,setshowCategory]=useState([]);

const [type,setType]=useState('');
const [firstTimePageLoad, setfirstTimePageLoad] =useState("");
  
const cateData= async () =>{
  if ( allData.current.length ===0)
  {
    const response = await  getApiData('https://nick.wpweb.co.in/api/categories.php');
    allData.current=response;
    setfirstTimePageLoad(1);
  }
  
}


useEffect(() => {
  cateData(); 
  updatePage(1);
}, [firstTimePageLoad]);
   
const dataView=(id)=>{

    const categorydata=allData.current.filter((category,index)=>category.id == id);
    setshowCategory(categorydata);
    setShowModal(true);
    setType('categ');
}

 const countPerPage = TABLE_PAGE_SIZE;
 const [value, setValue] = React.useState("");
 const [currentPage, setCurrentPage] = React.useState(1);
 const [collection, setCollection] = React.useState(
   cloneDeep(allData.current.slice(0, countPerPage))
 );



 
  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.current.slice(from, to)));
  };

  



    
    return (
              <div>
                     <h1>Categories</h1>
                     <table>
        <thead>
          <tr>{headRow(categoryTableColumnsMapping)}</tr>
        </thead>
        <tbody >{tableData(collection,allData.current.length,categoryTableColumnsMapping,dataView)}</tbody>
      </table>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={allData.current.length}
      />

{showModal ? <ViewPopUp setShowModal={setShowModal} mainData={showCategory}  columnMappings={categoryViewColumnsMapping}/> : null}
                     
              </div>
    )
}

export default Category;