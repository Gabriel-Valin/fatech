export const ContactForm = () => {
  return (
    <div className="bg-gray-900 border-t-2">
      <div className="container flex flex-col justify-center items-center h-screen max-w-5xl mx-auto px-4 py-4">
        <div className="w-80 lg:w-full">
        <p className="text-2xl text-white text-center lg:text-4xl">Entre em contato conosco</p>
        <p className="text-white mt-2 text-center text-lg">Solicite um orçamento, tire suas dúvidas e venha começar a fazer parte dessa <strong className="text-blue-400">REVOLUÇÃO</strong>.</p>
        <div className="mt-8 bg-white shadow-md rounded-md p-6 space-y-4">
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm text-gray-800 mb-1"
                >Digite seu email</label>
                <input
                    id="email"
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                />
            </div>
                      
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm text-gray-800 mb-1"
                >Assunto</label>
                <input
                    id="subject"
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                />
            </div>       

            <div>
                <label
                    htmlFor=""
                    className="block text-sm text-gray-800 mb-1"
                >Descrição</label>
                <textarea

                    id=""
                    className="h-38 w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                />
            </div>

            <div className="lg:text-center">
                <button className="w-full text-sm bg-gray-900 hover:bg-blue-600 px-6 py-2 rounded text-white shadow lg:w-80">
                    Enviar Email
                </button>
            </div>
        </div>
    </div>
        </div>
        
      </div>
  )
}