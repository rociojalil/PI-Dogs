import React from 'react'
import { useDispatch } from 'react-redux'
import {  useState } from 'react'
import { getBreedsRace } from '../actions/actions';
import styles from './Buscador.module.css';

function Buscador() {
    const [busqueda, setBusqueda] = useState('');

    const handleChange = (b) => {
        setBusqueda(b)
    }

    // function buscar(busqueda) {
    //     getBreedsRace(busqueda)
    // }

    const dispatch = useDispatch()


   

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getBreedsRace(busqueda))
    }

    // const breed = useSelector((state) => state.breeds)


    return (
        <div className={styles.searchBox}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.searchBox}>
                    <input className={styles.input}
                        type='text'
                        // value={busqueda}
                        placeholder='Type...'
                        onChange={(e) => handleChange(e.target.value)}
                        />
                        <input className={styles.input}
                         type="submit" value= "Search" />
                         <div className={styles.icon}>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Buscador
