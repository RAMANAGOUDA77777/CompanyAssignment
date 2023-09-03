import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    let[users,setUsers] = useState(null);

    useEffect(()=>{
       fetch("https://panorbit.in/api/users.json")
       .then(res => res.json())
       .then((data)=>{
        setUsers(data.users);
       })
    },[])

    return ( 
        <div id="background">
            <div id="login-container">
                <h1>Select an account</h1>
                {
                    users &&    <>
                                    {
                                        users.map(({profilepicture,name})=>{
                                            return(
                                                <>
                                                    <Link to="/profile">
                                                        <div id="user-container">
                                                            <img src={profilepicture} alt="" />
                                                            <p>{name}</p>
                                                        </div>
                                                    </Link>
                                                    <hr />
                                                </>
                                            )
                                        })
                                    }
                                </>
                }
            </div>
        </div>
    );
}
 
export default Login;