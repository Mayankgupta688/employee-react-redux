export default function(state=null, action) {
    if(action.type === "EMPLOYEE_LIST") {
        return action.employees;
    } else if(action.type === "DELETE_EMPLOYEE_LIST") {
        var returnData =  state.filter((employee) => {
            return employee.id !== action.employeeId
        });
        return returnData;
    } else if(action.type === "ADD_EMPLOYEE") {
        return [action.employeeData, ...state]
    } else return state;
}