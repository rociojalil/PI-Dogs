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

                        <p className={styles.texto}> </p>
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
