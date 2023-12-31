"use client";
import Navbar from "../components/navbar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";
import AuthService from "../../services/auth.service";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import Footer from "../components/footer";
import ParticlesContainer from "../components/particles";

function Login() {
  const router = useRouter();
  const { state, dispatch } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //------------------------------------------------------------------------------------------------------------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    const username = email;
    AuthService.login(username, password)
      .then(async (resp) => {
        if (resp != undefined) {
          if (resp.access_token) {
            //let data = jwtDecode(resp.access_token);
            let data = jwtDecode(resp.access_token, { header: true });
            await dispatch({
              type: "SET_USER",
              payload: data,
            });
            console.log("Login success");
            console.log(resp)
            router.push("/");
          } else {
            console.log("Login failed");
            dispatch({ type: "LOGOUT_USER" });
          }
        }
      })
      .catch((error) => {
        // Handle the error here
        console.error("An error occurred:", error);
        // Optionally, dispatch a logout or error action
        dispatch({ type: "LOGOUT_USER" });
      })
      .finally(() => {
        // Code to run regardless of success or failure
        console.log("Login request completed");
      });
  };
  return (
    <>
    <ParticlesContainer />
      <Navbar />
      <section class="bg-black-50 dark:bg-black-900 mt-20">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div class="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-800">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleLogin}
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg--50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-black-500"
                    placeholder="name@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/register"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
