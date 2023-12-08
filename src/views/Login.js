import React, { useRef, useEffect, useState } from 'react';
import anime from 'animejs';
import styles from './login.module.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Login() {
  const [user, setUser] = useState({
    username : "",
    password : "",
  });

  const {username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.username]: e.target.value });
    console.log(user);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/user", user);
    // navigate("/");
    // <Link to="/"></Link>
  };

  const pathRef = useRef(null);

  useEffect(() => {
    let currentAnimation = null;

    const handleFocus = (offset, arrayValue) => {
      if (currentAnimation) currentAnimation.pause();
      currentAnimation = anime({
        targets: pathRef.current,
        strokeDashoffset: {
          value: offset,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: arrayValue,
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    };

    document.getElementById('username').addEventListener('focus', () => handleFocus(0, '240 1386'));
    document.getElementById('password').addEventListener('focus', () => handleFocus(-336, '240 1386'));
    document.getElementById('submit').addEventListener('focus', () => handleFocus(-730, '530 1386'));

    // return () => {
    //   // Cleanup event listeners when the component is unmounted
    //   document.getElementById('username').removeEventListener('focus', handleFocus);
    //   document.getElementById('password').removeEventListener('focus', handleFocus);
    //   document.getElementById('submit').removeEventListener('focus', handleFocus);
    // };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.login}>Login</div>
          <div className={styles.eula}>
            Put in your details to get in to Metafiser.
          </div>
        </div>
        <div className={styles.right}>
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop style={{ stopColor: '#ff00ff' }} offset="0" id="stop876" />
                <stop style={{ stopColor: '#ff0000' }} offset="1" id="stop878" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
            />
          </svg>
          <form onSubmit={(e) => onsubmit(e)}>
            <div className={styles.form}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
              <input type="submit" id="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;