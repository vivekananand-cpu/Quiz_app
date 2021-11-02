import {  Link , useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../styles/Create_quiz.css";
import axios from "axios";
import React , {useEffect, useState} from "react";
import { useParams } from "react-router-dom";



function Create_quiz(){
  const { id } = useParams();
  const history = useHistory();   

  const [info , setInfo]=useState({
    Title_quiz:"" , Desc_Quiz:"" ,
  });

  
  const [data , setData]=useState({
    title:"", que:"" , ans :""
  });



   
  
  
      function handlechange(e){
        setInfo({
          ...info , [e.target.name] : e.target.value }
        )}


        function handleInputs(e){
          setData({
            ...data , [e.target.name] : e.target.value }
          )}

        


        function PostQuestion(e){
          e.preventDefault();
    
          axios.put("/question/"+id , data)
          .then(data=>{
            console.log(data)
            
          
          }).catch((err)=>{
              console.log(err);
            })
      }  
      

    function PostData(e){
      e.preventDefault();

      axios.put("/entry/"+id , info)
      .then(data=>{
        console.log(data)
        history.push("/mainpage_admin/"+id)
      
      }).catch((err)=>{
          console.log(err);
        })
  }  

function Load(){


  axios.get("/get_que/"+id , info )
    .then((res)=> {
       console.log(res);
      setInfo(
        res.data
      )
    })
    .catch((err)=>{
        console.log(err); 
      })



  
  let cartItem = document.querySelector('.cart-items-container');
  
  document.querySelector('#cart-btn').onclick = () =>{
      cartItem.classList.toggle('active');
       }
  
}

  useEffect(()=>{
    Load();
  }, []
)



    return(
        <>

       


<div className="all">


        
	<nav class="navbar navbar-expand-lg navbar-light fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#"><b> Welcome{info.Title_quiz}</b></a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
                
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">
                            <Link to={"/mainpage_admin/"+id}>
                                <button  className="btn btn-primary">Home</button>
                            </Link>
                        </a>
					</li>
				
					
                    <li>
                    <Link to={"/User_Profile/"+id}>
                            <button  className="btn btn-primary" id="update-but">Update Profile</button>
                    </Link>
            
                    </li>
				</ul>
			</div>

      
		</div>
	</nav>

        <div className="total">
            
    <div className="cont">
      
     
         

         <form method="PUT" onSubmit={(e)=>PostData(e)}>
            <input type="text" onChange={(e)=>{handlechange(e)}} name="Title_quiz" required={true} placeholder="Enter Title Of Quiz "></input>
           <br />
            <input type="textarea" onChange={(e)=>{handlechange(e)}} name="Desc_Quiz" required={true} placeholder="Enter short description about Quiz "></input>
           <br/>
           <br/>
           
            <input type="submit" className="btn btn-primary"></input>
         </form>

        <div>
        <button type="button" id="cart-btn" className="btn btn-primary">Attach</button>
        </div>
       
            
           
    </div>

    <div class="cart-items-container">
            
            <div class="content">
              
              
            {data.title = info.Title_quiz};
              <form method="post" onSubmit={(e)=>PostQuestion(e)}>
              <div className="email-div">		
                <input type="text" className="emaill" onChange={(e)=>{handleInputs(e)}} placeholder="Title" required={true} name="title" value={info.Title_quiz} />
              </div>
              <div className="email-div">		
                <input type="text" className="emaill" onChange={(e)=>{handleInputs(e)}} placeholder="Question" required={true} name="que" />
              </div>
              <div className="pass-div">
                <input type="text" className="pass-input" onChange={(e)=>{handleInputs(e)}} placeholder="Answer" required={true} name="ans" />
              </div>
              <div className="submit-div">
                <input  type="submit" className="btn btn-primary" id="Aditya"/>
              
                
                
                
              </div>
              </form>
        
            </div>
        
        
        
              
                </div>
            </div>
            


    </div>
    
  
        </>
        
    )

}
export default Create_quiz;

