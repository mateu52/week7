import React, {useState} from 'react';

function User({userData}){
    const [names, setName] = useState(userData);
    return(
        <div>
            <p>ok</p>
             {names.map((user) => {
                return (
                    <div key={user.login.uuid}>
                        <p>{user.login.username}</p>
                    </div>
                )
            })} 
        </div>
    )
}

export default User;