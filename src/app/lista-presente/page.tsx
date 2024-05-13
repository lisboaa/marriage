import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Link from "next/link";
export default function GuiaPadrinho() {
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
            <div className="flex flex-col items-center">
                <div className='h-[210] w-80 rounded-l-md shadow-md flex flex-col'>
                    <div className=" h-[300] flex flex-row">
                        <Image
                            src='/lava-louca.jpeg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>sfasdfasdfasdfaasdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            <p className='break-all pt-5'>R$:</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full'>
                            <p>COMPRAR</p>
                        </Button>
                    </div>
                </div>
                <div className='h-[210] w-80 rounded-l-md shadow-md flex flex-col mt-16'>
                    <div className=" h-[300] flex flex-row">
                        <Image
                            src='/lava-louca.jpeg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>sfasdfasdfasdfaasdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            <p className='break-all pt-5'>R$:</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full'>
                            <p>COMPRAR</p>
                        </Button>
                    </div>
                </div>
                <div className='h-[210] w-80 rounded-l-md shadow-md flex flex-col mt-16'>
                    <div className=" h-[300] flex flex-row">
                        <Image
                            src='/lava-louca.jpeg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>sfasdfasdfasdfaasdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            <p className='break-all pt-5'>R$:</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full'>
                            <p>COMPRAR</p>
                        </Button>
                    </div>
                </div>
                <div className='h-[210] w-80 rounded-l-md shadow-md flex flex-col mt-16'>
                    <div className=" h-[300] flex flex-row">
                        <Image
                            src='/lava-louca.jpeg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>sfasdfasdfasdfaasdsaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            <p className='break-all pt-5'>R$:</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full'>
                            <p>COMPRAR</p>
                        </Button>
                    </div>
                </div>
            </div> 
        </>
    )
}