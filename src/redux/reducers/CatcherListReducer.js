export const catcherList = (state=['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    if (action.type === "ADD_CATCHER"){
        const newCatcher = action.payload
        return [...state, newCatcher]
    }
    return state
}