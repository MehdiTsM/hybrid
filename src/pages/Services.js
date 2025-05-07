import React from 'react'
import banner2 from './images/banner2.jpg'
import { Check } from "lucide-react";
import { Link } from 'react-router-dom';
import image2 from './images/image2.jpg'
function Servies() {
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
      src={banner2}
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
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button className="rounded-3xl  text-xl text-white bg-customColor/50 ease-in-out duration-300 px-6 transition-all py-4 text-bold">
                Découvrir nos offres
              </button>
              <button
                variant="outline"
                className="rounded-3xl transition-all border-gray-200 border-2 text-white bg-opacity-20 bg-white ease-in-out duration-300 hover:bg-white/25 px-8 py-6 text-base font-semibold"
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </section>

            {/* Services Section - Style Apple avec design épuré */}
    <section id="services" className="py-24 md:py-32 bg-customColor2">
  <div className="mx-auto max-w-[1200px] px-4 md:px-6">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-white">
        Une approche marketing 360°
      </h2>
      <p className="mx-auto max-w-[800px] text-lg font-semibold text-gray-100">
        Nous accompagnons les entrepreneurs et e-commerçants dans leur croissance grâce à une approche complète.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  <div className="flex flex-col items-start rounded-2xl p-8 transition-all hover:shadow-xl hover:scale-105 bg-slate-400/30 border-white/90 transform duration-300 border-2 hover:border-white/50">
    <h3 className="mb-4 text-3xl font-semibold text-customColor">Création de Sites Web</h3>
    <p className="text-gray-100 font-semibold text-lg">
      Sites vitrines et e-commerce performants et optimisés pour convertir vos visiteurs en clients.
    </p>
  </div>

  <div className="flex flex-col items-start rounded-2xl p-8 transition-all hover:shadow-xl hover:scale-105 bg-slate-400/30 border-white/90 transform duration-300 border-2 hover:border-white/50">
    <h3 className="mb-4 text-3xl font-semibold text-customColor">Gestion des Réseaux Sociaux</h3>
    <p className="text-gray-100 font-semibold text-lg">
      Stratégies de contenu et gestion professionnelle de vos plateformes sociales pour maximiser votre
      visibilité.
    </p>
  </div>

  <div className="flex flex-col items-start rounded-2xl p-8 transition-all hover:shadow-xl hover:scale-105 bg-slate-400/30 border-white/90 transform duration-300 border-2 hover:border-white/50">
    <h3 className="mb-4 text-3xl font-semibold text-customColor">Sponsoring Publicitaire</h3>
    <p className="text-gray-100 font-semibold text-lg">
      Campagnes publicitaires ciblées sur Facebook, Instagram et Google pour atteindre votre audience
      idéale.
    </p>
  </div>

  <div className="flex flex-col items-start rounded-2xl p-8 transition-all hover:shadow-xl hover:scale-105 bg-slate-400/30 border-white/90 transform duration-300 border-2 hover:border-white/50">
    <h3 className="mb-4 text-3xl font-semibold text-customColor">Création de Contenus Vidéos</h3>
    <p className="text-gray-100 font-semibold text-lg">
      Vidéos promotionnelles impactantes pour capter l'attention et engager votre audience.
    </p>
  </div>

  <div className="flex flex-col items-start rounded-2xl p-8 transition-all hover:shadow-xl hover:scale-105 bg-slate-400/30 border-white/90 transform duration-300 border-2 hover:border-white/50">
    <h3 className="mb-4 text-3xl font-semibold text-customColor">Formations</h3>
    <p className="text-gray-100 font-semibold text-lg">
      Formations pratiques en e-commerce et marketing digital pour développer vos compétences.
    </p>
  </div>

  <div className="flex flex-col items-start rounded-2xl p-8 transition-all hover:shadow-xl hover:scale-105 bg-slate-400/30 border-white/90 transform duration-300 border-2 hover:border-white/50">
    <h3 className="mb-4 text-3xl font-semibold text-customColor">Identité Visuelle</h3>
    <p className="text-gray-100 font-semibold text-lg">
      Création de logos et d'identités visuelles complètes pour renforcer votre image de marque.
    </p>
  </div>
</div>
  </div>
</section>

<section id="offres" className="py-24 md:py-32 bg-customColor2">
  <div className="mx-auto max-w-[1200px] px-4 md:px-6">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-white">
        3 Packs Marketing Adaptés à Vos Besoins
      </h2>
      <p className="mx-auto max-w-[800px] text-lg text-gray-300">
        Nous avons structuré notre offre autour de trois packs complets afin de répondre aux différents niveaux
        de besoins et de budgets.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
  {/* PACK 1 */}
  <div className="flex flex-col github-card overflow-hidden transition-all bg-slate-400/30 border rounded-lg border-white/90 h-full">
    <div className="bg-black/40 p-8 border-b border-slate-400/30">
      <h3 className="mb-2 text-3xl font-semibold text-customColor">STARTER PACK</h3>
      <div className="mb-4 flex items-baseline">
        <span className="text-4xl font-bold text-white">4900</span>
        <span className="ml-1 text-gray-400 font-semibold">DZD</span>
      </div>
      <p className="text-gray-300 font-semibold text-base">Idéal pour démarrer votre présence en ligne.</p>
    </div>
    <div className="flex flex-col flex-1 justify-between p-8">
      <ul className="mb-8 space-y-4">
        {["LOGO", "LANDING PAGE", "SPONSORING ADS"].map((item) => (
          <li key={item} className="flex items-center text-gray-100">
            <Check className="mr-2 h-5 w-5 text-customColor" />
            <span className="text-base font-semibold">{item}</span>
          </li>
        ))}
      </ul>
      <button className="rounded-3xl text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 py-5 font-bold">
        Choisir ce pack
      </button>
    </div>
  </div>

  {/* PACK 2 */}
  <div className="flex flex-col github-card overflow-hidden transition-all bg-slate-400/30 border rounded-lg border-white/90 h-full">
    <div className="relative bg-black/40 p-8 border-b border-slate-400/30">
      <div className="absolute -right-1 -top-1 rounded-full bg-customColor px-4 py-2 text-xs font-semibold text-white">
        Populaire
      </div>
      <h3 className="mb-2 text-3xl font-semibold text-customColor">PREMIUM PACK</h3>
      <div className="mb-4 flex items-baseline">
        <span className="text-4xl font-bold text-white">7900</span>
        <span className="ml-1 text-gray-400 font-semibold">DZD</span>
      </div>
      <p className="text-gray-300 font-semibold text-base">Pour une présence digitale professionnelle.</p>
    </div>
    <div className="flex flex-col flex-1 justify-between p-8">
      <ul className="mb-8 space-y-4">
        {["IDENTITÉ VISUELLE", "LANDING PAGE", "SPONSORING ADS", "CRÉATIF PUBLICITAIRE"].map((item) => (
          <li key={item} className="flex items-center text-gray-100">
            <Check className="mr-2 h-5 w-5 text-customColor" />
            <span className="text-base font-semibold">{item}</span>
          </li>
        ))}
      </ul>
      <button className="rounded-3xl text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 py-5 font-bold">
        Choisir ce pack
      </button>
    </div>
  </div>

  {/* PACK 3 */}
  <div className="flex flex-col github-card overflow-hidden transition-all bg-slate-400/30 border rounded-lg border-white/90 h-full">
    <div className="bg-black/40 p-8 border-b border-slate-400/30">
      <h3 className="mb-2 text-3xl font-semibold text-customColor">HYBRID PACK</h3>
      <div className="mb-4 flex items-baseline">
        <span className="text-4xl font-bold text-white">11900</span>
        <span className="ml-1 text-gray-400 font-semibold">DZD</span>
      </div>
      <p className="text-gray-300 font-semibold text-base">Solution complète pour une stratégie digitale optimale.</p>
    </div>
    <div className="flex flex-col flex-1 justify-between p-8">
      <ul className="mb-8 space-y-4">
        {[
          "IDENTITÉ VISUELLE",
          "FORMATIONS ET STRATÉGIES",
          "SITE WEB PRO",
          "SPONSORING ADS",
          "CRÉATIF PUBLICITAIRE",
          "GESTION DES RÉSEAUX",
          "SUIVIS",
        ].map((item) => (
          <li key={item} className="flex items-center text-gray-100">
            <Check className="mr-2 h-5 w-5 text-customColor" />
            <span className="text-base font-semibold">{item}</span>
          </li>
        ))}
      </ul>
      <button className="rounded-3xl text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 py-5 font-bold">
        Choisir ce pack
      </button>
    </div>
  </div>
</div>

  </div>
</section>



    </div>
  )
}

export default Servies