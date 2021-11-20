import React, {useState} from 'react';

function User({userData}){
    //const [names, setName] = useState(userData);
    return(
        <div>
            <p>ok</p>
             {userData.map((user) => {
                return (
                    <div key={user.login.uuid}>
                        <h5>_________________</h5>
                        <p>{user.name.first}</p>
                        <p>{user.location.street.name}: {user.location.street.number}</p>
                        <p>{user.location.city}</p>
                        <h5>................................</h5>
                        
                    </div>
                )
            })} 
        </div>
    )
}

export default User;
                        // 
                        // <p>{user.email}</p>
                        // <p>{user.registered.date}</p>  poniedziałek, 11 maja)
                        // <p>{user.picture.large}</p> 