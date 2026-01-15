import React from 'react';
import styles from './Login_.module.css';
import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <div className={styles.formContainer}>
            <p className={styles.title}>Login</p>

            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.username} htmlFor="username">Username</label>
                    <input  type="text" id="username" placeholder='Enter your name...' />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.username} htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='Enter your  password' />
                    <div className={styles.forgot}>
                        <a href="#">Forgot Password ?</a>
                    </div>
                </div>

                <button className={styles.sign}>Login</button>
            </form>

            <div className={styles.socialMessage}>
                <div className={styles.line}></div>
                <p className={styles.message}>Login with social accounts</p>
                <div className={styles.line}></div>
            </div>

            <div className={styles.socialIcons}>
                <button className={styles.icon}>G</button>
                <button className={styles.icon}>T</button>
                <button className={styles.icon}>GH</button>
            </div>

            <p className={styles.signup}>
                Don't have an account?
                <Link to={'/React_to-do/SignUP/'}><a> Signup</a></Link>
            </p>

            <p className={styles.home}>
                <Link to={'/React_to-do/'}><a className={styles.home_para}> ← Back to Home</a>
                </Link>
            </p>
        </div>
    );
};

export default Form;
