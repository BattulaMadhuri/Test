import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService';
import 'bootstrap/dist/css/bootstrap.min.css'
export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
        // this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount(){

        EmployeeService.getAllEmployees ().then((res) => {
            this.setState({employees:res.data});
        } );
        // addEmployee(){
        //     this.props.history.push('/add-employee/_add')
        // }
    }

  render() {
    return (
      <div className='tec'>
        <h2 className="text-center">Employees List</h2>
        <div className = "row">
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td> {employee.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div> 
      </div>
      </div>
    )
  }
}

// export default ListEmployeeComponent