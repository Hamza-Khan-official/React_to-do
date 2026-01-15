import React from 'react';
import styles from './SignUP.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {

    let navigate = useNavigate();

    return (
        <div className={styles.formContainer}>
            <p className={styles.title}>SignUP</p>

            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input id="username" name="username" type="text" placeholder='Enter a name..' />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="text"  placeholder='000 0000 000'  />

                    <label className={styles.label} htmlFor="email">Email</label>
                    <input id="email" name="email" type="email"  placeholder='abc@gmail.com' />

                    <label className={styles.label} htmlFor="location">Location</label>
                    <input type="text"  placeholder='street abc...'  />
                </div>

                <button
                    onClick={() => navigate('/React_to-do/login')}
                    // onClick={()=>navigate('login/')} 
                    style={{ marginTop: '6%' }} className={styles.sign}>
                    Submit
                </button>
            </form>

            <div className={styles.socialMessage}>
                <div className={styles.line}></div>
                <p className={styles.message}>Entre Details to view Virtual Tour</p>
                <div className={styles.line}></div>
            </div>

            <p className={styles.home}>
                <Link to={'/React_to-do/'}><a className={styles.home_para}> ← Back to Home</a>
                </Link>
            </p>
        </div>
    );
};

export default Form;
