function display(){

  var element=document.createElement("link");
  element.setAttribute("rel","stylesheet");
  element.setAttribute("href","mycss.css");
  document.getElementsByTagName("head")[0].appendChild(element);


  var target= document.querySelector('head');


  target.insertAdjacentElement("beforeend",element);

   var newElement=`   <div class="header">
   <h1>Software It Solution indian Pvt ltd</h1>
   <input type="button" id="btn" value="GET">
   <marquee width="75%" direction="right" height="50px">
       <h2>Welcome to my Webpage</h2>
       </marquee>
<div class="row">
<div class="left" style="background-color:rgb(214, 32, 141);width:384px;height:1000px;">
     <h1>Menu</h1>
   <div class="demo">
       <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category">
<div class="dropdown-content1">
    <ul id="myMenu">
      <li><a href="login.html">Login</a></li>
      <li><a href="UserList.html">EmployeeList</a></li>
      <li><a href="#">JavaScript</a></li>
      <li><a href="#">PHP</a></li>
      <li><a href="#">Python</a></li>
      <li><a href="#">SQL</a></li>
      <li><a href="#">Bootstrap</a></li>
      <li><a href="#">Node.js</a></li>
      <li><a href="#">jQuery</a></li>
   </ul>   
   </div>
   </div>
</div>
</div>                            
</div>
<div class="main">       
<ul>
<li><a class="active" href="example.html"><i class="fa fa-fw fa-home"></i>Home</a></li>
<li class="Services">
<a href="#Services"><i class="fa fa-fw fa-wrench"></i>
Services</a>
<div class="dropdown-content">
<a href="#">Home Services</a>
<a href="#">Delivery Services</a>
</div>
</li>
<li><a href="#Contact"><i class="fa fa-fw fa-envelope"></i>Contact</a></li>
<li><a href="#about"><i class="fa fa-fw fa-user"></i>about</a></li>   
</ul>
</div>`;

  var target= document.querySelector('body');


  target.insertAdjacentHTML("beforebegin",newElement);

  
   var btn=document.getElementById("btn");
    btn.addEventListener('click',function(){
       alert(this.innerHTML=window.location.href);
    }); 
        
}