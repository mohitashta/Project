import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUp from "../../../src/Images/signup.png";


const Create = () => {

    const [getData, setGetData] = useState({
        email: "",
        password: ""
    });
    const [getvalue, setGetValue] = useState([]);
    const navigation = useNavigate();

    const handlerCreate = (e) => {
        const { name, value } = e.target;
        setGetData({ ...getData, [name]: value });
    }
    console.log("object", getData)
    const handlerSubmit = (e) => {
        e.preventDefault();
        setGetValue([...getvalue, getData]);

        axios.post(`https://servser2.vercel.app/user/signup`, {
            email: getData?.email,
            password: getData?.password,
        }).then(response => {
            console.log(response.data);
            alert("successfully Signed Up")
        }).catch(err => {
            console.log(err)
            navigation("/404");
        })
        setGetData(
            {
                email: "",
                password: ""
            }
        )
    }
    return (
        <>
            <section class="vh-100" style={{ backgroundColor: " #eee" }}>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center ">
                        <div class="col-lg-12 col-xl-11">
                            <div class="card text-black" style={{ borderRadius: "25px" }}>
                                <div class="card-body p-md-5">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form class="mx-1 mx-md-4" onSubmit={handlerSubmit}>
                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="email" name="email" value={getData.email} onChange={handlerCreate} class="form-control" />
                                                        <label class="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center mb-4">
                                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div class="form-outline flex-fill mb-0">
                                                        <input type="password" name="password" value={getData.password} onChange={handlerCreate} class="form-control" />
                                                        <label class="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src={SignUp}
                                                class="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Create
