// // ver si hay que importar las actions o funcionan igual

// const initialState = {
//     dogs: [],
//     filterDog: [],
//     dogDetail: [],
//     temperament: [],
// }


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'GET_DOGS':
//             return {
//                 ...state,
//                 dogs: action.payload
//             }
//         case 'GET_ID':
//                 return {
//                     ...state,
//                     dogDetail: action.payload
//                 }
//         case 'GET_RAZA':
//                     return {
//                     ...state,
//                     filterDog: action.payload
//                     }
//         case 'GET_TEMP':
//                     return {
//                     ...state,
//                     temperament: action.payload
//                     }
//         case 'ORDER_ASC': 
//                     return {
//                     ...state,
//                     dogs: state.dogs
//                         .filter((b) => b.name !== null)
//                         .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
//                         filterDog: state.filterDog.filter((b) => b.name !== null)
//                         .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
                        
//                     }
//         case 'ORDER_DESC': 
//                     return {
//                     ...state,
//                     dogs: state.dogs
//                         .filter((b) => b.name !== null)
//                         .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
//                         filterDog: state.filterDog.filter((b) => b.name !== null)
//                         .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)),
//                     }
//         case 'ORDER_WEIGHTMAX': 
//                     return {
//                     ...state,
//                     dogs: state.dogs
//                         .filter((b) => b.weight !== null)
//                         .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
//                         filterDog: state.filterDog.filter((b) => b.weight !== null)
//                         .sort((a, b) => (a.weight > b.weight ? 1 : -1)),
//                     }
                
//         case 'ORDER_WEIGHTMIN': 
//                     return {
//                     ...state,
//                     dogs: state.dogs
//                         .filter((b) => b.weight !== null)
//                         .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
//                         filterDog: state.filterDog.filter((b) => b.weight !== null)
//                         .sort((a, b) => (a.weight < b.weight ? 1 : -1)),
//                     }
//         case 'TEMP_FILTER': {
//                 // ...state,
//                 // filterDog: filterTemperament(state.dogs, action.payload)
                
//                 let filtapi = state.dogs.filter( e => e.temperament?.includes(action.payload))
//                 let filtdb = state.dogs.filter(e => e.temperaments?.map((temp)=> temp.name)?.includes(action.payload))
                
//                 let newArrayFil= filtapi.concat(filtdb)
                
//                 if(action.payload === 'All'){
//                     return{
//                         ...state,
//                         filterDog: state.dogs
                        
//                     }
//                 }else{
//                     return{
//                         ...state,
//                         //dogs: newArrayFil,
//                         filterDog: newArrayFil,
//                         }
//                         }
//                     }
//         case 'DB':
//                     return {
//                         ...state,
//                         dogs: state.dogs.filter((b) => b.db ),
//                         filterDog: state.filterDog.filter((b) => b.db),
    
//                     }
//         case 'API': 
//                     return {
//                         ...state,
//                         dogs: state.dogs.filter((b) => !b.db),
//                         filterDog:state.filterDog.filter((b) => !b.db),
//                     }
//         case 'ALL': 
//                     return {
//                         ...state,
//                         dogs: state.dogs,
//                         filterDog: state.filterDog,
//                     }
//         default:
//                     return {
//                         ...state,
//                     }
//         }
// }



// export default reducer;

const initialState = {
    breeds: [],
    filter: [],
    breedsDetail: {},
    temps: [],
  


}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BREEDS':
            return {
                ...state,
                breeds: action.payload
            }
        case 'GET_BREEDS_RACE':
            return {
                ...state,
                breeds: action.payload
            }
        case 'GET_ID':
            return {
                ...state,
                breedsDetail: action.payload
            }
        case 'order_ZA':
            return {
                ...state,
                breeds: action.payload
            }
        case 'order_AZ':
            return {
                ...state,
                breeds: action.payload
            }
        case 'ORDER_LIGHT':
            return {
                ...state,
                breeds: action.payload
            }
        case 'ORDER_HEAVY':
            return {
                ...state,
                breeds: action.payload
            }
        case 'GET_TEMP':
            return {
                ...state,
                temps: action.payload
            }
        case 'CREATE_BREED':
            return {
                ...state,
                breeds: state.breeds.concat(action.payload)
            }
        case 'FILTER':
            return {
                ...state,
                filter: action.payload
            }

        case 'DB': 
            return {
                ...state,
                filter: state.breeds.filter(b => b.id.length > 6).sort()
            }
        case 'API': 
            return {
                ...state,
                filter: state.breeds.filter(b => b.id < 500).sort()
            }
        case 'ALL': 
            return {
                ...state,
                filter: state.breeds
            }
        default:
            return {
                state
            }
    }
}

export default reducer