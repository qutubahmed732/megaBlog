import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index.js'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border-t-4 border-transparent bg-gradient-to-r from-blue-950 to-green-500 bg-clip-border">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <Link to="/" className='mb-4 inline-flex items-center'>
                <Logo width="50px" className="rounded-2xl p-4 text-2xl font-bold font-serif text-[#f3e1c8] bg-linear-to-br from-emerald-700 to-green-700 cursor-pointer" />
              </Link>
              <div>
                <p className="text-xl bg-linear-to-l to-emerald-100 from-orange-500 bg-clip-text text-transparent">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-9 text-lg font-bold uppercase text-[#d0cece]">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-9 text-lg font-bold uppercase text-[#d0cece]">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="mb-9 text-lg font-bold uppercase text-[#d0cece]">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-medium text-gray-100 hover:text-gray-700 transition-colors"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer