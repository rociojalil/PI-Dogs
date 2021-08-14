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
                            Looking for a new buddy? <br></br>
                        Great! Dogs are an excellent company! <br></br>     
                     Although now you will know all the different breeds that there are and details of them, <br></br> do not forget that stray dogs also have a lot of love to give!
                        ALL DOGS ARE BEAUTIFUL! <br></br>
                        Let's get to know them click en startttttttt</p>
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
