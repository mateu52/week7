import React,{useState, useEffect} from 'react';
import User from './User';
function UserList(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=2')
            .then((response) => response.json())
            .then ((data) => {
                setUsers(data.results);
            })
            .catch(error => console.error(error))
    },[]);
    return (
        <>
            <p>AHA:)</p>
                <User
                    userData={users} 
                />
        </>
    )
}

export default UserList;
/* 
<User key={user.login.uuid}
userData={user} */