export const AboutUS = () => {
  return (
    <div className="bg-gray-900 border-t-2">
      <div className="container flex justify-center items-center h-screen max-w-5xl mx-auto px-4 py-20">
            <div className="flex flex-col-reverse items-center lg:flex-row lg:ml-auto text-white">
                <div className="px-4">
                  <p className="text-3xl lg:text-5xl font-bold">Quem é <strong className="text-white text-bold text-3xl lg:text-5xl">Fa</strong><strong className="text-bold text-blue-400 text-3xl lg:text-5xl">Tech</strong><strong className="text-white text-bold"> ?</strong></p>
                    <div className="mt-4">
                      <p className="text-md lg:text-xl leading-6 lg:leading-8">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                   </div>
                </div>

                <div className="w-72 lg:w-96 flex-shrink-0 mb-4 lg:ml-auto lg:mb-0">
                    <img src="./ti-people.webp" className="w-full" />
                </div>
            </div>
        </div>
    </div>
  )
}