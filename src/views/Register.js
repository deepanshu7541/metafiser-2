import React, { useState } from 'react';
import UserServices from '../services/UserServices';
import styles from './register.module.css'; // Import module.css file
// import UserServices from '../services/UserServices';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    full_name : "",
    phone_no : "",
    email : "",
    profile : "",
    user_name : "",
    password : "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or perform validation
    console.log(employee); // For demonstration purposes
  };

  // const saveUser = (e) => {
  //   e.preventDefault();
  //   UserServices.saveUser(employee).then((response) => {
  //     console.log(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  return (
    <div className={styles.container}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={employee.full_name}
            onChange={(e) => handleChange(e)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone_no">Phone number</label>
          <input
            type="text"
            id="phone_no"
            name="phone_no"
            value={employee.phone_no}
            onChange={(e) => handleChange(e)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="user_name">Username</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={employee.user_name}
            onChange={(e) => handleChange(e)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={employee.password}
            onChange={(e) => handleChange(e)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className={styles.input}
            required
          />
        </div>
        <button onClick={saveEmployee} type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddEmployee;