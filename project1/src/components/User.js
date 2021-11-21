import React, {useState} from 'react';

function User({userData}){
    //const [names, setName] = useState(userData);
    const checkVal = (value, text) => {
        if (!value) {
            return text;
        }
        return value;
    }
    return(
        <div>
            <p>ok</p>
             {userData.map((user) => {
                return (
                    <div key={user.login.uuid}>
                        <h5>_________________</h5>
                        <p><img alt="foto" src={user.picture.large}></img></p>
                        <p>{checkVal(user.name.first, "Nie podano imienia")} {user.name.last}</p>
                        <p>{user.location.street.name}: {user.location.street.number}</p>
                        <p>{user.location.city}</p>
                        <p>{user.email}</p>
                        <p>{new Date(user.registered.date).toDateString()}</p>
                        <h5>................................</h5>
                        
                    </div>
                )
            })} 
        </div>
    )
}

export default User;
                        
                        // <p>{user.registered.date}</p>  poniedziałek, 11 maja)
                        // <p>{user.picture.large}</p> 