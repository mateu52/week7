import React,{useState, useEffect} from 'react';

function UserList(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
        .then(response => { 
            return response.json();
        })
        .then ((data) => 
            setUsers(data)) //{}?
        .catch(error => console.error(error));
    },[]);
    return(
        <div>
           
                return <h1>{users}</h1>
           
        </div>
    )
}

export default UserList;