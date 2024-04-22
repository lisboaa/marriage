import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Link from "next/link";
import Image from 'next/image'

export default function GuiaPadrinho() {
    return (
        <div>
            <div className='lg:w-1/2 md:w-2/3 sm:w-full xs:w-full flex flex-col pl-3 pt-3'>
        <Sheet>
          <SheetTrigger asChild className='lg:hidden md:hidden sm:hidden xs:hidden'>
            <Button size="icon" variant="outline">
              <MenuIcon/>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className='flex flex-col'>
            <SheetHeader className='text-left text-lg font-semibold'>
            <Image className='flex items-center'
              src="/logo.png"
              width={60}
              height={60}
              alt='Logo'
            />
            </SheetHeader>
            <SheetClose asChild className='mb-1'>
              <Link href="/">
                <Button variant="outline" className="w-full justify-start gap-2">
                  Lista de Presente
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild className='mb-1'>
              <Link href="/guia-padrinho">
                <Button variant="outline" className="w-full justify-start gap-2">
                  Guia padrinho
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/">
                <Button variant="outline" className="w-full justify-start gap-2">
                  Local Evento
                </Button>
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
        {/* <Image
          src="/logo.png"
          width={60}
          height={60}
          alt='Logo'
        /> */}
        {/* <ul className='text-xs ps-5 pt-5'>
          <li>Home</li>
        </ul>
        <ul className='text-xs ps-5 pt-5'>
          <li>Lista de Presente</li>
        </ul>
        <ul className='text-xs pt-5'>
          <li>Guia padrinho</li>
        </ul>
        <ul className='text-xs ps-5 pr-5'>
          <li>Local Evento</li>
        </ul> */}
      </div>
            <article className="text-pretty p-10 pt-20">
                <p className='text-gray-800 text-base text-center '>Queridos padrinhos o nosso grande dia esta chegando e nos so poderiamos dizer sim na presença de vocês. Estamos felizes por aceitarem e fazer parte da nossa historia.</p>
            </article>
            <div className='p-10'>
                <h1 className='pb-10 text-4xl text-center text-tituloT'>Save the date</h1>
                <div className='flex items-center justify-center'>
                    <Image className='rounded-lg'
                        src="/calendario.png"
                        width={248}
                        height={270}
                        sizes='100vw'
                        alt='Calendario'
                    />
                </div>

            </div>
            <div className='text-pretty p-10'>
                <article className="text-wrap">
                    <h1 className='pb-10 text-4xl text-center text-tituloT'>Madrinha seu trage</h1>
                    <p className='text-gray-800 text-base text-center '>Queremos que você se sinta elegante e confortavel por isso ninguém melhor que você para escolher o modelo de vestido que mais lhe agrada escolhemos a cor fúccia.</p>
                        <div className='flex items-center justify-center pt-10'>
                            <Image className='rounded-lg'
                                src="/trage-madrinha.jpeg"
                                width={248}
                                height={270}
                                sizes='100vw'
                                alt='Calendario'
                            />
                        </div>
                </article>
            </div>
            <div className='text-pretty p-10'>
                <article className="text-wrap">
                    <h1 className='pb-10 text-4xl text-center text-tituloT'>Padrinho</h1>
                    <p className='text-gray-800 text-base text-center '>Para o home é mais facil né gostariamos que utlizasem terno preto, camisa branca e gravata fúccia que é um presente nosso para vocês.</p>
                    <div className='flex items-center justify-center pt-10'>
                        <Image className='rounded-lg'
                            src="/trage-padrinho.jpeg"
                            width={248}
                            height={270}
                            sizes='100vw'
                            alt='Calendario'
                        />
                    </div>
                </article>
            </div>
            <div className='text-pretty p-10'>
                <article>                
                    <h1 className='pb-5 text-4xl text-center text-tituloT'>Para o grande dia</h1>
                    <p className='text-gray-800 text-base text-center '>Chegue com 30mn de antecedencia tire
                        Tire muitas fotos e nos ajude eternisar esse momento
                        Ore pelo nosso futuro e divirta-se muito.
                    </p>
                    {/* <div className='flex items-center justify-center'>
                        <Image className=''
                            src="/relogio1.png"
                            width={248}
                            height={270}
                            sizes='100vw'
                            alt='Calendario'
                        />
                    </div> */}
                    <div className='flex items-center justify-center pt-5'>
                        <Image className=''
                            src="/relogio2.png"
                            width={248}
                            height={270}
                            sizes='100vw'
                            alt='Calendario'
                        />
                    </div>
                </article>
            </div>
            <footer className='text-pretty p-10'>
                <p className='text-slate-500/25 text-center text-4xl font-[Italianno]'>Douglas  &  Tatiane</p>
            </footer>
        </div>
    )
}