import React from 'react'
import {Link} from 'react-router-dom'

//npm install --save axios
import axios from 'axios'

class ListingUsers extends React.Component{
    constructor(){
        super();
        this.state={
            users:[]
        }
    }

    // componentDidMount(){
    //     console.log('inside component did mount');
    //                 const xhr=new XMLHttpRequest();
    //                 xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    //                 xhr.send();
    //                 xhr.onload=()=>{
    //                     const users=JSON.parse(xhr.responseText);
    //                     this.setState({users:users});
    //                 }

    // }
    componentDidMount(){
        //get,post,put,delete
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //console.log(response.data)
            const users=response.data
            this.setState({users})
        })//success
        .catch((err)=>{
            console.log(err)
        })//failure
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
// export default Users
export default ListingUsers