
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postDog, getTemp } from '../actions/actions';
import axios from 'axios';
import styles from './CreateBreed.module.css'
import Nav from './Nav'
import Footer from './Footer'
import {Link, useHistory} from 'react-router-dom';

function validateForm(input) {
    let errors = {};
    if (!input.name) {
        errors.name = "You must type a name";
    } else {
        errors.name = "";
    }
    if (!input.weight) {
        errors.weight = "Type a valid weight range";
    } else if (!/\d{1,2} - \d{1,2}/g.test(input.weight)) {
        errors.weight =
            "Weight must have min-max values. Example: '10-50'";
    } else {
        errors.weight = "";
    }

    if (!input.height) {
        errors.height = "Type a valid height range";
    } else if (!/\d{1,2}-\d{1,2}/g.test(input.height)) {
        errors.height =
            "Height must have min-max values. Example: '10-50'";
    } else {
        errors.height = "";
    }
    if (!input.age) {
        errors.age = "Type a valid life span";
    } else if (!/\d{1,2}-\d{1,2}/g.test(input.age)) {
        errors.age =
            "Life span must have min-max values. Example: '1-20'";
    } else {
        errors.age = "";
    }
    return errors;
};


function CreateBreed(props) {

    const dispatch = useDispatch();
    // me traigo los temperamentos del estado temps
    const temperaments = useSelector(state => state.temps)
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const [touched, setTouched] = useState({});

// acá para guardarme datos del form - un objeto con todo 
    const [input, setInput] = useState({
        name: '',
        height: '',
        life_span: '',
        weight: '',
        temperament: [],    //array vacío para crear más de uno
        image:''
    })

    // const dispatch = useDispatch();
    // despachar para renderizar
    useEffect(() => {

        dispatch(getTemp())

    }, [])

// cada vez que cambian los inputs de todos los anteriores voy guardando lo que va escribiendo en mi estado input
    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(
            validateForm({
                ...input,
                [e.target.name]: e.target.value,
            })
            );
            console.log(input)
    }
    // on focus para q aparezcan los mensajes de como debe ser los input
    function onFocus(ev) {
        setTouched({
            ...touched,
            [ev.target.name]: true,
        });
    }
    // acá enviar todos mis datos al back! crear personaje finalmente
    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        if (!errors.name && !errors.weight && !errors.height && !errors.life_span) {
        dispatch(postDog(input)) }
        alert("Your breed has been created successfully")
        setInput({
            name: '',
            height: '',
            life_span: '',
            weight: '',
            temperament: [],
            image: ''
        })
        history.push('/home')
    }








    //     if (!errors.name && !errors.weight && !errors.height && !errors.life_span) {
    //         axios.post('http://localhost:3001/dog', input, 
    //             {
    //                 method: 'POST',
    //                 headers: {"Content-Type": "application/json"},
    //                 body: JSON.stringify(input),
    //             })
    //         setInput({
    //             name: '',
    //             height: '',
    //             weight: '',
    //             life_span: '',
    //             temperament: []
    //         })
            
    //         alert("Your breed has been created successfully")
    //         history.push('/home')
    //     } else {
    //         alert('Something went wrong. Please try again.')
    //     }
    // }





    // mensajitos de alerta con respecto a cuantos seleccionar + setInput para pasar muchos
    function handleSelect(e) {
        if (input.temperament.includes(parseInt(e.target.value))) {
            alert('You already selected this temperament. Try again.')
        } else if (input.temperament.length >= 3) {
            alert('You can select up to 3 temperaments.')
        } else {
            // traeme lo que ya habia y concatenale el target value donde va a meter en un [] todo lo que yo agregue
            setInput((prev) => ({
                 ...prev, 
                 temperament: [...prev.temperament, parseInt(e.target.value)] }))
        }
    }

    function deleteTemp(e, t) {
        setInput((prev) => ({ ...prev, temperament: prev.temperament.filter(temp => temp !== parseInt(t)) }))
    }


    function getNames(arr) {
        let names = [];
        temperaments?.forEach((t) => {
            arr.forEach((id) => {
                if (parseInt(id) === t.id) {
                    names.push(t.name)
                }
            })

        })
        return names;
    }

    return (
        <div className={styles.main}>
                {/* así no hago botón para volver la barra de navegación se muestra siempre y así podes volver */}
                <Nav />
           
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className={styles.form}>
                <form onSubmit={e => {handleSubmit(e)}}>

                    <div className={styles.cards}>
                        <div>
                            <p className={styles.title}>How would you like your dog to be?</p>
                            <p className={styles.inputNames}>Name</p>

                            <input
                                type="text"
                                name="name"
                                placeholder="Type..."
                                // a todos los input le pongo handleInput para que vaya al estado
                                onChange={handleInput}
                                required='required'
                                onFocus={onFocus}
                                value={input.name}

                            ></input>
                            <br />
                            {errors.name && touched.name && (
                                <p className={styles.errorMsg}>{errors.name}</p>
                            )}
                        </div>
                        <br />

                        <div >
                            <p className={styles.inputNames}>Weight</p>
                            <input
                                type="text"
                                name="weight"
                                placeholder="Type..."
                                onChange={handleInput}
                                required='required'
                                onFocus={onFocus}
                                value={input.weight}

                            ></input>
                            {errors.weight && touched.weight && (
                                <p className={styles.errorMsg}>{errors.weight}</p>
                            )}
                        </div>
                        <br />

                        <div >
                            <p className={styles.inputNames}>Height</p>
                            <input
                                type="text"
                                name="height"
                                placeholder="Type..."
                                onChange={handleInput}
                                required='required'
                                onFocus={onFocus}
                                value={input.height}

                            ></input>
                            {errors.height && touched.height && (
                                <p className={styles.errorMsg}>{errors.height}</p>
                            )}
                        </div>
                        <br />
                        <div >
                            <p className={styles.inputNames}>Life Span</p>
                            <input
                                type="text"
                                name="life_span"
                                placeholder="Type..."
                                onChange={handleInput}
                                required='required'
                                onFocus={onFocus}
                                value={input.age}

                            ></input>
                            {errors.age && touched.age && (
                                <p className={styles.errorMsg}>{errors.age}</p>
                            )}
                        </div>

                        <br />

                        <div >
                            <p className={styles.inputNames}>Temperaments</p>
                            {/* a medida que selecciona el usuario ve lo que selecciona */}
                            <select name="temperaments" onChange={(e) => handleSelect(e)} required value={input.temperament} className={styles.dropdown}>
                                <option>
                                    Select
                                </option>
                                {/* .id .name? */}
                                {temperaments?.map((e) => (
                                    <option value={e.id} key={e.id}>{e.name}</option>)
                                )}
                            </select>
                        </div>
                        <div className={styles.tempContainer}>
                            {
                                input.temperament.map(t => (
                                    <p id={t} className={styles.temp}>
                                        {getNames([t])}
                                        <button onClick={(e) => deleteTemp(e, t)} className={styles.closeBtn}>x</button>
                                    </p>
                                ))
                            }
                        </div>
                        <br />
                        <br />
                        <button type='submit' className={styles.btnSubmit}>
                            Create breed
                        </button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default CreateBreed