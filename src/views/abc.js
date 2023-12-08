import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserServices from '../services/UserServices';
import styles from './register.module.css';

const Register = () => {
  const [employee, setEmployee] = useState({
    full_name: '',
    phone_no: '',
    email: '',
    profile: '',
    user_name: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]:value});
    // const { name, value } = e.target;
    // setEmployee({ ...employee, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    UserServices.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        toast.success('Registration successful!');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Registration failed. Please try again.');
      });
  };

  return (
    <div className={styles.container}>
      <h1>Registration Form</h1>
      <form onSubmit={saveEmployee} className={styles.form}>
        {/* ... your form fields */}
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
