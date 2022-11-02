import React from 'react'
import UserList from '../userList/UserList'

class UserPage extends React.Component{
    constructor(props){
        super()
        this.state={
            userList:[]
        }
    }

    getUser=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>this.setState({userList: data}))
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>this.setState({userList: data}))
        
    }

    render(){
        return(
            <>
                <h1>Userlist</h1>
                <UserList names={this.state.userList} btn={this.getInfoOne}/>
                
            </>
        )
    }
}
export default UserPage