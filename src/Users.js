import React from 'react'
import {Link} from 'react-router-dom'

class Users extends React.Component{
    constructor(){
        super();
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        console.log('inside component did mount');
                    const xhr=new XMLHttpRequest();
                    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
                    xhr.send();
                    xhr.onload=()=>{
                        const users=JSON.parse(xhr.responseText);
                        this.setState({users:users});
                    }

    }

    render(){
        return(
            <div>
                <h2>Listing Users-{this.state.users.length}</h2>
                <ul>
                    {
                        this.state.users.map(user=>{
                            return <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}
                            </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Users