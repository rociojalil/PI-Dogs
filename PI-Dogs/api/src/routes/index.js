require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { Dog, Temperament, dog_temperament } = require("../db");
const { Sequelize } = require("sequelize");
const { API_URL, API_URL2, API_KEY } = process.env;
const { v4: uuidv4 } = require("uuid");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();


//post funciona pero en postman no me lo muestra, me muestra objeto vacío {} pero en mi bd si me lo crea
router.post("/dog", async (req, res, next) => {
	const {name, weight, height, life_span, temperament } = req.body
	try {
			await Dog.create({
			id:uuidv4(),
			name: name,
			weight,
			height,
			life_span,
			image: 'https://bit.ly/36J26Nu',
			db: true
		}).then((raza) => res.send(raza.addTemperament(temperament)));
			// const id = uuidv4();
			// newDog = await Dog.create({id, name, height, weight, life_span})
			// await newDog.setTemperaments(temperaments)
		}
		catch (error) {
			next(error)
		}
	})
	// primero me traigo todo por req.body
	// despues creo mi dog en mi bd pero el temperament a parte lo agrego con ADD o SET (metodos del belongTomany)
	// tambien podria ser un temperament.findAll donde le digo que where: temperament o sea el q me llega x body y ahi le hago el add
	// con un res.send('perro creado con exito!')


// GET TODAS + búsqueda por query
    router.get("/dogs", async (req, res, next) => {
	const { q } = req.query;

	if (!q) {
		
	  const infoDb = Dog.findAll();
	  const infoApi = await axios.get(`${API_URL}?apikey=${API_KEY}`);
	  
	  Promise.all([infoDb, infoApi])
		.then((results) => {
		  const [dataDb, dataApi] = results;
		  const response = dataDb.concat(dataApi.data);
		  res.send(response);
		})
		.catch((error) => next(error));
  
	} else {
	  const infoDb = Dog.findAll({
		where: { name: q }
	  });
	  const infoApi = await axios.get(`${API_URL2}?q=${q}&apikey=${API_KEY}`);
  
	  Promise.all([infoDb, infoApi])
		.then((results) => {
		  const [dataDb, dataApi] = results;
		  const response = dataDb.concat(dataApi.data);
		  res.send(response);
		})
		.catch((error) => next(error));
    }
	});

// ver detalle buscandolo x id + temperamento
router.get('/dogs/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        if (id.length > 5) {
			
        const dogDb = await Dog.findByPk(
			id, {
            include: {
            model:Temperament 
            }
        });
        
        return res.json(dogDb);
        } else {
            const { data } = await axios.get(`${API_URL}/${id}?apikey=${API_KEY}`)
            const raza = {
                id: data.id,
                name: data.name,
                image: 'https://cdn2.thedogapi.com/images/' + data.reference_image_id + '.jpg',
                weight: data.weight.metric,
                height: data.height.metric,
                life_span: data.life_span,
                temperament: data.temperament,
    };
        res.send(raza)
} 
}
catch(error){
	next(error)
}
})

//GET TEMPERAMENT
// vamos a la api y me los traigo con un map + split + flat + sort + map.


router.get('/temperament', async (req, res, next) => {
	try {
		const dog = await axios.get(`${API_URL}?apikey=${API_KEY}`)

			const doggy = dog.data.map(i => {	// mapeo para traerme los temperamentos de api
				return i.temperament
			})
			const allJoin = doggy.map(e => { 	// de esos los separo con coma x split
				return e && e.split(', ')
			})
			const order = allJoin.flat().sort(); // flat concatena todos los [] en uno solo + sort para ordenarlos menor a mayor/alfabeticamente
	
			const dataArray = new Set(order); 	// almaceno todos estos "nuevos" valores
			let result = [...dataArray];
				// const filtrao = concat.filter((str, i) => {
				// return concat.indexOf(str) === i })
				// indexOf la primer letra q encuentre/matchea me lo trae. Devuelve indice del primer valor que encuentra
	
			const temp = result.map((c) => {
			return {
				name: c || 'Could not get name',
			}
		})
			const datos = await Temperament.bulkCreate(temp); // creo en la base de datos todos los temperamentos
			res.send(datos);

	}  catch (error) {
			next(error)
		}
	});



module.exports = router;
