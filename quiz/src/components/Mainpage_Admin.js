import React , {useEffect, useState} from "react";
import {  Link , useParams } from "react-router-dom";
import axios from "axios";


function Mainpage_Admin(){

    const {id} = useParams();

  const [info , setInfo]=useState({
     Title_Quiz:"" , arrdata :[]
  });

   
  const [user , setUser]=useState({
    email:"" , pass:"" , name:""
});

  
  function Load(){
    
    axios.get("/get_Quiz/"+id)
    .then((res)=> {
       console.log(res);
      setInfo({
        arrdata : res.data
      })
    })
    .catch((err)=>{
        console.log(err); 
      })



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
      Load();
    }, []
  )


   
    



   

    function UpdateData(user_id , post_id ,id){
          

        axios.put("/update/"+user_id+"/"+post_id+"/"+id, info)

        .then((res)=>{
            console.log(res);
           
        })
        .catch((err)=>{
            console.log(err);
        })
    }




    return(



        <>
        
        <div>
      


	<nav class="navbar navbar-expand-lg navbar-light fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#"><b> Welcome {user.email}</b></a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
                
				<ul class="navbar-nav ml-auto">
					
					<li class="nav-item">
						<a class="nav-link" href="#">
                            <Link to={"/create_quiz/"+id}>
                                 <button  className="header btn btn-primary"> Create Quiz</button>
                            </Link>            
                        </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
                            <Link to={"/AllPost/"+id}>
                                <button  className="header btn btn-primary">View Created Quizs</button>
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
	<div class="carousel slide content" data-ride="carousel" id="carouselExampleIndicators">

 
    
    {info.arrdata.map((post , pos)=>{
    return(
    <div>
        

        <div>
        {post.Quiz.map((sub , so)=>{
            return(
        <div className="card">
                    
                    
                    <b className="card-header">{post.name}</b>
                    
                    <p> Title of your quiz is</p>
                    <div className="card-body">
                        
                    <b className="card-header">{sub.Title_quiz}</b>
                    
                    <button  onClick={()=>{UpdateData(post._id , sub._id , id)}} className="btn btn-primary">Delete</button>
                    </div>
                    
                                
        </div>

            )

        })}
        </div>

    </div>
    )
    })
    }



</div> 
    </div>
      
        </>
    )

}
export default Mainpage_Admin;