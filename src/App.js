import React from "react";
import { useFormik } from 'formik';
function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert('Login Success')
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) errors.password = "Field required";
      return errors;
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'center'
      }}
    >
      <form onSubmit={formik.handleSubmit}
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: '#25edbe',
          padding: '10px',
          display: "grid",
          gridTemplateRows: '1fr 1fr 1fr 1fr',
          justifyItems: 'center',
          alignItems: 'center',
          boxShadow: '10px 10px 10px #CCCCCC'
        }}
      >
        <h1>Log In</h1>
        <div>
          <div>Email</div>
          <input type='text' name='email' id='emailField' onChange={formik.handleChange}
            style={{
              width: '200px',
              height: '20px'
            }}
          />
          {formik.errors.email ? <div id='emailError' style={{ color: 'red' }}>{formik.errors.email}</div> : null}
        </div>
        <div>
          <div>Password</div>
          <input type='password' name='password' id='pswField' onChange={formik.handleChange}
            style={{
              width: '200px',
              height: '20px'
            }}
          />
          {formik.errors.password ? <div id='pswError' style={{ color: 'red' }}>{formik.errors.password}</div> : null}
        </div>
        <button type='submit' id='submitBtn'
          style={{
            width: '100px',
            height: '30px',
            backgroundColor: '#207df7',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >Log In</button>
      </form>
    </div>
  );
}

export default App;
