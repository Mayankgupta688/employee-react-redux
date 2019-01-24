export default function(state=null, action) {
    if(action.type === "EMPLOYEE_LIST") {
        return action.employees;
    } else return state;
}