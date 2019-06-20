import React from "react";

import { connect } from "react-redux";
import * as actions from "../actions";

class EmployeeDetails extends React.Component {

    

    render() {

        return (
            <div key={this.props.employee.id}>
                <div>
                    <img src={this.props.employee.avatar} alt={this.props.employee.id}/><br></br><br></br>
                    <label>User Name: {this.props.employee.name}</label><br></br><br></br>
                    <label>User Id: {this.props.employee.id}</label><br></br><br></br>
                    <input type="button" value="Delete" onClick={() => this.props.deleteEmployee(this.props.employee.id)} /><hr></hr>
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

export default connect(mapStateToProps, actions)(EmployeeDetails);