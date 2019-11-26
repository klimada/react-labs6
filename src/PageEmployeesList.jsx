import React from 'react'
import PageEmployee from './PageEmployee'

class PageEmployeesList extends React.Component {

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
   
  }

handleclickedCancel() {
    this.setState({isnewEmployee: false});
}
handleAdd() {
   // this.setState({isnewEmployee: true});
}

componentDidMount(){
    let url ="http://localhost:3001/employees"
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
        <button onClick={this.handleAdd}>Add employee</button>
       
        {employees.map((employee, index) => {
          return (
            <table style={{ margin: "15px 0 0 15px" }} key={employee.id}>
              <tbody>
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


export default PageEmployeesList