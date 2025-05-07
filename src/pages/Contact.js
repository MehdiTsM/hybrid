import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div
    style={{
      overflowY: 'scroll',
      scrollbarWidth: 'none',        // Firefox
      msOverflowStyle: 'none',       // IE 10+
      scrollBehavior: 'smooth',      // Enable smooth scrolling
    }}
    className="your-other-classes"
  >
    <div
      style={{
        display: 'none',
      }}
    >
      {/* Hides scrollbar in Chrome, Safari, Edge */}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
         <section id="contact" className="py-24 md:py-32 bg-customColor2">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
                Prêt à transformer votre présence digitale?
              </h2>
              <p className="mx-auto max-w-[800px] text-lg text-gray-100 font-semibold">
                Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous
                aider.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="p-8 bg-slate-400/30 border rounded-lg border-white/90">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-gray-300">
                        Prénom
                      </label>
                      <input
                        id="first-name"
                        className="w-full rounded-md github-input px-4 py-3"
                        placeholder="Prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-gray-300">
                        Nom
                      </label>
                      <input id="last-name" className="w-full rounded-md github-input px-4 py-3" placeholder="Nom" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md github-input px-4 py-3"
                      placeholder="email@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md github-input px-4 py-3"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  <button className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold">
                    Envoyer
                  </button>
                </form>
              </div>

              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-customColor">Contactez-nous</h3>
                  <div className="space-y-4 text-gray-300">
                    <p className="flex items-center">
                      <span className="mr-2 font-medium">Email:</span>
                      <span>contact@hybrid-agency.dz</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2 font-medium">Téléphone:</span>
                      <span>+213 XX XX XX XX</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2 font-medium">Adresse:</span>
                      <span>Algérie</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-customColor">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="rounded-md bg-[#161b22] p-3 text-gray-300 transition-colors hover:bg-[#30363d] hover:text-white border border-[#30363d]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md bg-[#161b22] p-3 text-gray-300 transition-colors hover:bg-[#30363d] hover:text-white border border-[#30363d]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md bg-[#161b22] p-3 text-gray-300 transition-colors hover:bg-[#30363d] hover:text-white border border-[#30363d]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md bg-[#161b22] p-3 text-gray-300 transition-colors hover:bg-[#30363d] hover:text-white border border-[#30363d]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact