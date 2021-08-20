// código en el que no me muestra imagenes en detalle de cada perro pero si los temperamentos al crearse el nuevo dog



// import axios from 'axios';
import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import {  getById } from '../actions/actions'
import Nav from './Nav'
import Footer from './Footer'
import styles from './DogDetail.module.css'
import LazyLoad from 'react-lazyload'

function DogDetail({ match }) {


    const { id } = match.params
    console.log("12", id)


    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getById(id))
    }, [])

    const breed = useSelector(state => state.breedsDetail)


    if (typeof breed?.id === 'string') {
        return (
            <div className={styles.main}>
                <div>
                    <Nav />
                </div>
                <br />
                <br />
                <br />
    
                <LazyLoad>
                <div className={styles.dogDetail}>
                    <br />
                    <p className={styles.dogName}><br />{breed?.name}</p>
    
                    <br />
                   

                    <img src="https://phantom-marca.unidadeditorial.es/252acdd64f48851f815c16049a789f23/resize/1320/f/jpg/assets/multimedia/imagenes/2021/04/19/16188479459744.jpg" alt="Not Found" width="550px" height="300px" />

                    <br />
                    

                    <p className={styles.dogTemp}>Temperament:</p>
            
                    {breed?.temperaments.map(t=> {
                        return (
                            <p className={styles.tempBD}>{t.name}</p>
                        )
                    })}

                    <br />

                    <p className={styles.dogWeight}>Peso: <br /> {breed?.weight} Kg.</p>
    
                    <br />
    
                    <p className={styles.dogHeight}>Altura: <br />{breed?.height} cm.</p>
    
                    <br />
    
                    <p className={styles.dogLife}>Años de vida: <br /> {breed?.life_span}</p>
    
                </div>
                </LazyLoad>
                <Footer/>
            </div>
    
        )
    } else {

        return (
            <div className={styles.main}>
                <div>
                    <Nav />
                </div>
                <br />
                <br />
                <br />
    
                <LazyLoad>
                <div className={styles.dogDetail}>
                    <br />
                    <p className={styles.dogName}><br />{breed?.name}</p>
    
                    <br />
                    <br />
    
                    {(breed?.id === 15 || breed?.id === 125 || breed?.id === 212) ? 
                        <img src={'https://cdn2.thedogapi.com/images/' + breed?.reference_image_id + '.png'} alt="Not Found" className={styles.dogImage} />
                     : 
                        <img src={'https://cdn2.thedogapi.com/images/' + breed?.reference_image_id + '.jpg'} alt="Not Found" className={styles.dogImage} />
                    }
    
                    <br />
                    <br />
    
                    <p className={styles.dogTemp}>Temperament: <br /> {breed?.temperament}</p>
    
                    <br />
    
                    <p className={styles.dogWeight}>Peso: <br /> {breed?.weight.metric} Kg.</p>
    
                    <br />
    
                    <p className={styles.dogHeight}>Altura: <br />{breed?.height.metric} cm.</p>
    
                    <br />
    
                    <p className={styles.dogLife}>Años de vida: <br /> {breed?.life_span}</p>
    
                </div>
                </LazyLoad>
                <Footer/>
            </div>
    
        )
    }

    
}

export default DogDetail;

// código en el que me funciona la imagen a mostrar, mapea temperamentos y me los trae pero no se crea en base de datos

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBreeds } from "../actions/actions";
// import styles from "./DogDetail.module.css";
// import Nav from './Nav'
// import Footer from './Footer'

// function DogDetail({ match }) {
//   const { id } = match.params;

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getBreeds());
//   }, []);

//   const dogs = useSelector((state) => state.breeds);

//   let detail = dogs.filter(
//     (element) => element.id === Number(id) || element.id === id
//   );


//   const url = "https://i.pinimg.com/564x/61/7e/63/617e63bea91121a61722cef2ebf96e49.jpg";


//   if(!detail[0]){
//       return(
//       <div className={styles.body}>
//         <div className={styles.Card}>
//            <h1>Please wait!</h1>
//         </div>  
//       </div>
//       )
//   }
//   if(detail[0].id.length > 5){
//   detail[0].image = { url };
//     detail[0].temperament = "";
//     for (let i = 0; i < detail[0].temperaments.length; i++) {
//       detail[0].temperament += detail[0].temperaments[i].name.toString() + ", ";
//     }}

 
//     return (
//         <div className={styles.main}>
//         <div>
//             <Nav />
//         </div>
//         <br />
//         <br />
//         <br />
//       <div className={styles.main}>
//         <div className={styles.dogDetail}>
//           <h3 className={styles.dogName}> {detail[0].name} </h3>
//           <div>
//             <img className={styles.img} src={detail[0].image.url} />
//             <ul className={styles.dogTemp}>
//             <p>Temperaments: {detail[0].temperament}</p>
          
//             <p>Life Span: {detail[0].life_span}</p>
//             {detail[0].weight.metric ? <p>Weight: {detail[0].weight.metric}</p>:<p>Weight: {detail[0].weight}</p>}
//             {detail[0].height.metric ? <p>Height: {detail[0].height.metric}</p>:<p>Height: {detail[0].height}</p>}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//       </div>
//     );
// }

// export default DogDetail;