import Typed from 'react-typed';

export const Banner = () => {
  return (
    <div className="h-[calc(100vh-64px)]" >
      <video
        className='object-cover h-full w-full absolute -z-10'
        src='./video.mp4'
        autoPlay
        loop
        muted
      />  
      <div className="container max-w-5xl mx-auto px-4 h-full flex flex-col items-center justify-center">
            <div>
                <div className="text-center">
                  <p className="text-3xl lg:text-5xl"><strong className="text-white text-bold">Fa</strong><strong className="text-bold text-blue-400">Tech</strong><strong className="text-white text-bold">.</strong></p>
                  <p className="text-2xl text-white mt-3 lg:text-5xl lg:mt-0">Construindo o futuro da sua empresa através <br /><Typed
                    className='text-blue-400 font-bold'
                    strings={['da tecnologia.', 'do mundo moderno.', 'da comunicação.', 'e das pessoas.']}
                    typeSpeed={70}
                    backSpeed={70}
                    loop
                  /></p>
            
                </div>
                <div className="mt-12">
                  <div className="grid grid-cols-3 gap-5 lg:grid-cols-6">
                    <div className="flex flex-col justify-center items-center">
                      <img className="mb-6 w-14 lg:w-24" src="./cloud.png" alt="" />
                      <p className="text-white text-bold text-lg ">CLOUD</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img className="mb-6 w-14 lg:w-24" src="./motherboard.png" alt="" />
                      <p className="text-white text-bold text-lg mt-auto">HARDWARE</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img className="mb-6 w-14 lg:w-24" src="./software.png" alt="" />
                      <p className="text-white text-bold text-lg">SOFTWARE</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img className="mb-6 w-14 lg:w-24" src="./sercer.png" alt="" />
                      <p className="text-white text-bold text-lg">SERVIDORES</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img className="mb-6 w-14 lg:w-24" src="./peoples.png" alt="" />
                      <p className="text-white text-bold text-lg">PESSOAS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img className="mb-6 w-14 lg:w-24" src="./exam.png" alt="" />
                      <p className="text-white text-bold text-lg">TESTES</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}