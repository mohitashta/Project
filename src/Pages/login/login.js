import React, { useState } from 'react';
import sampleimage from "../../Images/Login.png"
import SignUp from "../signup/SignUp"
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src={sampleimage}
                class="img-fluid" alt="Sample image" />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fa-brands fa-facebook-f"></i>
                  </button>
                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fa-brands fa-instagram"></i>
                  </button>
                  <button type="button" class="btn btn-primary btn-floating mx-1">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input type="email" name='email' class="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                  <label class="form-label" for="form3Example3">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-3">
                  <input type="password" name="password" class="form-control form-control-lg"
                    placeholder="Enter password" />
                  <label class="form-label">Password</label>
                </div>

                <div class="d-flex justify-content-start align-items-center">
                  <a href="#!" class="text-body">Forgot password?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="button" class="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem ", paddingRight: "2.5rem" }}>Login</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                    <NavLink to="/signup">
                      <h6 className='text-danger'>Register</h6>
                    </NavLink>
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Login
