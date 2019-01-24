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
        return axios.get("http://localhost:3004/employeeDetails").then(response => {
            dispatch(employeeList(response.data))
        })
    }
}

export function loadMoviesData() {
    return function(dispatch) {
        return axios.get("http://localhost:3004/movieLists").then(response => {
            dispatch(movieList(response.data))
        })
    }
}