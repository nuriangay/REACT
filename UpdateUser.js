import React, { Component } from 'react';

import UserConsumer from './context';
import axios from 'axios';

 



 class UpdateUser extends Component {

    state={
        
        name:"",
        department:"",
        salary:""
    }
    componentDidMount = async() => {
        const{id}=this.props.match.params;

        const response=await axios.get(`http://localhost:3004/users/${id}`)
        const{name,salary,department}=response.data;

        this.setState({name,salary,department});
      
    }
    

 
    changeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value

        })

    }
    updateUser= async(dispatch,e)=>{
        e.preventDefault();

        const{name,salary,department}=this.state;
        const{id}=this.props.match.params;
        const updatedUser={
            name,salary,department


        };

        const response=await axios.put(`http://localhost:3004/users/${id}`,updatedUser)
       
        dispatch({type:"UPDATE_USER",payload:response.data});
    }
    
    




    render() {

    const{visible,name,salary,department}=this.state;
    return <UserConsumer>
        {

            value=>{
                const{dispatch}=value;

                return <div className='col-md-8 mb-4'>
       

        
        <div className='card'>
            <div className='card-header'>
                <h4>Update User Form</h4>
                <div>
                    <div className='card-body'>
                        <form onSubmit={this.updateUser.bind(this,dispatch)}>
                            <div className='form-group'>
                                <label  htmlFor='name'>Name</label>
                                <input type="text" name='name' id='id' placeholder='Enter your Name' className='form-control' value={name} onChange={this.changeInput}></input>
                            </div>
                        </form>
                    </div>
                    <form>
                            <div className='form-group'>
                                <label  htmlFor='department'>Department</label>
                                <input type="text" name='department' id='department' placeholder='Enter your Department' className='form-control'value={department} onChange={this.changeInput}></input>
                            </div>
                        </form>
                </div>
                <form>
                            <div className='form-group'>
                                <label  htmlFor='salary'>Salary</label>
                                <input type="text" name='salary' id='salary' placeholder='Enter your Salary' className='form-control'value={salary} onChange={this.changeInput}></input>
                            </div>
                            <button type='submit' classname='btn btn-danger btn-block'>Submit</button>
                        </form>
            </div>
        </div>
       
    

        


    </div>


            }
        }
    </UserConsumer>

    


}
 }








        
  

export default UpdateUser;
