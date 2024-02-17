import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative w-screen h-screen bg-current'>
      <div className='fixed flex flex-row z-10 break-all'>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon/>
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className='text-left text-lg font-semibold'>
              Menu
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt='Logo'
        />
        <ul className='text-xs ps-5 pt-5'>
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
        </ul>
      </div>

      <div className='opacity-80'>
        <Image
          src="/casal.jpeg"
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
