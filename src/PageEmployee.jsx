import React from 'react'

class PageEmployee extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        _id: "",
        name: "",
        company: "",
        age: "",
        email: "",
        isActive: true,
        isnewEmployee: false,
      };
      this.somethingChanged = this.somethingChanged.bind(this);
      this.isActiveChanged = this.isActiveChanged.bind(this);
      this.handleclickedCancel = this.handleclickedCancel.bind(this);
      this.handleclickedSubmit = this.handleclickedSubmit.bind(this);
    }

    somethingChanged(event) {
        this.setState({
            [event.target.name]: event.target.value, 
        });
    }

    isActiveChanged(event) {
        const isActive = event.target.checked;
        this.setState({isActive});
    }

    handleclickedCancel() {
        this.setState({isnewEmployee: false});
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
         //todo zaraz
      });
      }

    render() { 
        const { name, company, age, email, isActive } = this.state;
        return (
            <div>
                <p>New Employee: </p>
                <div>Name: <input type="text" name="name" onChange={this.somethingChanged} /> </div>
                <div>Company: <input type="text" name="company" onChange={this.somethingChanged} /> </div>
                <div>Age: <input type="number" name="age" onChange={this.somethingChanged} /></div>
                <div>Email: <input type="text" name="email" onChange={this.somethingChanged} />  </div>
                <div>Is Active? <input type="checkbox" checked={this.state.isActive} onChange={this.isActiveChanged}  /> </div>           
                <button onClick={() => this.clickedSubmit(name, company, age, email, isActive)}>Submit</button>
            <button onClick={this.clickedCancel}>Cancel</button>
        </div>          
        );
    }
}
export default PageEmployee; 