const initialState = {
    dogs: [],
    filter: [],
    dogDetail: {},
    temps: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload
            }
        case 'GET_ID':
                return {
                    ...state,
                    dogDetail: action.payload
                }
        case 'GET_RAZA':
                    return {
                        ...state,
                        dogs: action.payload
                    }
        case 'GET_TEMP':
                    return {
                        ...state,
                        temps: action.payload
                    }
        case 'ORDER_ASC': 
                    return {
                        ...state,
                        breeds: state.breeds
                        .filter((b) => b.name !== null)
                        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
                        filteredBreeds: state.filteredBreeds.filter((b) => b.name !== null)
                        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
                        
                    }
        case 'ORDER_DESC': 
                    return {
                        ...state,
                        breeds: state.breeds
                        .filter((b) => b.name !== null)
                        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
                        filteredBreeds: state.filteredBreeds.filter((b) => b.name !== null)
                        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
                    }
        case 'ORDER_WEIGHTMAX': 
                    return {
                        ...state,
                        breeds: state.breeds
                        .filter((b) => b.weight !== null)
                        .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
                        filteredBreeds: state.filteredBreeds.filter((b) => b.weight !== null)
                        .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
                    }
                
        case 'ORDER_WEIGHTMIN': 
                    return {
                        ...state,
                        breeds: state.breeds
                        .filter((b) => b.weight !== null)
                        .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
                        filteredBreeds: state.filteredBreeds.filter((b) => b.weight !== null)
                        .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
                    }
        case 'TEMP_FILTER': {
                // ...state,
                // filteredBreeds: filterTemperament(state.breeds, action.payload)
                
                let filtapi = state.breeds.filter( e => e.temperament?.includes(action.payload))
                let filtdb = state.breeds.filter(e => e.temperaments?.map((temp)=> temp.name)?.includes(action.payload))
                
                let newArrayFil= filtapi.concat(filtdb)
                
                if(action.payload === 'All'){
                    return{
                        ...state,
                        filteredBreeds: state.breeds
                        
                    }
                }else{
                    return{
                        ...state,
                        //breeds: newArrayFil,
                        filteredBreeds: newArrayFil,
                    }
                }
            }
        case 'CREATE_BREED':
                    return {
                        ...state,
                        dogs: state.breeds.concat(action.payload)
                    }

        case 'DB':
                    return {
                        ...state,
                        breeds: state.breeds.filter((b) => b.db ),
                        filteredBreeds: state.filteredBreeds.filter((b) => b.db),
    
            }
        case 'API': 
                    return {
                        ...state,
                        breeds: state.breeds.filter((b) => !b.db),
                        filteredBreeds:state.filteredBreeds.filter((b) => !b.db),
            }
        case 'ALL': 
                    return {
                        ...state,
                        breeds: state.breeds,
                        filteredBreeds:state.filteredBreeds
            }
        default:
                    return {
                        state
            }
}
}



export default reducer;