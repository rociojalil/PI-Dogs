import React from 'react';
import { Link } from 'react-router-dom';
import  styles from './Landing.module.css';
import LazyLoad from 'react-lazyload';


function Landing() {
    return (
        <LazyLoad>
        <div className={styles.divMain}>

             <div className={styles.title}>
                <h1>Welcome to Dogs App!</h1>

                     <p className={styles.texto}>
                        ¿Looking for a new buddy? <br></br> 
                    </p>

                    <p className={styles.parra}>
                        Great! Then you are in the right place!
                         <br></br> <br /> </p> 
                         
                     <p className={styles.entrada}>
                        Friendly reminder: Do not forget that there are also a lot of stray dogs
                        <br></br>
                        with a lot of love to give that are also looking for a home! ❤
                         <br></br> <br></br>
                    <p className={styles.final}>
                        Now let's see Dogs! 
                        </p>
                    </p>
                        <Link to='/home' style={{ color: "black", textDecoration: "none" }}>
                            <div className={styles.main}>
                                <button className={styles.btn}>
                                         Start
                                </button>
                            </div>
                        </Link>
                </div>
            </div>
         </LazyLoad>
    )
}

export default Landing;

