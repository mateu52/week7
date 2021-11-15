import React,{useState, useEffect} from 'react';

function UserList(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api')
        /* .then(response => { 
            return response.json();
        }) */
        .then ((data) => 
            setUsers(data.results)) //{}?
        .catch(error => console.error(error));
    },[]);
    return(
        <div>
            {users.map(users => (
                <div>
                    {users}
                </div>
            ))}
        </div>
    )
}

export default UserList;