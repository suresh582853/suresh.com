
var personalDetails=[]; 
               
var btn1=document.getElementById("btn1");



try{

    btn1.addEventListener('click',function(){

    let ename=document.getElementById("name").value;
    let eage=document.getElementById("age").value;
    let eemail=document.getElementById("email").value;
   
       personalDetails=JSON.parse(localStorage.getItem("users")||'[]');
 
       if(personalDetails.some((value)=>{return value.email==eemail})){
          
         document.getElementById("emailValid").style.display="block";
       }
       else{
 
       let eObj=  {name:ename,age:eage,email:eemail,is_deleted:0};
 
       personalDetails.push(eObj);
 
       localStorage.setItem("users",JSON.stringify(personalDetails));

       window.location.href="http://localhost/suresh/UserList.html";

       }
    
 });

}
catch(ex)
{
  
}
  

function employee(){

  let users=JSON.parse(localStorage.getItem("users"));

        let html="";

        for(let i=0;i<users.length;i++){

          if(users[i].is_deleted==0){
            
          html +=`<tr>
                      <td>${users[i].name}</td>
                      <td>${users[i].age}</</td>
                      <td>${users[i].email}</</td>
                      <td><a href="#" onclick="editData('${users[i].email}')">Edit</a>&nbsp;
                      <a href="#" onclick="deleteData('${users[i].email}')">Delete</a></td>
                   </tr>`;
          }
        }

   document.getElementById("root").innerHTML=html;

    
    var addBtn=document.getElementById("add");

    addBtn.addEventListener('click',function(){

    window.location.href="http://localhost/suresh/login.html";

      
   });
      
    }

      function editData(email){


        window.location.href=`http://localhost/suresh/login.html?email=${email}`;


      }

    function deleteData(email){
      
        var ans=confirm("Are you sure you want to delete this record");

        if (ans==false)
        {
          return;
        }
        
          let users=JSON.parse(localStorage.getItem("users"));
          
          
          for(let j=0;j<users.length;j++){

           if(users[j].email==email){
            
            users[j].is_deleted=1;
           
      
            break;

           }
           
           }
          
           localStorage.setItem("users",JSON.stringify(users));

           employee();
         
    }

   

   