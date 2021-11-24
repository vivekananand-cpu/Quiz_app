import React , {useEffect, useState} from "react";
import {  Link , useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function View_Score(){

        const {id} = useParams();
        const {title} = useParams();
        

       

 const [score , setScore]=useState({
  Score_Quiz:"" , arrdata:[] ,Title_quiz:""
});



 function Load(){
    
   
    axios.get("/score_quiz/"+id+"/"+title)
    .then((res)=> {
       console.log(res.data);
      setScore({ 
          Title_quiz : res.data.Title_quiz ,
          Score_Quiz : res.data.Score_Quiz,
        arrdata : res.data.Questions
      })
     
  
    })
    .catch((err)=>{
        console.log(err); 
      })
    }
  
  
  useEffect(()=>{
    Load();
  }, []
)








return(



  <>
  
   <div>


<div className="Content">
<div class="card border-dark mb-3" >

<div>
  
  
<div class="container"> <h4>{score.Title_quiz}</h4></div>
<div className="container">
  <h1>Score: {score.Score_Quiz}</h1>
</div>

  {score.arrdata.map((sub)=>{
      return(
      <div key={sub._id}>

       
     
      <div class="shadow p-3 mb-5 bg-white rounded">
      <div class="card-header"><b>Question : </b>{sub.que}</div>

      <div class="card-body text-dark">
       
          <form>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option1}   />(A) : <strong>{sub.option1}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option2}  />(B) : <strong>{sub.option2}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option3}  />(C) : <strong>{sub.option3}</strong></p>
              <p class="card-text"><input type="radio" name="selected_option" value={sub.option4}  />(D) : <strong>{sub.option4}</strong></p>
          </form>
          
          
              <br/>
         
              <h5 class="card-title"><b>Your Answer: </b>{sub.selected_option}</h5> 
          <br/>
          <h5 class="card-title"><b>Correct Answer : </b>{sub.ans}</h5>
      </div>
      </div>
      
              
       </div>

      )
 
 })}
 

{/* <b>Score : {score.Score_Quiz}</b> */}


        <Link to={"/mainpage_user/"+id}>   
          <button  className="btn btn-primary">Go To Home Page</button>
        </Link>
</div>

</div> 
</div>
</div> 


  </>
)

}
export default View_Score;



