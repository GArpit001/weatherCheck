import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { counterContext } from '../context/context'
import md5 from "md5"
// import bcrypt from "bcrypt";


// console.log(md5('message'))
const LogIn = (props) => {


    const logins = useContext(counterContext)
    const user = useContext(counterContext)

    // const [isloader , setLoader] = useState(false)

    let history = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },

    } = useForm()

    const deley = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, d * 1000)
        })
    }



    const onSubmit = async (data) => {

        await deley(2)

        console.log(data)
        // console.log(user.userName)




        // const sub = await fetch("http://localhost:1200/demo", {
            const sub = await fetch("https://backendserver-uv8f.onrender.com/demo", {
            method: "GET"
        })

        let result = await sub.json()
        console.log(result);




        let findData = result.filter((val) => {

        //     // const match = await bcrypt.compare(data.password, val.password);

        //     // if(match) {
        //     //     //login
        //     //     return val.email === data.email && val.password === data.password
        //     // }
         

            return val.email === data.email && val.password === md5(data.password)
        })

        // // console.log(findData)

    

        if (findData.length === 1) {
            // props.setLogIn(true)
            logins.setisLogin(true)
            user.setUserName(findData[0])
            // console.log(user.userName)
            // console.log(user.userName.email)
            history("/data")
        } else {
            alert("Your credentials are invalid.")
        }



     


    

       







    }


    // const getUser = async (data) => {


    // let logIndata = data
    // console.log(logIndata)

    // let finalData = result.filter((val) => {
    //     // if(val.email === logIndata.email){
    //     //     alert("Successfully LogIn.")
    //     // }

    //     // return val.email === logIndata.email ? true : false

    //     if (val.email === logIndata.email && val.password === logIndata.password) {
    //         // console.log("LogIn")
    //         return true
    //     } else {
    //         // console.log("Worng")
    //         return false
    //     }

    // })

    // console.log(finalData)
    // if (finalData.length === 1) {
    //     porps.setisLogin(true)
    //     // alert(porps.isLogin)
    //     // alert("Successfully Login")

    //     setTimeout(()=>{

    //         history("/data")
    //     },3000)





    // }
    // else {
    //     // alert("Wrong Detail")
    // }
    // }



    return (
        <>

            <div className='main'>

                {isSubmitting && <div className='loading'>Loading....</div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 style={{ margin: "0px 0px 10px 0px" }}>LogIn</h1>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: { value: true, message: "email should be must..." }
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
                                required: { value: true, message: "password should be must..." }
                            })}
                        />
                        {errors.password && (
                            <div className="error">{errors.password.message}</div>
                        )}
                    </div>

                    <button type="submit" className="btn">Submit</button>



                </form>
            </div>

        </>

    )
}

export default LogIn