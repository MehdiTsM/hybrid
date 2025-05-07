import React from 'react'
import banner from './images/banner.jpg'
import image1 from './images/image1.jpg'
import { Link } from 'react-router-dom'

function Home() {
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
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
      <img
  src={banner}
  alt="HYBRID Marketing"
  className="w-full h-full object-cover"
/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-customColor2" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1200px] flex-col items-center justify-center px-4 text-center text-white md:px-6">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Bienvenue chez <span className="text-customColor">HYBRID</span>
        </h1>
        <p className="mb-8 max-w-[800px] text-2xl md:text-2xl lg:text-2xl">
          Une agence marketing innovante basée en Algérie, spécialisée dans la transformation digitale des entreprises.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 items-center">
        <Link to='/formations'>
            <button className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold">
            Nos formations
            </button>
        </Link>
          <Link to="/contact">
            <button
                variant="outline"
                className="rounded-3xl transition-all border-gray-200 border-2 text-white bg-opacity-20 bg-white ease-in-out duration-300 hover:bg-white/40 px-8 py-3 text-base font-semibold"
            >
                Contactez-nous
            </button>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-customColor2">
  <div className="mx-auto max-w-[1200px] px-4 md:px-6">
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <div>
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
          Qui sommes-nous?
        </h2>
        <div className="space-y-4 text-lg text-gray-100 font-semibold">
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
          <Link to="/services"
            className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold"
          >
            Découvrir nos services
          </Link>
        </div>
      </div>
      <div className="relative">
        <img
          src={image1}
          width="800"
          height="800"
          alt="HYBRID Team"
          className="rounded-md object-cover border border-[#30363d]"
        />
      </div>
    </div>
  </div>
</section>

<section className="py-24 md:py-32 bg-customColor2">
  <div className="mx-auto max-w-[1200px] px-4 md:px-6">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
        Nos services
      </h2>
      <p className="mx-auto max-w-[800px] text-xl font-semibold text-gray-300">
        Découvrez notre gamme complète de services pour transformer votre présence digitale.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
  <div className="github-card p-8 transition-all bg-slate-400/30 border rounded-lg border-white/90 h-full flex flex-col justify-between hover:scale-105 transform duration-300">
    <div>
      <h3 className="mb-4 text-2xl font-semibold text-customColor">Marketing Digital</h3>
      <p className="mb-6 text-gray-300 font-semibold text-lg">
        Stratégies de marketing digital complètes pour augmenter votre visibilité en ligne et générer des
        leads qualifiés.
      </p>
    </div>
    <Link to="/services" className="text-customColor p-0 flex items-center hover:underline font-semibold text-lg justify-center">
      En savoir plus
      <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
      </svg>
    </Link>
  </div>

  <div className="github-card p-8 transition-all bg-slate-400/30 border rounded-lg border-white/90 h-full flex flex-col justify-between hover:scale-105 transform duration-300">
    <div>
      <h3 className="mb-4 text-2xl font-semibold text-customColor">Création Web</h3>
      <p className="mb-6 text-gray-300 font-semibold text-lg">
        Sites web professionnels et optimisés pour convertir vos visiteurs en clients fidèles.
      </p>
    </div>
    <Link to="/services" className="text-customColor p-0 flex items-center hover:underline font-semibold text-lg justify-center">
      En savoir plus
      <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
      </svg>
    </Link>
  </div>

  <div className="github-card p-8 transition-all bg-slate-400/30 border rounded-lg border-white/90 h-full flex flex-col justify-between hover:scale-105 transform duration-300">
    <div>
      <h3 className="mb-4 text-2xl font-semibold text-customColor">Formations</h3>
      <p className="mb-6 text-gray-300 font-semibold text-lg">
        Formations pratiques en marketing digital et e-commerce pour développer vos compétences.
      </p>
    </div>
    <Link to="/formations" className="text-customColor p-0 flex items-center hover:underline font-semibold text-lg justify-center">
      En savoir plus
      <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
      </svg>
    </Link>
  </div>
</div>


    <div className="mt-16 text-center">
      <a
        href="/services"
        className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold"
      >
        Voir tous nos services
      </a>
    </div>
  </div>
</section>

        {/* Call to Action - GitHub style */}
        <section className="py-24 md:py-32 bg-customColor2 px-8">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 bg-slate-400/30 border rounded-2xl">
            <div className="rounded-md github-card p-12 text-center relative overflow-hidden">
              <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl text-white">
                Prêt à transformer votre présence digitale?
              </h2>
              <p className="mx-auto mb-8 max-w-[800px] text-lg text-gray-100 font-semibold">
                Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous
                aider.
              </p>
              <button className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold">
                <Link to="/contact">Contactez-nous</Link>
              </button>
            </div>
          </div>
        </section>






    </div>
  )
}

export default Home