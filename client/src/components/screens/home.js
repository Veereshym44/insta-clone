import React,{useState,useEffect}from 'react'

function Home() {
const [data,setData]=useState([])
    useEffect(()=>{
fetch("/allpost",{
    headers:{
        "authorization":"Bearer "+localStorage.getItem('jwt')
    }
}).then(res=>res.json())
.then(result=>{
   setData(result.posts)

    
})

    },[])
    return ( 
        <div className='home-container'>
         {
            data.map(item=>{
                return(
                               
<div className="card home-card" >
    <h5>{item.postedby.name}</h5>
    <div className="card-image">
        <img src={item.photo} alt="" />
        </div>
    <div className='card-content'>
    <i className="material-icons" style={{color:"red"}}>favorite</i>
        <h6>{item.title}</h6>
        <p>{item.body}</p>
        <input type="text" placeholder='add comment' name="" id="" />
    
    </div>
</div>
                )
            })
         } 
         
 
        </div>
     );
}


export default Home;