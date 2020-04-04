
let initialState = {
    history: []
}


const historyReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_HISTORY": {
            return {
                ...state,

                history: [...state.history, { id: state.history.length++, searchName: action.history.searchName, searchVal: action.history.searchVal, maxResults: +action.history.maxResults }]
            }
        }
        case 'DELETE': {
            return {
                ...state,

                history: [...state.history.filter(item => item.id !== action.id)]
            }
        }
        
        case 'UPDATE': {
            return {
                ...state,
                history:
                    [...state.history.map(item => {

                        if (item.id === action.history.id) {

                            return { ...item, id: action.history.id, searchName: action.history.searchName, searchVal: action.history.searchVal, maxResults: action.history.maxResults }
                        }
                        return item
                    })]
            }
        }
        default: return state

    }
}

export default historyReducer

const setHistoryAC = (name, value, maxResults) => ({
    type: 'SET_HISTORY',
    history: { searchName: name, searchVal: value, maxResults }
});

const deleteAC = (id) => ({
    type: 'DELETE',
    id
});
const UpdateAC = (name, value, id, maxResults) => ({
    type: 'UPDATE',
    history: { id, searchName: name, searchVal: value, maxResults }

});

export const setHistory = (name, value, maxResults) => (dispatch) => {

    dispatch(setHistoryAC(name, value, maxResults))

}
export const deleteHistory = (id) => (dispatch) => {

    dispatch(deleteAC(id))

}
export const UpdateHistory = (name, value, id, maxResults) => (dispatch) => {
    dispatch(UpdateAC(name, value, id, maxResults))

}