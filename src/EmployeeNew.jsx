import React from 'react'

class EmployeeNew extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        _id: "",
        isActive: true,
        age: 0,
        name: "",
        company: "",
        email: "",
      };
      this.somethingChanged = this.somethingChanged.bind(this);
      this.isActiveChanged = this.isActiveChanged.bind(this);
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

    render() { 
        return (
            <div>
                <p>New Employee: </p>
                <div>Name: <input type="text" name="name" onChange={this.somethingChanged} /> </div>
                <div>Company: <input type="text" name="company" onChange={this.somethingChanged} /> </div>
                <div>Age: <input type="number" name="age" onChange={this.somethingChanged} /></div>
                <div>Email: <input type="text" name="email" onChange={this.somethingChanged} />  </div>
                <div>Is Active? <input type="checkbox" checked={this.state.isActive} onClick={this.isActiveChanged} /> </div>           
            <button onClick={this.props.clickedSubmit}>Submit</button>
            <button onClick={this.props.clickedCancel}>Cancel</button>
        </div>          
        );
    }
}
export default EmployeeNew; 