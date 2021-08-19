import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBreeds } from "../actions/actions";
import styles from "./dogsDetail.module.css";
import Nav from './Nav'
import Footer from './Footer'

function DogDetail({ match }) {
  const { id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  const dogs = useSelector((state) => state.breeds);

  let detail = dogs.filter(
    (element) => element.id === Number(id) || element.id === id
  );


  const url = "https://i.pinimg.com/564x/61/7e/63/617e63bea91121a61722cef2ebf96e49.jpg";


  if(!detail[0]){
      return(
      <div className={styles.body}>
        <div className={styles.Card}>
           <h1>Please wait!</h1>
        </div>  
      </div>
      )
  }
  if(detail[0].id.length > 5){
  detail[0].image = { url };
    detail[0].temperament = "";
    for (let i = 0; i < detail[0].temperaments.length; i++) {
      detail[0].temperament += detail[0].temperaments[i].name.toString() + ", ";
    }}

 
    return (
        <div className={styles.main}>
        <div>
            <Nav />
        </div>
        <br />
        <br />
        <br />
      <div className={styles.main}>
        <div className={styles.dogDetail}>
          <h3 className={styles.dogName}> {detail[0].name} </h3>
          <div>
            <img className={styles.img} src={detail[0].image.url} />
            <ul className={styles.dogTemp}>
            <p>Temperaments: {detail[0].temperament}</p>
          
            <p>Life Span: {detail[0].life_span}</p>
            {detail[0].weight.metric ? <p>Weight: {detail[0].weight.metric}</p>:<p>Weight: {detail[0].weight}</p>}
            {detail[0].height.metric ? <p>Height: {detail[0].height.metric}</p>:<p>Height: {detail[0].height}</p>}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
}

export default DogDetail;