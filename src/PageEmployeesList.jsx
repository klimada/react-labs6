import React from 'react'
import PageEmployee from './PageEmployee'
import { Link } from 'react-router-dom';

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
    this.handleDelete = this.handleDelete.bind(this);

  }

handleclickedCancel() {
    this.setState({isnewEmployee: false});
}
handleAdd() {
    {<Link to="/new">About</Link>}
   // this.setState({isnewEmployee: true});
}
handleDelete(id) {
    this.setState({isnewEmployee: false, isdelete: true});
    let url ="http://localhost:3001/employees"
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
        <Link to="new" style={{ margin: "15px 0 0 15px" }}><button>Create new employee</button></Link>
      </div>
    ;
    
  }
}


export default PageEmployeesList