import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link";

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
              src="/logo.png"
              width={60}
              height={60}
              alt='Logo'
            />
            </SheetHeader>
            <SheetClose asChild className='mb-1'>
              <Link href="/lista-presente">
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
            <SheetClose asChild>
              <Link href="/card-pessoa">
                <Button variant="outline" className="w-full justify-start gap-2">
                  Teste card
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

      <div className='flex flex-col items-center'>
        <div className="mb-48">
          <Image
            src="/marca_submarca_1.png"
            width={1200}
            height={1200}
            alt='Logo'
          />
        </div>
        <div className='mb-44 px-8'>
          <Image
            src="/marca_logo_1.png"
            width={400}
            height={80}
            alt='Logo'
        />
      </div>
      <div className="mt-auto">        
        <Link href="/">
          <Button variant="outline" className="w-60 rounded-3xl bg-transparent border-solid text-white">
            <span>Lista de Presente</span>
          </Button>
        </Link>
      </div>
    </div>

      <div>
        <Image
          src="/back-ground-img.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100vw', height: 'auto' }}
          alt='Casal'
          objectFit='cover'
        />
      </div>
    </div>
  )
}
