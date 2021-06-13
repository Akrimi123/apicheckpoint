import React,{useState , useEffect} from 'react'
import axios from 'axios'

const UserList = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
                .catch(err => {
                    console.log(err);
                })
    }, [])
    return (
        <div>
            <ol>
                {
                    users.map(user => 
                        <li key={user.id}>
                        <h4 style={{color:'red'}}>Name:</h4>{user.name}
                        <br/>
                        <h4 style={{color:'red'}}>UserName:</h4>{user.username}
                        <br/>
                        <h4 style={{color:'red'}}>Email:</h4>{user.email}                        
                        </li>)
                }
                </ol>
        </div>
    )
}

export default UserList
