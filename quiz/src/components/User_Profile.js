import '../styles/User_Profile.css';
import React , {useState , useEffect} from "react";
import {  Link , useParams } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



function User_Profile(){

    const { id }=useParams();

        const [user , setUser] = useState({
            name:"" ,  email : "" , pass :"" , sirname:"" , mobile_no : "" , address: "" 
        
        });
        
        let name,value ;
        
        const handleInputs = (e) => {
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        
        setUser({ ...user , [name]:value});
        }
        
            
        function Loaddata(){
            axios.get("/get-specific/"+id)

            .then((res)=>{
                console.log(res);
                setUser(res.data);

            })
            .catch((err)=>{
                console.log(err);
            })
        }

        useEffect(()=>{
            Loaddata();
        } , []);

 
           
        function UpdateData(e){
            e.preventDefault();

            axios.put("/Update/"+id , user)

            .then((res)=>{
                console.log(res);
                setUser(res.data);
                window.alert("done");

            })
            .catch((err)=>{
                console.log(err);
            })
        }



    return(
      <>

    <br />
    <Link to={"/main/"+id}>
         <button  className="btn btn-primary"> Back</button>
    </Link> 
        
    <br />  
     <div id="update-box" >
     <form method="post" onSubmit={(e)=>UpdateData(e)}>
       
       <div>
       <br />
         <input type="text" onChange={handleInputs} required="true" value={user.name} placeholder="enter your name" name="name" />
         <input type="text" onChange={handleInputs} required="true" value={user.sirname} placeholder="enter your sirname" name="sirname" />
       </div>
       
       <div>
         <input type="email" onChange={handleInputs} required="true" value={user.email} placeholder="enter your email" name="email" />
         <input type="number" onChange={handleInputs} required="true" value={user.mobile_no} placeholder="enter your Mobile Number" name="mobile_no" />
       </div>
       
       <div>
       
         <input type="text" onChange={handleInputs} required="true" value={user.address} placeholder="enter your Address" name="address" />
       </div>
       
      
       <div>
       <br />
         <input  type="submit" value="Update" className="btn btn-primary" id="Aditya"/>
       </div>

     </form>
    </div>
   
      </>

    );

}
export default User_Profile;