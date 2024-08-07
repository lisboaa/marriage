import Head from 'next/head'
import Image from 'next/image'

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon, HomeIcon, GiftIcon, LibraryIcon, ListChecksIcon, MapIcon } from 'lucide-react'
import Link from "next/link";

export default function ListaPresente() {
    return (
      <>
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
                <Link href="/lista-presente">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <MapIcon/>
                    Local Evento
                  </Button>
                </Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-4xl flex justify-center'>Local Evento</h1>
          <span className='w-2/3 text-xl mt-28 text-wrap font-sans font-medium pl-5'>Saída para Campo Mourão. Rodovia 317, km 114, Maringá 87015090</span>
          <a className='text-cyan-600 text-xl mt-5 text-wrap flex justify-center pt-10' target='_blank' href='https://maps.app.goo.gl/amvCThSAUin7Mxwb9?g_st=aw'>Localização</a>
        </div>
          
        <div className="flex flex-col items-center justify-center mt-10">
          <a target='_blank' href='https://maps.app.goo.gl/amvCThSAUin7Mxwb9?g_st=aw'>
            <Image className='rounded-lg'
              src="/mapa-local-evento.png"
              width={400}
              height={500}
              sizes='100vw'
              alt='Calendario'
            />
          </a>

        </div>
      </>
      
      );
}