import '../styles/Register.css';
import React , {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


function Register(){


      
  const [user , setUser] = useState({
    name:"" ,  email : "" , pass :"" , sirname:"" , mobile_no : "" , address: "" , status:"user"
 
   });
 
   let name,value ;
   
 const handleInputs = (e) => {
   console.log(e);
   name=e.target.name;
   value=e.target.value;
 
   setUser({ ...user , [name]:value});
 }
 
 
 
 function PostData(e){
   e.preventDefault();
   
   
  axios.post("/register" , user)
   .then(function(response){
 
     console.log(response);
     window.alert("Done");
   
   
   }).catch((err)=>{
     console.log(err);
   })
 
 }
 
 

  return(

    <>


     <div id="samarth" >
      <form method="post" onSubmit={(e)=>PostData(e)}>
        
        <div>
          <input type="text" onChange={handleInputs} required="true" placeholder="enter your name" name="name" />
          <input type="text" onChange={handleInputs} required="true" placeholder="enter your sirname" name="sirname" />
        </div>
        
        <div>
          <input type="email" onChange={handleInputs} required="true" placeholder="enter your email" name="email" />
          <input type="number" onChange={handleInputs} required="true" placeholder="enter your Mobile Number" name="mobile_no" />
        </div>
        
        <div>
          <input type="text" onChange={handleInputs} required="true" placeholder="enter your Address" name="address" />
        </div>
        
        <div>
          <input type="password" onChange={handleInputs} required="true" placeholder="enter your password" name="pass" />
        </div>
      
        <div>
        <br />
          <input  type="submit" className="btn btn-primary" id="Aditya"/>
        </div>

      </form>
     </div>
    
      </>
    
    );
}
export default Register;