// import axios from 'axios';

// // acá sucede conexión entre back y front le agrego un sort para que me ordene alfabeticamente y de menor a mayor
// export function getDogs() {
//     return function (dispatch) {
//         return axios.get('http://localhost:3001/dogs')
//             .then(dog => {
//                 const order = dog.data.sort()
//                 // const order = dog.data.sort((a, b) => {
//                     // if (a.name > b.name) return 1
//                     // if (a.name < b.name) return -1
//                     // return 0
//                 // })
//                 dispatch({
//                     type: 'GET_DOGS',
//                     payload: order
//                 })
//             })
//     }
// };
// export function getById(id) {
//     return function (dispatch) {
//         return axios.get(`http://localhost:3001/breeds/${id}`)
//             .then(dog => {
//                 dispatch({
//                     type: 'GET_ID',
//                     payload: dog.data
//                 })
//             })
//     }

// };


// export function getRaza(race) {
//     return function (dispatch) {
//         return axios.get('http://localhost:3001/dogs?q=' + race)
//         .then(dog => {
//             dispatch({
//                 type: 'GET_RAZA',
//                 payload: dog.data
//             })
            
//         })
//     }
// };

// // temperament o temperaments?
// export function getTemp() {
//     return function (dispatch) {
//         return axios.get('http://localhost:3001/temperament')
//             .then(temp => {
//                 dispatch({
//                     type: 'GET_TEMP',
//                     payload: temp.data
//                 })
//             })
//     }
// }

// // FILTROS: alfabeticamente
// export function orderAlph(value) {

//     if (value === 'ORDER_ASC') {
// 		return {
// 			type: 'ORDER_ASC',
// 		};
// 	} else {
// 		return {
// 			type: 'ORDER_DESC',
// 		};
// 	}
// }
// // min-max peso
// export function orderWeight(value) {

//     if (value === 'ORDER_WEIGHTMAX') {
// 		return {
// 			type: 'ORDER_WEIGHTMAX',
// 		};
// 	} else {
// 		return {
// 			type: 'ORDER_WEIGHTMIN',
// 		};
// 	}
// }

// // temperamentos
// export function tempFilter(payload){
//     return{
//     type: 'TEMP_FILTER',
//     payload: payload,
//     }
// }
// // creado en bd o api?
// export function getCreateBreedsFromDb(value) {
// 	if (value === 'DB') {
// 		return {
// 			type: 'DB',
// 		};
// 	} else if (value === 'API'){
// 		return {
// 			type: 'API',
// 		};
// 	}else if (value === 'ALL') {
// 		return {
//             type: 'ALL'
//         }
// 	}
// }
import axios from 'axios'

export function getBreeds() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
            .then(dog => {
                const order = dog.data.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })
                dispatch({
                    type: 'GET_BREEDS',
                    payload: order
                })
            })
    }
};

export function getById(id) {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/dogs/` + id)
            .then(dog => {
                dispatch({
                    type: 'GET_ID',
                    payload: dog.data
                })
            })
    }

};


export function getBreedsRace(race) {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs?q=' + race)
            .then(dog => {
                dispatch({
                    type: 'GET_BREEDS_RACE',
                    payload: dog.data
                })

            })
    }
};


export function getZA() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
            .then(dog => {
                const orderZA = dog.data.sort((b, a) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })
                dispatch({
                    type: 'order_ZA',
                    payload: orderZA
                })
            })
    }
}
export function getAZ() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
            .then(dog => {
                const orderAZ = dog.data.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })
                dispatch({
                    type: 'order_AZ',
                    payload: orderAZ
                })
            })
    }
}

export function getLight() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
            .then(dog => {
                const orderLight = dog.data.sort((a, b) => {
                    if (typeof dog.data.id === 'string') {
                        if (a.weight > b.weight) return 1
                        if (a.weight < b.weight) return -1
                        return 0
                    } else {
                        if (parseInt(a.weight.metric) > parseInt(b.weight.metric)) return 1
                        if (parseInt(a.weight.metric) < parseInt(b.weight.metric)) return -1
                        return 0
                    }
                })
                dispatch({
                    type: 'ORDER_LIGHT',
                    payload: orderLight
                })
            })
    }
}

export function getHeavy() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
            .then(dog => {
                const orderHeavy = dog.data.sort((b, a) => {
                    if (typeof dog.data.id === 'string') {
                        if (a.weight > b.weight) return 1
                        if (a.weight < b.weight) return -1
                        return 0
                    } else {
                        if (parseInt(a.weight.metric) > parseInt(b.weight.metric)) return 1
                        if (parseInt(a.weight.metric) < parseInt(b.weight.metric)) return -1
                        return 0
                    }
                })
                dispatch({
                    type: 'ORDER_HEAVY',
                    payload: orderHeavy
                })
            })
    }
}

export function getTemp() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/temperament')
            .then(temp => {
                dispatch({
                    type: 'GET_TEMP',
                    payload: temp.data
                })
            })
    }
}

export function filter(array) {
    return {
        type: 'FILTER',
        payload: array
    }
}

export function getSource(value) {
    if (value === 'DB') {
        return {
            type: 'DB'
        }
    } else if (value === 'API') {
        return {
            type: 'API'
        }
    }
    else if (value === 'ALL'){
        return {
            type: 'ALL'
        }
    }
 
}