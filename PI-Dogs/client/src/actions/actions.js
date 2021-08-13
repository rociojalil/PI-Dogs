import axios from 'axios';

// acá sucede conexión entre back y front le agrego un sort para que me ordene alfabeticamente y de menor a mayor
export function getDogs() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
            .then(dog => {
                const order = dog.data.sort()
                // const order = dog.data.sort((a, b) => {
                    // if (a.name > b.name) return 1
                    // if (a.name < b.name) return -1
                    // return 0
                // })
                dispatch({
                    type: 'GET_DOGS',
                    payload: order
                })
            })
    }
};
export function getById(id) {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/breeds/${id}`)
            .then(dog => {
                dispatch({
                    type: 'GET_ID',
                    payload: dog.data
                })
            })
    }

};


export function getRaza(race) {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs?q=' + race)
        .then(dog => {
            dispatch({
                type: 'GET_RAZA',
                payload: dog.data
            })
            
        })
    }
};

// temperament o temperaments?
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

// FILTROS: alfabeticamente
export function orderAlph(value) {

    if (value === 'ORDER_ASC') {
		return {
			type: 'ORDER_ASC',
		};
	} else {
		return {
			type: 'ORDER_DESC',
		};
	}
}
// min-max peso
export function orderWeight(value) {

    if (value === 'ORDER_WEIGHTMAX') {
		return {
			type: 'ORDER_WEIGHTMAX',
		};
	} else {
		return {
			type: 'ORDER_WEIGHTMIN',
		};
	}
}

// temperamentos
export function tempFilter(payload){
    return{
    type: 'TEMP_FILTER',
    payload: payload,
    }
}
// creado en bd o api?
export function getCreateBreedsFromDb(value) {
	if (value === 'DB') {
		return {
			type: 'DB',
		};
	} else if (value === 'API'){
		return {
			type: 'API',
		};
	}else if (value === 'ALL') {
		return {
            type: 'ALL'
        }
	}
}