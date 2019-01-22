export default function(state=null, action) {
    if(action.type === "MOVIE_LIST") {
        return action.payload;
    } else return null;
}