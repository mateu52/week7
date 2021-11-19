import React,{useState, useEffect} from 'react';
//import User from './User';
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
             {/* <User /> */}
              {users.map((user) => {
                 return <div key={user.login.uuid}>
                            <p>{user.name.title}</p>
                        </div>
             })} 
        </div>
    );
}

export default UserList;