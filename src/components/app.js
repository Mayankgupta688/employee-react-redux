import React from "react";

import { connect } from "react-redux";
import * as actions from "../actions";

import EmployeeDetails from "./employeeDetails";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            newEmployeeName: "",
            newEmployeeId: ""
        }
    }


    renderEmployees() {
        if(this.props.employees) {
            return this.props.employees.map((employee) => {
                return <div key={employee.id}>
                    {employee.name.indexOf(this.state.filterText) > -1 && 
                        <EmployeeDetails employee={employee}></EmployeeDetails>}
                </div>
            })
        }
    }

    updateFilter = (event) => {
        this.setState({
            filterText: event.target.value
        });
    }

    updateInput = (event) => {
        if(event.target.id === "userName") {
            this.setState({
                newEmployeeName: event.target.value
            })
        } else if(event.target.id === "userId") {
            this.setState({
                newEmployeeId: event.target.value
            })
        }
    }

    addEmployee = () => {
        this.props.addEmployee({
            name: this.state.newEmployeeName,
            id: this.state.newEmployeeId,
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg",
            createdAt: new Date()
        })

        this.setState(() => {
            return {
                newEmployeeId: ""
            }
        })

        this.setState(() => {
            return {
                newEmployeeName: "",
            }
        })
    }

    render() {

        return (
            <div>
                <section>
                    <h2>Add Employee To the List:</h2>
                    <input type="text" id="userName" onChange={this.updateInput} value={this.state.newEmployeeName} /><br></br><br></br>
                    <input type="text" id="userId" onChange={this.updateInput} value={this.state.newEmployeeId} /><br></br><br></br>
                    <input type="button" value="Click To Add" onClick={this.addEmployee} /><br></br>
                </section><hr></hr>
                
                {this.props.employees && 
                    <><br></br><b style={{"marginTop": "10px"}}>Total Employee Count: {this.props.employees.length}</b><br></br><br></br></>}

                <p>
                    <p>Filter Employee: </p>
                    <input type="text" value={this.state.filterText} onChange={this.updateFilter} />
                </p><hr></hr>

                <div>
                    {this.renderEmployees()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, actions)(App);