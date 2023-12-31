import React from "react";

function Footer() {
  return (
    <div>
      <footer class="sticky bottom=0 bg-white rounded-lg shadow dark:bg-black mt-4 bottom-0 w-full">
        <div class=" max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                RiPPLE.<span style={{ color: "orange" }}>ai</span>
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/about" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="/privacy" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/licensing" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="/contact" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              RiPPLE.<span style={{ color: "orange" }}>ai</span>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
