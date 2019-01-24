export default function(state=null, action) {
    if(action.type === "MOVIE_LIST") {
        return action.employees;
    } else return null;
}