import axios from "axios";

export function movieList(movieList) {
    return {
        type: "MOVIE_LIST",
        payload: movieList
    }
}

export function employeeList(employees) {
    return {
        type: "EMPLOYEE_LIST",
        employees: employees
    }
}

export function loadEmployeeData() {
    return function(dispatch) {
        return axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(response => {
            dispatch(employeeList(response.data))
        })
    }
}

export function loadMoviesData() {
    return function(dispatch) {
        return axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(response => {
            dispatch(movieList(response.data))
        })
    }
}

export function deleteEmployee(id) {
    return {
        type: "DELETE_EMPLOYEE_LIST",
        employeeId: id
    }
}

export function addEmployee(employeeData) {
    return {
        type: "ADD_EMPLOYEE",
        employeeData: employeeData
    }
}