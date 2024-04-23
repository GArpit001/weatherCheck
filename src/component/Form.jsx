import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Form = () => {

  let history = useNavigate()


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm();


  const onSubmit = async (data) => {
    // console.log(data.Name);
    setTimeout(()=>{

      alert("Your Accout has been Successfully Created")
    },2000)

    setTimeout(() => {
      history("/login")
    }, 3000)


    const sub = await fetch("https://backendserver-uv8f.onrender.com/", {
      method: "POST", headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })

    let res = await sub.text()
    console.log(data, res);

  }







  return (

    <div className="main">
      <form onSubmit={handleSubmit(onSubmit)} >
        <h1 style={{ margin: "0px 0px 10px 0px" }}>Create a Account</h1>
        <div className="form-control">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            {...register("userName", {
              required: { value: true, message: "UserName should be must..." },
              minLength: {
                value: 4,
                message: "Min length is of userName is 5 character...",
              },
            })}
          />
          {errors.userName && (
            <div className="error">{errors.userName.message}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            {...register("Name", {
              required: { value: true, message: "Name should be must..." },
              minLength: {
                value: 2,
                message: "Min length is of Name is 2 character...",
              },
            })}
          />
          {errors.Name && (
            <div className="error">{errors.Name.message}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "email should be must..." },
              // pattern:{value : /^([a-zA-Z0-9_\-\.] +)@([a-zA-Z0-9_\-\.] +)\./ , message : "Invalid Email"}
            })}
          />
          {errors.email && (
            <div className="error">{errors.email.message}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Password has be must..." },
            })}
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>

  );
};

export default Form;
