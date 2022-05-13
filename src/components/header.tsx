import { useState } from "react"

export const Header = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false)

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
    <p className="text-2xl ml-4"><strong className="text-white text-bold text-2xl">Fa</strong><strong className="text-bold text-blue-400 text-2xl">Tech</strong><strong className="text-white text-bold">.</strong></p>

    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex mr-2 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg onClick={() => setHiddenMenu(prevState => !prevState)} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
    <div className={`transition-all ease-in duration-300 w-full md:block md:w-auto ${!hiddenMenu ? 'hidden' : ''}`} id="mobile-menu">
      <ul className="flex flex-col ml-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
            <a className="text-lg md:p-4 py-2 block text-white duration-300 hover:underline hover:text-blue-400 hover:scale-105" href="#">Sobre</a>
          </li>
          <li>
            <a className="text-lg md:p-4 py-2 block text-white duration-300 hover:underline hover:text-blue-400 hover:scale-105" href="#">Profissionais</a>
          </li>
          <li>
            <a className="text-lg md:p-4 py-2 block text-white duration-300 hover:underline hover:text-blue-400 hover:scale-105" href="#">Hardware</a>
          </li>
          <li>
            <a className="text-lg md:p-4 py-2 block text-white duration-300 hover:underline hover:text-blue-400 hover:scale-105" href="#">Infraestrutura</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
  )
}