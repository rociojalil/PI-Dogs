import React, { useEffect, useState } from 'react'
import {filter, getHeavy, getLight, getTemp, getZA, getSource, getAZ } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux'
import styles from './Order.module.css'

function Order() {

    const [selectedTemp, setSelectedTemp] = useState('')
    const [tempToFilterBy, setTempToFilterBy] = useState([])

    const dispatch = useDispatch()

    // Filtro orden alfabético
    function orderAlph(e) {
        e.preventDefault();
        if(e.target.value === 'getAZ') {
            dispatch(getAZ())
        }
        else{
            dispatch(getZA())
        }
    }

    // function orderAsc(e) {
    //     e.preventDefault();
    //     dispatch(getAZ())
    // }

    // filtro Peso
    function orderWeight(e){
        e.preventDefault();
        if(e.target.value === 'getLight') {
            dispatch(getLight())
        }
        else{
            dispatch(getHeavy())
        }
    }

    useEffect(() => {
        dispatch(getTemp())
    }, [])

    // Filtro Temperament

    function handleSubmit(e) {
        e.preventDefault();
        setTempToFilterBy([...tempToFilterBy, selectedTemp]);
        handleClick()
    }

    function handleChange(e) {
        setSelectedTemp(e.target.value)
    }

    function handleClick() {
        let filtered = []
        breed?.forEach((b) => {
            if (b.id.length) {
                b.temperaments.map(t =>
                    t.name === selectedTemp ? filtered.push(b) : null
                )
            } else {
                if (b.temperament?.includes(selectedTemp)) {
                    filtered.push(b)
                } 
        }})

        dispatch(filter(filtered))
    }

        // Filtro BD-API
        function handleSelect(e){
            dispatch(getSource(e.target.value))
        }

    const temp = useSelector(state => state.temps)
    const breed = useSelector(state => state.breeds)

  
    return (
        <div className={styles.contenedor}>
            <form className={styles.conteiner}>
                <select className={styles.btn} onChange={orderAlph} value='' name="by">
                    <option value="" disabled selected>Order by Alphabet </option>
                    <option value='getAZ'onClick={(e) => getAZ(e)}>Alphabet - A-Z</option>
                    <option value='getZA'onClick={(e) => getZA(e)}>Alphabet - Z-A</option>
                </select>
            </form>
    
            <form className={styles.weight}>
                <select className={styles.btn} onChange={orderWeight} value='' name="by">
                    <option value="" disabled selected>Order by Weight</option>
                    <option value='getLight'onClick={(e) => getLight(e)}>Min - Max</option>
                    <option value='getHeavy'onClick={(e) => getHeavy(e)}>Max - Min</option>
                </select>
            </form>


        <div className={styles.temperaments}>
            <form className={styles.btn1} onSubmit={handleSubmit}>
                <select className={styles.btn1} onChange={handleChange} name="temperaments" value={selectedTemp} type='text'>
                    <option value="" disabled selected>Filter by Temp...</option>
                    {temp?.map(t => {
                        return (
                            <option  value={t.name}>{t.name}</option>
                        )
                        })}
                    
                </select>
                    <button type="submit" className={styles.btn1}> Search </button>
            </form>
            </div>

            <div className={styles.source}>
            <form>
                <select className={styles.btn2} onChange={handleSelect}> 
                    <option value="" disabled selected>Select source</option>
                    <option value='DB'>Created</option>
					<option value='API'>API</option>
                    <option value="ALL">ALL</option>	
                </select>
               
            </form>
            </div>
          </div>
    )
}

export default Order;
