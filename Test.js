import React, { Component } from 'react';

 class Test extends Component {
     constructor(props){
         super(props);
         this.state={
             a:10
         }

 console.log("Constructor");
       
     }
     componentDidMount(){
         console.log("componentdid");
         //api istekleri

         this.setState({
             a:20
         })
     }
     componentDidUpdate=(prevProps, prevState)=> {
       
     }
     shouldComponentUpdate(){
         console.log("shouldcomponent");
         return false;
     }
     
     
  render() {

    return <div>

    </div>;
  }
}
export default Test;