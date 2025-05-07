import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
              {/* Footer - Style Apple minimaliste */}
        <footer className="py-8 bg-customColor2/90">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="flex items-center space-x-4">
                <Link to="#" className="text-sm font-semibold text-gray-100 hover:text-customColor duration-300 transition-colors">
                  Mentions légales
                </Link>
                <Link to="#" className="text-sm font-semibold text-gray-100 hover:text-customColor duration-300 transition-colors">
                  Politique de confidentialité
                </Link>
                <Link to="#" className="text-sm font-semibold text-gray-100 hover:text-customColor duration-300 transition-colors">
                  Conditions d'utilisation
                </Link>
              </div>

              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} HYBRID. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer