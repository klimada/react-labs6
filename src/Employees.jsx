import React from 'react'

class Employees extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      employees:[],
      isloading:true,
    }
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
    const { employees, isloading } = this.state;
    return isloading ? <p>Loading ...</p> :
      <div>
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