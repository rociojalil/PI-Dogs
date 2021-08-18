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

    
    function handleChange(e) {
        setSelectedTemp(e.target.value)
    }
    // Filtro Temperamento
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
                } else {
                    console.log('nada')
                }
                
            }})
            
            dispatch(filter(filtered))
        }
        function handleSubmit(e) {
            e.preventDefault();
            setTempToFilterBy([...tempToFilterBy, selectedTemp]);
            handleClick()
        }
        
        // Filtro BD-API
        function handleSelect(e){
            dispatch(getSource(e.target.value))
        }

    const temp = useSelector(state => state.temps)
    const breed = useSelector(state => state.breeds)

  
    return (
        <div  className={styles.mainDiv}>
            <div className={styles.alphabetical}>
            <form className={styles.btn}>
                <select className={styles.btn} onChange={orderAlph} value='' name="by">
                    <option value="" disabled selected>Order by </option>
                    <option value='getAZ'onClick={(e) => getAZ(e)}>Alphabet - A-Z</option>
                    <option value='getZA'onClick={(e) => getZA(e)}>Alphabet - Z-A</option>
                </select>
            </form>
            <form className={styles.btn}>
                <select className={styles.btn} onChange={orderWeight} value='' name="by">
                    <option value="" disabled selected>Order by Weight</option>
                    <option value='getLight'onClick={(e) => getLight(e)}>Min - Max</option>
                    <option value='getHeavy'onClick={(e) => getHeavy(e)}>Max - Min</option>
                </select>
            </form>

            </div>
            <form className={styles.btn} onSubmit={handleSubmit}>
                <select className={styles.btn} onChange={handleChange} name="temperaments" value={selectedTemp}>
                    <option> Filter by Temp</option>
                    {temp?.map((t) => (
                        <option  value={t.name} key={t.id}>{t.name}
                        </option>
                    ))}
                    
                </select>
            </form>
            
            <form className={styles.btn} >
                <select className={styles.btn} onChange={handleSelect}> 
                    <option value="" disabled selected>Select source</option>
                    <option value='DB'>Created</option>
					<option value='API'>API</option>
                    <option value="ALL">ALL</option>	
                </select>
               
            </form>
          </div>
    )
}

export default Order;
