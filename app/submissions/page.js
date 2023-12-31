'use client'
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ParticlesContainer from "../components/particles";

function Submissions() {
  return (
    <>
      <ParticlesContainer />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-grow justify-center items-center bg-black-50 dark:bg-black-50 mt-32">
          <form className="bg-white dark:bg-zinc-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-white text-sm font-medium mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-zinc-600 dark:bg-zinc-600 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Name@email.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="topic"
                className="block text-gray-700 dark:text-white text-sm font-medium mb-2"
              >
                Your topic
              </label>
              <input
                type="topic"
                id="topic"
                className="shadow-sm bg-zinc-600 dark:zinc-600 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="The subject of your story"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="prompt"
                className="block text-gray-700 dark:text-white text-sm font-medium mb-2"
              >
                Your prompt
              </label>
              <input
                type="prompt"
                id="prompt"
                className="shadow-sm h-20 bg-zinc-600 dark:zinc-600 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="The prompt given to A.I."
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 w-full"
            >
              Register New Submission
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Submissions;
