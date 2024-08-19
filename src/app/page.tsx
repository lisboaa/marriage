import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger, } from '@/components/ui/sheet'
import { Carousel,CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { MenuIcon, HomeIcon, GiftIcon, LibraryIcon, ListChecksIcon, MapIcon, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link";
import  CountdownTimerProps from '@/components/CountdownTimerProps';

export default function Home() {
  return (
    <div className='relative w-screen h-screen overflow-x-hidden  bg-[#094e43f5]' style={{ backgroundImage: "url('/back-ground-img.png')"}}>
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

      <div className='flex flex-col h-screen bg-cream-soft items-center justify-center text-center'>
        <div className="mb-10"> {/* Ajuste na margem */}
          <Image
            src="/marca_submarca_1.png"
            width={1200}
            height={800}
            alt='Logo'
          />
        </div>
        <CountdownTimerProps targetDate="2024-11-15T00:00:00" />

      </div>

      <div className='flex flex-col h-screen bg-cream-soft items-center justify-center text-center mt-28'>
        <div>
          <div className='flex flex-col items-center justify-center text-center'>
            <Heart size={40}/>
          </div>
          <h1 className="text-4xl font-bold mb-5">NOSSA HISTORIA</h1>
          {/* <Carousel className="w-full max-w-4xl h-auto mb-5">
            <CarouselContent>
              <CarouselItem>
                <Image src="/juntos-beijo.jpg" width={300} height={300} alt='Foto dos Noivos' layout="responsive" />
              </CarouselItem>
              <CarouselItem>
                <Image src="/juntos-praca.jpg" width={300} height={300} alt='Foto dos Noivos' layout="responsive" />
              </CarouselItem>
            </CarouselContent>
          </Carousel> */}
          <p className="px-5 text-lg">
          E após 6 anos de muitas alegrias e descobertas, com a benção de Deus, nossa história de amor terá um novo capítulo, e é  claro que você faz parte disso e com imenso prazer te convidamos a vivenciar esse momento conosco, te aguardamos para fazer do nosso  dia 15, ainda mais especial.
          </p>
        </div>
      </div>

    </div>
  )
}
