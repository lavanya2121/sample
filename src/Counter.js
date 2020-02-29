import React from 'react'

class Counter extends React.Component{
    constructor(){//first constructor gets called
        console.log('inside constructor')//mainly used for initialization//to set the initial values to the properties of an object
        super();//call constructor in parent class//then super() method will get called in the react component
        this.state={//3rd render method gets callled//in this.state we can store objects-to store multiple values
            count:1,
            text:'counter'
        }
    }


handleClick(){
    console.log('handle click')
    //this.state.count+=1
    //console.log(this.state);//we cannot access the state directly
    this.setState(function(prevState){
        return {
            count:prevState.count+1//no semicolen
        }

    })
}

handleClick2(){
    console.log('handle click')
    //this.state.count+=1
    //console.log(this.state);//we cannot access the state directly
    this.setState(function(prevState){
        return {
            count:prevState.count-1
        }

    })
}

handleClick3(){
    console.log('handle click')
    //this.state.count+=1
    //console.log(this.state);//we cannot access the state directly
    this.setState(function(prevState){
        //setState() method is used to change the state value//set
        return {
            count:prevState.count=0
        }

    })
}


render(){
   console.log('inside render'+this.state.count);
    //to show something on the ui we use render method
    return(
        //in render method we write jsx code
        <div>
            <h1>{this.state.text}{this.state.count}</h1>
            <button onClick={this.handleClick.bind(this)}>Up</button>
            <button onClick={this.handleClick2.bind(this)}>Down</button>
            <button onClick={this.handleClick3.bind(this)}>Reset</button>
        </div>
    )
}

}


export default Counter