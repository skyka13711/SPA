import { searchAPI } from "../API/api";


let initialState = {

    result: {
        kind: "youtube#searchListResponse",
        etag: 'SJZWTG6xR0eGuCOh2bX6w3s4F94 / 8FxPia9SrjuLwAGm005PlymrymM',
        nextPageToken: "CAUQAA",
        regionCode: "RU",
        pageInfo: { totalResults: '', resultsPerPage: '' },
        items: '',
    },
    isResult: false,
    currentVal: '',
}


const searchReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_RESULT': {

            return {
                ...state,
                isResult: true,
                currentVal: action.currentVal,
                result: {
                    nextPageToken: action.data.nextPageToken,
                    regionCode: action.data.regionCode,
                    pageInfo:
                    {
                        totalResults: action.data.pageInfo.totalResults,
                        resultsPerPage: action.data.pageInfo.resultsPerPage
                    },
                    items: action.data.items,
                }
            }
        }


        default: return state
    }
}

const setResultAC = (currentVal, data) => ({ type: 'SET_RESULT', currentVal: currentVal, data });

export const setResult = (currentVal, maxResults) => async (dispatch) => {

    let data = await searchAPI.search(currentVal, maxResults)
    console.log(data)
    dispatch(setResultAC(currentVal, data))
}



export default searchReducer