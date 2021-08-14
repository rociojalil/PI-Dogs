import React from 'react';
import { Link } from 'react-router-dom';
import  styles from './Landing.module.css';
import LazyLoad from 'react-lazyload';


function Landing() {
    return (
        <LazyLoad>
        <div className={styles.body}>
             <div className={styles.title}>
                <h1>Welcome to Dogs App!</h1>

                     <p className={styles.texto}>
                     ¿Looking for a new buddy? <br></br> 
                    </p>

                    <p className={styles.parra}>
                        <i>Sparkly! Then you are on the right page!</i> <br></br> <br />  
                    Here you will find all the different dog breeds to be found along <br></br>
                    with their characteristics, and you can even <b>create your own breed!</b> <br></br> 
                    That is, you can filter by temperament, height, weight <br></br>
                    <i>to find your ideal dog!</i> <br></br>
                    Although purebred dogs are very cute, do not forget <br></br>
                    that there are also a lot of <i>stray dogs</i><br></br>
                    with a lot of love to give that are also looking for a home! <br></br><br></br>
                    <b>All dogs are beautiful! Let's start!</b><br></br><br />
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
