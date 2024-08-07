import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon, HomeIcon, GiftIcon, LibraryIcon, ListChecksIcon, MapIcon } from 'lucide-react'
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
                  src="/marca_submarca-logo.png"
                  width={60}
                  height={60}
                  alt='Logo'
                />
                </SheetHeader>
                <SheetClose asChild className='mb-1'>
                  <Link href="/">
                  
                    <Button variant="outline" className="w-full justify-start gap-2">
                    <HomeIcon size={18}/>
                      Inicio
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild className='mb-1'>
                  <Link href="/lista-presente">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <GiftIcon size={18}/>
                      Lista de Presente
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild className='mb-1'>
                  <Link href="/guia-padrinho">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <LibraryIcon size={18}/>
                      Guia padrinho
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/lista-presenca">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <ListChecksIcon size={18}/>
                      Confirmar Presença
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/local-evento">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <MapIcon/>
                      Local Evento
                    </Button>
                  </Link>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
            <article className="text-pretty p-10 pt-20">
                <p className='text-gray-800 text-base text-center '>Queridos padrinhos, o nosso grande dia está chegando e nós só poderíamos dizer sim na presença de vocês. Estamos felizes por aceitarem fazer parte da nossa história.</p>
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
                    <p className='text-gray-800 text-base text-center '>Queremos que você se sinta elegante e confortável, por isso, ninguém melhor do que você para escolher o modelo de vestido que mais lhe agrada. Escolhemos a cor fúcsia.</p>
                        <div className='flex items-center justify-center pt-10'>
                            <Image className='rounded-lg'
                                src="/vestido-madrinha.jpg"
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
                    <p className='text-gray-800 text-base text-center '>Para os homens é mais fácil, não é? Gostaríamos que utilizassem terno preto, camisa branca e gravata fúcsia, que é um presente nosso para vocês.</p>
                    <div className='flex items-center justify-center pt-10'>
                        <Image className='rounded-lg'
                            src="/gravata-padrinho.jpg"
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
                    <p className='text-gray-800 text-base text-center '>Chegue com 30 minutos de antecedência. Tire muitas fotos e nos ajude a eternizar esse momento. Ore pelo nosso futuro e divirta-se muito.
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
            <hr className="border-t-2 border-gray-300 my-4"/>
            <div className='flex items-center justify-center pt-5'>
                        <Image className=''
                            src="/marca_submarca-logo.png"
                            width={80}
                            height={70}
                            sizes='100vw'
                            alt='Calendario'
                        />
                    </div>
            </footer>
        </div>
    )
}