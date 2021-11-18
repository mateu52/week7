import React,{useState, useEffect} from 'react';

function UserList(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=2')
            .then(response => { 
                return response.json();
            })
            .then ((data) => {
                setUsers(data.results);
            })
            .catch(error => {
                console.error(error)
            });
    },[]);
    return(
        <div>
           <p>{users[1].first}</p>
             {console.log(users[0])}
           
        </div>
    )
}

export default UserList;