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

// lógica dentro del get
// si no es por query la request: trae toda la info en base de datos + info de api y concateno y mando response
// si es por query distructuring en url y que me traiga la busqueda desde el otro endpoint de search
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
      // devuelve promesa le puedo aplicar .then
      .then((results) => {
        const [dataDb, dataApi] = results;
        const response = dataDb.concat(dataApi.data);
        res.send(response);
      })
      .catch((error) => next(error));
  }
});

router.get('/dogs/:id', async (req, res, next) => {
    const {id} = req.params
    // si la busqueda de perro tiene menos de 4 letras busca en la api
    if (id.length < 4) {
        await axios.get(`${API_URL}/${id}?apikey=${API_KEY}`)
        .then(dogs => res.send(dogs.data))
        .catch(error => next(error))
    } else {
        // si no aca busco en mi base de datos 
        Dog.findOne({
            where: {
                id: id
            },
            include: {
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })
    }
})

router.get('/temperament', async (req, res, next) => {try {
    const dog = await axios.get(`${API_URL}?apikey=${API_KEY}`)
    const doggy = dog.data.map(t => {
        return t.temperament
    })
    const otr = doggy.map(str => {
        return str && str.split(', ')
    })

    const concat = otr.flat()

    const filtrao = concat.filter((str, i) => {
        return concat.indexOf(str) === i
        // indexOf la primer letra q encuentre/matchea me lo trae. Devuelve indice del primer valor que encuentra
        // sort que ordena alfabeticamente y de menor a mayor 
    }).sort()
    // => {
        // if (a > b) return 1
        // if (a < b) return -1
        // return 0
    // })
    // asi funciona internamente un sort
    // 
    const temp = filtrao.map(c => {
        return {
            name: c || 'Could not get name'
        }
    })


    const datos = await Temperament.bulkCreate(temp)

    res.send(datos)

} catch (error) {
    next(error)
}

})

// ver tema post
router.post("/dog", async (req, res, next) => {
    let { name, height, age, weight, temperament } = req.body;
    try {
      await Dog.create({
        id: uuidv4(),
        name,
        height,
        age,
        weight,
      }).then((breed) => res.send(breed.addTemperament(temperament)));
    } catch (error) {
      next(error);
    }
  });

  post 


module.exports = router;
