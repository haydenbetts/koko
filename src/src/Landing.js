import React, { useState } from 'react';
import screen from "./koko_1.jpg";
import h4h from "./h4h.png";

const Landing = () => {
    const [email, setEmail] = useState('');
    return (
        <div class="bg-gray-100">
        <div class="relative overflow-hidden">

      
          <div class="relative pt-2 pb-16">
            <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
              <div class="text-center">
                <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl">
                The on-demand universal solution
                  <br/>
                  <span class="text-indigo-600">for your clinical communication needs</span>
                </h2>
                {/* <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Koko allows you 
                </p> */}
                <div class="flex flex-column justify-center">
                <div class="mt-12 sm:max-w-lg sm:mx-auto sm:text-center lg:text-center lg:mx-0">
                <p class="text-base font-medium text-gray-900">
                Sign up to get notified when it’s ready.
                </p>
                <form
                //   onSubmit={async () => {
                //     await new Promise((r) => setTimeout(r, 300));
                //     setShowSignUp(false);
                //   }}
                  action="https://azureedge.us7.list-manage.com/subscribe/post?u=756e70319105eee9be4b7ca0c&amp;id=e8bc33ca1b"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate mt-3"
                  target="_blank"
                  novalidate
                >
                  <div id="mc_embed_signup_scroll flex" style={{display: 'flex', flexDirection: 'row'}}>
                    <div class="mc-field-group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="EMAIL"
                        value={email} onChange={(e) => setEmail(e.target.value)} style={{color: ' rgba(26, 32, 44)'}} aria-label="Email" class="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1 sign-up" placeholder="Enter your email"
                        id="mce-EMAIL"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div id="mce-responses" class="clear">
                      <div
                        class="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        class="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_29dfec4fae1d92e0a332c9acd_cda8a9e1ac"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                    <button
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="ml-1 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                    >
                      Notify Me
                    </button>
                  </div>
                </form>

                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 flex flex-col">
              <div class="flex-1"></div>
              <div class="flex-1 w-full bg-gray-800"></div>
            </div>
            <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
              <img class="relative rounded-lg shadow-lg" src={screen} alt="App screenshot"/>
            </div>
          </div>
        </div>
        <div class="bg-gray-800">
          <div class="max-w-screen-xl mx-auto pt-16 pb-20 px-4 sm:px-6 md:pb-24 lg:px-8">
            <h3 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">Built by passionate nurse innovators and technologists at</h3>
            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
              <div class="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <img class="h-12" src={h4h} alt="Tuple"/>
              </div>
              {/* <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/v1/mirage-logo.svg" alt="Mirage"/>
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/v1/statickit-logo.svg" alt="StaticKit"/>
              </div>
              <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/v1/transistor-logo.svg" alt="Transistor"/>
              </div>
              <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <img class="h-12" src="https://tailwindui.com/img/logos/v1/workcation-logo.svg" alt="Workcation"/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Landing;