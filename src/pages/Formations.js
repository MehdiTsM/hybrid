import React from 'react'
import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react"
import { Link } from 'react-router-dom'
import banner from "./images/banner.jpg"
import image1 from "./images/image1.jpg"
function Formations() {
  return (
    <div
    style={{
      overflowY: 'scroll',
      scrollbarWidth: 'none',        // Firefox
      msOverflowStyle: 'none',       // IE 10+
      scrollBehavior: 'smooth',      // Enable smooth scrolling
    }}
    className="bg-customColor2"
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
    <main className="flex-1 pt-16">
      {/* Hero Section - GitHub style */}
      <section className="relative w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
          <img
      src={banner}
      alt="HYBRID Marketing"
      className="w-full h-[100%] object-cover"
    />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-customColor2" />
          </div>
    
          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1200px] flex-col items-center justify-center px-4 text-center text-white md:px-6">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Nos <span className="text-customColor">Formations</span>
            </h1>
            <p className="mb-8 max-w-[800px] text-2xl md:text-2xl lg:text-2xl">
            Développez vos compétences en marketing digital et e-commerce avec nos formations pratiques
            </p>
          </div>
        </section>

      {/* Introduction aux formations - GitHub style */}
      <section className="py-24 md:py-32 github-section">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
                Pourquoi se former avec HYBRID?
              </h2>
              <div className="space-y-4 text-lg text-gray-100 font-semibold">
                <p>
                  Nos formations sont conçues pour vous donner les compétences pratiques nécessaires pour réussir dans
                  le monde digital d'aujourd'hui.
                </p>
                <p>
                  Que vous soyez entrepreneur, professionnel du marketing ou simplement curieux d'apprendre, nos
                  formations vous offrent un contenu de qualité, des exercices pratiques et un suivi personnalisé.
                </p>
                <p>
                  Nos formateurs sont des experts du domaine avec une expérience concrète dans l'industrie, vous
                  garantissant des connaissances à jour et pertinentes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img
                  src={image1}

                  alt="HYBRID Formations"
                  className="rounded-md object-cover border border-[#30363d]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des formations - GitHub style */}
      <section className="py-24 md:py-32 gradient-bg">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
              Nos programmes de formation
            </h2>
            <p className="mx-auto max-w-[800px] text-lg text-gray-100 font-semibold">
              Découvrez nos formations spécialisées pour développer vos compétences digitales
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Formation 1 */}
            <div className="p-8 transition-all bg-slate-400/30 border rounded-lg border-white/90 flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="mb-2 text-3xl font-semibold text-customColor">Marketing Digital Avancé</h3>
                <p className="text-gray-100 font-semibold text-lg">
                  Maîtrisez les stratégies de marketing digital pour développer votre présence en ligne et générer des
                  leads qualifiés.
                </p>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Calendar className="mr-2 h-5 w-5 text-customColor" />
                  <span>Sessions mensuelles</span>
                </div>
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Clock className="mr-2 h-5 w-5 text-customColor" />
                  <span>3 jours (24 heures)</span>
                </div>
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Users className="mr-2 h-5 w-5 text-customColor" />
                  <span>Groupes de 10 personnes maximum</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-medium text-customColor">Ce que vous apprendrez:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Stratégies SEO et SEM pour améliorer votre visibilité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">
                      Création de campagnes publicitaires efficaces sur les réseaux sociaux
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Analyse de données et optimisation des performances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Stratégies de contenu pour engager votre audience</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-white">15 000 DZD</div>
                <button className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold">
                  S'inscrire
                </button>
              </div>
            </div>

            {/* Formation 2 */}
            <div className="p-8 transition-all bg-slate-400/30 border rounded-lg border-white/90 flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="mb-2 text-3xl font-semibold text-customColor">E-commerce et Vente en Ligne</h3>
                <p className="text-gray-100 font-semibold text-lg">
                  Apprenez à créer, gérer et développer votre boutique en ligne pour maximiser vos ventes.
                </p>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Calendar className="mr-2 h-5 w-5 text-customColor" />
                  <span>Sessions bimensuelles</span>
                </div>
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Clock className="mr-2 h-5 w-5 text-customColor" />
                  <span>4 jours (32 heures)</span>
                </div>
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Users className="mr-2 h-5 w-5 text-customColor" />
                  <span>Groupes de 8 personnes maximum</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-medium text-customColor">Ce que vous apprendrez:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">
                      Création d'une boutique en ligne avec WooCommerce ou Shopify
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">
                      Optimisation de l'expérience utilisateur pour augmenter les conversions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">
                      Stratégies de prix et de promotion pour maximiser les ventes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">
                      Gestion logistique et service client pour fidéliser vos acheteurs
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-white">20 000 DZD</div>
                <button className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold">
                  S'inscrire
                </button>
              </div>
            </div>

            {/* Formation 3 */}
            <div className="p-8 transition-all bg-slate-400/30 border rounded-lg border-white/90 flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="mb-2 text-3xl font-semibold text-customColor">Gestion des Réseaux Sociaux</h3>
                <p className="text-gray-100 font-semibold text-lg">
                  Développez une stratégie de réseaux sociaux efficace pour augmenter votre visibilité et engagement.
                </p>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Calendar className="mr-2 h-5 w-5 text-customColor" />
                  <span>Sessions mensuelles</span>
                </div>
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Clock className="mr-2 h-5 w-5 text-customColor" />
                  <span>2 jours (16 heures)</span>
                </div>
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Users className="mr-2 h-5 w-5 text-customColor" />
                  <span>Groupes de 12 personnes maximum</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-medium text-[#7C3085]">Ce que vous apprendrez:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Création de contenu engageant pour chaque plateforme</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Planification et automatisation de vos publications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Analyse des performances et ajustement de votre stratégie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">
                      Gestion de communauté et service client sur les réseaux sociaux
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-white">12 000 DZD</div>
                <button className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold">
                  S'inscrire
                </button>
              </div>
            </div>

            {/* Formation 4 */}
            <div className="p-8 transition-all bg-slate-400/30 border rounded-lg border-white/90 flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="mb-2 text-3xl font-semibold text-customColor">Création de Contenu Digital</h3>
                <p className="text-gray-100 font-semibold text-lg">
                  Maîtrisez l'art de créer du contenu visuel et textuel impactant pour vos plateformes digitales.
                </p>
              </div>

              <div className="mb-6 space-y-3">
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Calendar className="mr-2 h-5 w-5 text-customColor" />
                  <span>Sessions trimestrielles</span>
                </div>
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Clock className="mr-2 h-5 w-5 text-customColor" />
                  <span>3 jours (24 heures)</span>
                </div>
                <div className="flex items-center text-gray-100 text-lg font-semibold">
                  <Users className="mr-2 h-5 w-5 text-customColor" />
                  <span>Groupes de 8 personnes maximum</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-medium text-customColor">Ce que vous apprendrez:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Principes de design graphique pour les non-designers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Création de visuels impactants avec Canva et Adobe Express</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Rédaction web optimisée pour le SEO et l'engagement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-customColor shrink-0 mt-0.5" />
                    <span className="text-gray-100 text-lg font-semibold">Création de vidéos marketing avec votre smartphone</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-white">18 000 DZD</div>
                <button className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages - GitHub style */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 ">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-white">
              Ce que disent nos participants
            </h2>
            <p className="mx-auto max-w-[800px] text-lg font-semibold text-gray-100">
              Découvrez les témoignages de ceux qui ont suivi nos formations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 ">
            <div className="github-card p-8 bg-slate-400/30 border rounded-lg border-white/90">
              <div className="mb-4 text-customColor ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <path
                    d="M11.6 4H4.8C3.26 4 2 5.26 2 6.8V13.6C2 15.14 3.26 16.4 4.8 16.4H6.8V19.2C6.8 19.48 6.92 19.74 7.14 19.9C7.36 20.06 7.64 20.1 7.9 20.02L13.6 18.4V6.8C13.6 5.26 12.34 4 10.8 4H11.6ZM11.6 16.58L8 17.68V14.8C8 14.36 7.64 14 7.2 14H4.8C4.36 14 4 13.64 4 13.2V6.8C4 6.36 4.36 6 4.8 6H10.8C11.24 6 11.6 6.36 11.6 6.8V16.58Z"
                    fill="currentColor"
                  />
                  <path
                    d="M22 6.8V13.6C22 15.14 20.74 16.4 19.2 16.4H17.2V19.2C17.2 19.48 17.08 19.74 16.86 19.9C16.64 20.06 16.36 20.1 16.1 20.02L10.4 18.4V16.4L16 17.92V14.8C16 14.36 16.36 14 16.8 14H19.2C19.64 14 20 13.64 20 13.2V6.8C20 6.36 19.64 6 19.2 6H15.2V4H19.2C20.74 4 22 5.26 22 6.8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="mb-6 text-gray-100 italic">
                "La formation en marketing digital a complètement transformé ma façon d'aborder ma présence en ligne.
                Les compétences acquises m'ont permis de doubler mon trafic web en seulement 3 mois."
              </p>
              <div>
                <p className="font-medium text-white">Amina B.</p>
                <p className="text-sm text-gray-400">Propriétaire d'une boutique en ligne</p>
              </div>
            </div>

            <div className="github-card p-8 bg-slate-400/30 border rounded-lg border-white/90">
              <div className="mb-4 text-customColor">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <path
                    d="M11.6 4H4.8C3.26 4 2 5.26 2 6.8V13.6C2 15.14 3.26 16.4 4.8 16.4H6.8V19.2C6.8 19.48 6.92 19.74 7.14 19.9C7.36 20.06 7.64 20.1 7.9 20.02L13.6 18.4V6.8C13.6 5.26 12.34 4 10.8 4H11.6ZM11.6 16.58L8 17.68V14.8C8 14.36 7.64 14 7.2 14H4.8C4.36 14 4 13.64 4 13.2V6.8C4 6.36 4.36 6 4.8 6H10.8C11.24 6 11.6 6.36 11.6 6.8V16.58Z"
                    fill="currentColor"
                  />
                  <path
                    d="M22 6.8V13.6C22 15.14 20.74 16.4 19.2 16.4H17.2V19.2C17.2 19.48 17.08 19.74 16.86 19.9C16.64 20.06 16.36 20.1 16.1 20.02L10.4 18.4V16.4L16 17.92V14.8C16 14.36 16.36 14 16.8 14H19.2C19.64 14 20 13.64 20 13.2V6.8C20 6.36 19.64 6 19.2 6H15.2V4H19.2C20.74 4 22 5.26 22 6.8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="mb-6 text-gray-100 italic">
                "Les formateurs d'HYBRID sont de vrais experts qui partagent des connaissances pratiques et actuelles.
                La formation en e-commerce m'a donné tous les outils nécessaires pour lancer ma boutique en ligne avec
                succès."
              </p>
              <div>
                <p className="font-medium text-white">Karim M.</p>
                <p className="text-sm text-gray-400">Entrepreneur</p>
              </div>
            </div>

            <div className="github-card p-8 bg-slate-400/30 border rounded-lg border-white/90">
              <div className="mb-4 text-customColor ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <path
                    d="M11.6 4H4.8C3.26 4 2 5.26 2 6.8V13.6C2 15.14 3.26 16.4 4.8 16.4H6.8V19.2C6.8 19.48 6.92 19.74 7.14 19.9C7.36 20.06 7.64 20.1 7.9 20.02L13.6 18.4V6.8C13.6 5.26 12.34 4 10.8 4H11.6ZM11.6 16.58L8 17.68V14.8C8 14.36 7.64 14 7.2 14H4.8C4.36 14 4 13.64 4 13.2V6.8C4 6.36 4.36 6 4.8 6H10.8C11.24 6 11.6 6.36 11.6 6.8V16.58Z"
                    fill="currentColor"
                  />
                  <path
                    d="M22 6.8V13.6C22 15.14 20.74 16.4 19.2 16.4H17.2V19.2C17.2 19.48 17.08 19.74 16.86 19.9C16.64 20.06 16.36 20.1 16.1 20.02L10.4 18.4V16.4L16 17.92V14.8C16 14.36 16.36 14 16.8 14H19.2C19.64 14 20 13.64 20 13.2V6.8C20 6.36 19.64 6 19.2 6H15.2V4H19.2C20.74 4 22 5.26 22 6.8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="mb-6 text-gray-100 italic">
                "La formation sur la gestion des réseaux sociaux a été un véritable game-changer pour notre
                entreprise. Nous avons vu notre engagement augmenter de 200% en appliquant les stratégies apprises."
              </p>
              <div>
                <p className="font-medium text-white">Lina T.</p>
                <p className="text-sm text-gray-400">Responsable marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - GitHub style */}
      <section className="py-24 md:py-32 gradient-bg">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="github-card p-12 text-center relative overflow-hidden">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-white">
              Prêt à développer vos compétences digitales?
            </h2>
            <p className="mx-auto mb-8 max-w-[800px] text-lg font-semibold text-gray-100">
              Inscrivez-vous à l'une de nos formations et transformez votre approche du marketing digital.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <button asChild className="rounded-3xl  text-xl text-white bg-customColor/50 hover:bg-customColor/100 ease-in-out duration-300 px-6 transition-all py-5 text-bold">
                <Link to="/formations">Voir les formations</Link>
              </button>
              <button
                asChild
                variant="outline"
                className="rounded-3xl transition-all border-gray-200 border-2 text-white bg-opacity-20 bg-white ease-in-out duration-300 hover:bg-white/40 px-8 py-3 text-base font-semibold"
              >
                <Link to="/contact">Nous contacter</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Formations