export const currentPitcher = (state='Maud Nelson', action) => {
    if (action.type === "CURRENT_PITCHER"){
        const newCurrentPitcher = action.payload
        return newCurrentPitcher
    }
    return state
}