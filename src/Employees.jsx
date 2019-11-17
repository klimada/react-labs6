import React from 'react'
import EmployeeNew from './EmployeeNew'

class Employees extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      employees:[],
      isloading:true,
      isnewEmployee:false,
    }
    this.handleclickedCancel= this.handleclickedCancel.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleclickedSubmit = this.handleclickedSubmit.bind(this);
  }

handleclickedCancel() {
    this.setState({isnewEmployee: false});
}
handleAdd() {
    this.setState({isnewEmployee: true});
}
handleclickedSubmit() {
  this.setState({  isnewEmployee: false });

  fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(data => this.setState({ hits: data, isLoading: false }));
}
  componentDidMount(){
    let url ="http://localhost:3000/employees"
    fetch(url)
        .then(resp => resp.json())
        .then(employees =>{
          this.setState({employees:employees,isloading:false});
        });
  }

  render() {
    const { employees, isloading, isnewEmployee} = this.state;
    return isloading ? <p>Loading ...</p> :
      <div>
        {!isnewEmployee &&   <button onClick={this.handleAdd}>Add employee</button> } 
        {isnewEmployee &&   <EmployeeNew clickedSubmit={this.handleclickedSubmit} clickedCancel={this.handleclickedCancel}/>}
        
        {employees.map((employee, index) => {
          return (
            <div key={index}>
              <h4>Employee : {employee._id}</h4>
              <p>isActive: {employee.isActive.toString()}</p>
              <p>Age: {employee.age}</p>
              <p>Name: {employee.name}</p>
              <p>Company: {employee.company}</p>
              <p>Email: {employee.email}</p>           
            </div>
          )})
        }
        
      </div>
    ;
    
  }
}


export default Employees