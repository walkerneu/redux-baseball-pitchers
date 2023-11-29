export const pitcherList = (state=['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    if (action.type === "ADD_PITCHER"){
        const newPitcher = action.payload
        return [...state, newPitcher]
    }
    return state
}