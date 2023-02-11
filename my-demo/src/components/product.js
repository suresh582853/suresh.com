import React,{useEffect,useState,useRef} from "react";
import cloneDeep from "lodash/cloneDeep";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import ViewPopUp from "./ViewPopUp";
import { TABLE_PAGE_SIZE,getApiData,tableData,headRow } from '../common/common'



const Product=()=>{

  getApiData('jj');
    const countPerPage = TABLE_PAGE_SIZE;
    const productTableColumnsMapping = {
            id:"ID",
            title: "Name",
            image:"Image",
            actions:"Actions"
    };

    const productViewColumnsMapping = {
     
      id:"ID:",
      title: "Name:",
     
      description:"Description:",
      currency:"Currency:",
      price:"Price:"
};

   const [productsAPIDat,setProductsAPIDat]=useState([]);
   const categoryData=useRef([]);
   const productSearchValue=useRef('');
   const categorySearch=useRef('');
   const currentRecordsCount=useRef('')
   const [firstTimePageLoad, setfirstTimePageLoad] =useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const [collection,setCollection] =  useState([] );
   const [showModal, setShowModal] = useState(false);
   const productFilterData= useRef();
  

const productsData=async () => {
    const response = await   getApiData('https://nick.wpweb.co.in/api/products.php');
    setProductsAPIDat(response);
}

const categorysData=async () => {
    const response = await  getApiData('https://nick.wpweb.co.in/api/categories.php');
    categoryData.current=response;
}
 
const updatePage = (p) => {
    let isFromSearch=false;
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    if ((productSearchValue.current!='')||( categorySearch.current !='')) {
      getFilterData(from,to);
    } else {
      setCollection(cloneDeep(productsAPIDat.slice(from, to)));
      currentRecordsCount.current=productsAPIDat.length;
    }
    
  };
  const getFilterData = (from,to) =>{
    const prodNameSearchquery =productSearchValue.current.toLowerCase();
    const data = cloneDeep(
        productsAPIDat
          .filter(item =>
                     item.title.toLowerCase().indexOf(prodNameSearchquery)> -1 
                &&  (categorySearch.current==''? true: item.categoryid== categorySearch.current)
                
                )
         
      );
      currentRecordsCount.current=data.length;
      setCollection(cloneDeep(data.slice(from, to)));
  }
useEffect(()=>{
    (async () => {
        if (productsAPIDat.length==0)
        {
            await  productsData();
            await categorysData();
            setfirstTimePageLoad(1);
        }
      })();
   },[productsAPIDat])

   
const dataView=(id)=>{

     productFilterData.current=productsAPIDat.filter((product,index)=>product.id == id);
  
    setShowModal(true);
}


 

 useEffect(() => {
      updatePage(1);
  }, [firstTimePageLoad]);
      
  const catCangeEvent=(event)=>{
    categorySearch.current=event.target.value;
    updatePage(1);
    
}
const prodNameSearchBlurEvent=(event)=>{

    productSearchValue.current=event.target.value;
    updatePage(1);
    
}

 



   
   const selectCategory=categoryData.current.map((val,index)=>{
    
    return (
              <option key={val.id} value={val.id}>{val.name}</option>
           )
    })

    return (
              <div> 
                     <h1>Products</h1>
                    
                     <input type="text" placeholder="SearchbyName"  onChange={prodNameSearchBlurEvent}   onBlur={prodNameSearchBlurEvent} style={{marginRight:'20px'}}/>
                     <select onChange={catCangeEvent}>
                        <option value=''>SelectCategory</option>
                        {selectCategory}
                     </select>

                     
                    <table>
                    <thead>
                    <tr>{headRow(productTableColumnsMapping)}</tr>
                    </thead>
                    <tbody >{tableData(collection,currentRecordsCount.current,productTableColumnsMapping,dataView)}</tbody>
                    </table>
   {
    (currentRecordsCount.current>0) &&
            <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={  currentRecordsCount.current}
      />
   }
   <div style={{marginTop:'20px'}}>
   Total Product records  (Without Filter) : { productsAPIDat.length}
   </div>
  
    
      
     

{showModal ? <ViewPopUp setShowModal={setShowModal} mainData={ productFilterData.current} columnMappings={productViewColumnsMapping}/> : null}
                     
              </div>
    )
}

export default Product;