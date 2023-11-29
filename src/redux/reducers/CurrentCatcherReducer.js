export const currentCatcher = (state='Elston Howard', action) => {
    if (action.type === "CURRENT_CATCHER"){
        const newCurrentCatcher = action.payload
        return newCurrentCatcher
    }
    return state
}