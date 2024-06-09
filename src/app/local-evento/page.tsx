import Head from 'next/head'
import Image from 'next/image'

export default function ListaPresente() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Event Location</title>
          </Head>
    
          <Image className='rounded-lg'
                        src="/mapa-local-evento.png"
                        width={248}
                        height={270}
                        sizes='100vw'
                        alt='Calendario'
                    />
        </div>
      );
}