import React from 'react'
import EmployeeNew from './EmployeeNew'

class Employees extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      employees:[],
      isloading:true,
      issaving:false,
      iddelete:false,
      isnewEmployee:false,
    }
    this.handleclickedCancel= this.handleclickedCancel.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleclickedSubmit = this.handleclickedSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

handleclickedCancel() {
    this.setState({isnewEmployee: false});
}
handleAdd() {
    this.setState({isnewEmployee: true});
}

handleclickedSubmit(name, company,age, email, isActive) {
  this.setState({ isnewEmployee: false,issaving:true});
  let url ="http://localhost:3000/employees"
  fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        isActive: isActive,
        age: age,
        name: name,
        company: company,
        email: email
    })}).then(() => {
    fetch(url)
        .then(data => data.json())
        .then(employees => {
            this.setState({employees, issaving: false});
        });
});
}

handleDelete(id) {
  this.setState({isnewEmployee: false, isdelete: true});
  let url ="http://localhost:3000/employees"
  fetch(url + "/" + id, {
      method: 'DELETE'
  }).then(() => {
      fetch(url)
          .then(data => data.json())
          .then(employees => {
              this.setState({employees, isdelete: false});
          });
  });
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
    const { employees, isloading, issaving, isdelete, isnewEmployee} = this.state;
    return isloading ? <p>Loading ...</p> : issaving ? <p>Saving...</p> :
      <div>
        {!isnewEmployee &&   <button onClick={this.handleAdd}>Add employee</button> } 
        {isnewEmployee &&   <EmployeeNew clickedSubmit={this.handleclickedSubmit} clickedCancel={this.handleclickedCancel}/>}
        
        {employees.map((employee, index) => {
          return (
            <table style={{ margin: "15px 0 0 15px" }} key={employee.id}>
              <tbody >
              <tr>
                 <td>Name: {employee.name}</td>
              </tr>
              <tr>
                <td>Age: {employee.age}</td>
              </tr>
              <tr>
                 <td>Company: {employee.company}</td>
              </tr>
              <tr>
                 <td>Email: {employee.email}</td>  
              </tr>
              <tr>
                 <td>isActive: {employee.isActive.toString()}</td>
              </tr>
              <tr>
                 <td>
                 {!isdelete && <button onClick={() => this.handleDelete(employee.id)}>Delete Employee</button>}
                 {isdelete && <p>Deleting..</p>}  
                   </td>
              </tr>
              </tbody>    
            </table>
          )})
        }
        
      </div>
    ;
    
  }
}


export default Employees