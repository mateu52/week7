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
        <div>
                <p>AHA:)</p>
            {users &&
            users.length !== 0 &&
            users.map((user) => {
                return (
                    <User
                        key={user.login.uuid} 
                        userData={users} 
                    />
                )
            })}
        </div>
    );
}

export default UserList;
/* 
<User key={user.login.uuid}
userData={user} */