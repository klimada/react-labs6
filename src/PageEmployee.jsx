import React from 'react'
import EmployeeNew from './EmployeeNew'
import {
  withRouter
} from "react-router-dom";
class PageEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleclickedCancel= this.handleclickedCancel.bind(this);
        this.handleclickedSubmit = this.handleclickedSubmit.bind(this);
      }

 handleclickedCancel() {
    this.props.history.push("/");
}
handleclickedSubmit(name, company,age, email, isActive) {
    this.setState({ isnewEmployee: false,issaving:true});
    let url ="http://localhost:3001/employees"
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
        this.props.history.push('/');
    });
  }
  render() {
    return(
        <EmployeeNew clickedSubmit={this.handleclickedSubmit} clickedCancel={this.handleclickedCancel}/>

    );
 }
}

export default withRouter(PageEmployee)