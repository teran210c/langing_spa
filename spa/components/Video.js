export default function Button({ children, onClick }) {
    return (
      <section
        className="bg-black landing-section h-[85vh] max-w-screen text-center relative overflow-hidden"
        data-header-color="black"
      >
        <div className="z-30 relative h-full flex flex-col">
          <header>
            <h2 className="text-white pt-40 text-[15px] font-sm mb-2">
              RELAJATE Y DISFRUTA CON NUESTROS
            </h2>
            <p className="text-white text-[75px] leading-relaxed">
              Tratamientos <br/> y Baños Sauna
            </p>
          </header>
          <footer className="flex flex-col flex-grow flex-nowrap justify-end pb-20">
            <div>
              <a
                href="#"
                className="text-white border-[3px] border-white rounded font-sm px-12 py-2 bg-white/5 backdrop-blur-sm inline-block hover:bg-white hover:text-black transition-colors"
              >
                Agenda una cita
              </a>
            </div>
          </footer>
        </div>
  
        <div className="absolute top-0 bottom-0 h-full w-full z-10 bg-[#1b1b01]">
          {/* Superposición semitransparente */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Vídeo */}
          <video
            className="object-center object-cover h-full w-[85%] mx-auto"
            autoPlay
            muted
            loop
            src="video.webm"
          ></video>
        </div>
      </section>
    );
  }