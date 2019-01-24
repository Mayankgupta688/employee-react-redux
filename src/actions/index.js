import axios from "axios";

// export function movieList() {
//     return {
//         type: "MOVIE_LIST",
//         payload: [
//             {id: 1, name: "Mayank"},
//             {id: 2, name: "Meha"},
//             {id: 3, name: "Anshul"}
//         ]
//     }
// }

function movieList(employees) {
    return {
        type: "MOVIE_LIST",
        employees: employees
    }
}

export default function loadEmployeeData() {
    return function(dispatch) {
        return axios.get("http://localhost:3004/employeeDetails").then(employees => {
            dispatch(movieList(employees.data))
        })
    }
}