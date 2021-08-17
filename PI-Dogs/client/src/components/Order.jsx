import React, { useEffect, useState } from 'react'
import {filter, getHeavy, getLight, getTemp, getZA, getSource, getAZ } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux'
import styles from './Order.module.css'

function Order() {

    const [selectedTemp, setSelectedTemp] = useState('')
    const [tempToFilterBy, setTempToFilterBy] = useState([])

    const dispatch = useDispatch()


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
                } else {
                    console.log('nada')
                }

        }})

        dispatch(filter(filtered))
    }

    function handleSelect(e){
        dispatch(getSource(e.target.value))
    }


    const temp = useSelector(state => state.temps)
    const breed = useSelector(state => state.breeds)

//     <form className="boton">
//     <select className="boton" onChange={handleChange} value='' name="by">
//         <option value="" disabled selected>Order by </option>
//         <option value='ORDER_ASC'>Alphabet - A-Z</option>
//         <option value='ORDER_DESC'>Alphabet - Z-A</option>
//     </select>
// </form>

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

            {/* EL MAP PARA NO ESCRIBIR CADA UNO DE LOS TEMPERAMENTOS */}
            <div  className={styles.temperaments}>
                <form onSubmit={handleSubmit} >
                    <label>Filter by temps </label><br />
                    <select onChange={handleChange} name="temperaments" value={selectedTemp} className={styles.dropdown}>
                        {temp?.map(t => {
                            return (
                                <option value={t.name}>{t.name}</option>
                            )
                        })}
                    </select>
                    
                    <button type="submit" className={styles.btn}> Filter</button>
                </form>
            </div>

            

           <div className={styles.source}>
               <form>
                   <label>Source</label>
                   <br />
                   <select onChange={handleSelect} className={styles.dropdown}>
                       <option value="''">Select</option>
                       <option value="DB">DB</option>
                       <option value="API">API</option>
                       <option value="ALL">ALL</option>
                       {/* acá esta lo de value donde es importante saber q valo9r tienen esas acciones para q se ejecute la logica */}
                   </select>
               </form>
           </div>

        </div>
    )
}

export default Order;
