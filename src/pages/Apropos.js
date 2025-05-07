import React from 'react'
import image2 from "./images/image2.jpg"
import { Link } from 'react-router-dom'
function Apropos() {
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
          {/* About Section - GitHub style */}
  <section id="about" className="py-24 md:py-32 bg-customColor2">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative">
                <div className="relative">
                  <img
                    src={image2}
                    width={800}
                    height={800}
                    alt="HYBRID Team"
                    className="rounded-xl object-cover border border-[#30363d]"
                  />
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
                  Votre Partenaire pour la Transformation Digitale
                </h2>
                <div className="space-y-4 text-lg font-semibold text-gray-100">
                  <p>
                    HYBRID est une agence marketing innovante basée en Algérie, spécialisée dans la transformation
                    digitale des entreprises à travers des solutions sur mesure.
                  </p>
                  <p>
                    Notre mission est d'accompagner les entrepreneurs et e-commerçants dans leur croissance grâce à une
                    approche 360° qui intègre tous les aspects du marketing digital moderne.
                  </p>
                  <p>
                    Avec notre expertise et notre passion pour l'innovation, nous vous aidons à vous démarquer dans un
                    monde digital en constante évolution.
                  </p>
                </div>
                <div className="mt-8">
                  <button asChild className="rounded-3xl text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 py-5 font-bold">
                    <Link to="/formations">Découvrir nos formations</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Apropos