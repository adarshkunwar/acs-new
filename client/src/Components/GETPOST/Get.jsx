import React, { useState,useEffect} from 'react'

    

const Get = () => {
    const [users,setUsers] = useState([]);
    const getUsers =async ()=>{
        const res = await fetch("http://localhost:8000/target");
        const user = await res.json();
        console.log(user);
        setUsers(user);
     }
      useEffect(() => {
       getUsers();
      }, [])
      
     
  return (
   <div>
          {users.map((props)=>{
            const {name} =  props;
            return (
                <div>
                    <p>{name}</p>
                </div>
            )
          })} 
   </div>
  )
}

export default Get