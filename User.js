import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Users from './Users';
import App from '../App';
import UserConsumer from "./context";
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateUser from "./UpdateUser";

 class User extends Component {

    onDeleteUser=async(dispatch,e)=>{
        const{id}=this.props;

        //delete request

        await axios.delete(`http://localhost:3004/users/${id}`)

        
        
        
        //consumer dispatch

        dispatch({type:"DELETE_USER",payload:id})

        
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }
    state={
         isVisible: false
     }

     onclickEvent = (e)=>{
        

        this.setState({
            isVisible:!this.state.isVisible
        })

    }
     


   constructor(props){
        super(props);
        this.state ={

        isVisible:false

        

        }

        
    }
  render() {


    const {id,name,salary,department}=this.props;
    const{isVisible} =this.state;

   return( <UserConsumer>
       {

           value =>{
               const{dispatch}=value;

               return (
                <div className="col-md-8 mb-4">
            
                    <div className="card"style={isVisible?{backgroundColor:"#62848d"}:null}>
                        <div className='card-header d-flex justify-content-between'>
                            <h4 className='d-inline'>{name}</h4>
                            <i onClick={this.onDeleteUser.bind(this,dispatch)}  className='far fa-trash-alt ' style={{cursor:"pointer"}}></i>
                        </div>
            
                      <div className='card-body'>
                            <p className='card-text'>salary:{salary}</p>
                            <p className='card-text'> department:{department}</p>
                            <Link to={`edit/${id}`} className='btn btn-dark btn-block'>Update user</Link>
                           
                        </div> 
                        
                    
            
                        
                    </div>
                   
                    
                    
                </div>
                    
                    );
           }
       }

   </UserConsumer>)
   
  

    }

}

 
//User.PropTypes={
  //  name:PropTypes.string.isRequired,
   // salary:PropTypes.string.isRequired,
   // department:PropTypes.string.isRequired,
   // id: PropTypes.string.isRequired
//}

  



 
 
export default User;
