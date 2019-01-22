export function movieList() {
    return {
        type: "MOVIE_LIST",
        payload: [
            {id: 1, name: "Mayank"},
            {id: 2, name: "Meha"},
            {id: 3, name: "Anshul"}
        ]
    }
}