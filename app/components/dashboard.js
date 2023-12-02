import React from "react";
import Navbar from "./navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <section class="bg-inherit">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to RiPPLE.<span style={{ color: "orange" }}>ai</span>
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The story-generated adventure experience. Designed for the
              everyday reader and the casual gamer. Which one are you?
            </p>
            <a
              href="/stories"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Select Your Story
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/submissions"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-orange-500 dark:focus:ring-gray-800"
            >
              Suggest A Story
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/79/17/water-ripple-logo-design-template-vector-28617917.jpg"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
