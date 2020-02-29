import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserShow extends React.Component{
    constructor(){
        super();
        this.state={
            users:[]
        }
    }
    // componentDidMount(){
    //                 const id=this.props.match.params.id
    //                 const xhr=new XMLHttpRequest();
    //                 xhr.open('GET',`https://jsonplaceholder.typicode.com/users/${id}`);
    //                 xhr.send();
    //                 xhr.onload=()=>{
    //                     const users=JSON.parse(xhr.responseText);
    //                     this.setState({users:users});
    //                 }
    //         }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
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
                console.log(this.props);
                return(
                    <div>
                        <h2>Show Page-{this.props.match.params.id}</h2>
                        <p>{this.state.users.name}-{this.state.users.email}-
                        {this.state.users.website}</p>
                        <Link to="/listing-users">Back</Link>
                    </div>
                )
            }

}

export default UserShow