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
                            <p className='break-all'>Lava louças</p>
                            <p className='break-all pt-5'>R$:1.800,00</p>
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
                            src='/forno-eletrico.jpg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Forno elétrico</p>
                            <p className='break-all pt-5'>R$:500,00</p>
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
                            src='/coifa.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Exaustor</p>
                            <p className='break-all pt-5'>R$:400,00</p>
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
                            src='/faqueiro.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Faqueiro</p>
                            <p className='break-all pt-5'>R$:500,00</p>
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
                            src='/jogo-xicara.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Jogo de xícaras</p>
                            <p className='break-all pt-5'>R$:150,00</p>
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
                            src='/jogo-jantar.jpg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Jogo Jantar</p>
                            <p className='break-all pt-5'>R$:400,00</p>
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
                            src='/jogo-taca.jpeg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Jogo Taças</p>
                            <p className='break-all pt-5'>R$:150,00</p>
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
                            src='/liquidificador.jpg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Liquidificador</p>
                            <p className='break-all pt-5'>R$:180,00</p>
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
                            src='/batedeira.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Batedeira</p>
                            <p className='break-all pt-5'>R$:300,00</p>
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
                            src='/multiprocessador.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Multiprocessador</p>
                            <p className='break-all pt-5'>R$:300,00</p>
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
                            src='/sanduicheira.jpg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Sanduicheira</p>
                            <p className='break-all pt-5'>R$:150,00</p>
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
                            src='/cafeteira.jpg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Cafeteira</p>
                            <p className='break-all pt-5'>R$:400,00</p>
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
                            src='/panela-arroz.jpg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Panela Elétrica de arroz </p>
                            <p className='break-all pt-5'>R$:300,00</p>
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
                            src='/panela-eletrica-feijao.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Panela Eletrica de 
                            feijão</p>
                            <p className='break-all pt-5'>R$:300,00</p>
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
                            src='/espremedor-fruta.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Espremedor de frutas</p>
                            <p className='break-all pt-5'>R$:200,00</p>
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
                            src='/mesa-de-jantar-sao-francisco.jpg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Mesa de jantar</p>
                            <p className='break-all pt-5'>R$:1.500,00</p>
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
                            src='/ventilador.jpg'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Ventilador de teto</p>
                            <p className='break-all pt-5'>R$:400,00</p>
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
                            src='/aspirador.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Aspirador de pó vertical</p>
                            <p className='break-all pt-5'>R$:250,00</p>
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
                            src='/aspirador-po.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Aspirador de pó</p>
                            <p className='break-all pt-5'>R$:400,00</p>
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
                            src='/secadora.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>Secadora de roupas</p>
                            <p className='break-all pt-5'>R$:2.000,00</p>
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
                            src='/voucher.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>VOUCHER</p>
                            <p className='break-all pt-5'>R$:200,00</p>
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
                            src='/voucher1.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>VOUCHER</p>
                            <p className='break-all pt-5'>R$:300,00</p>
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
                            src='/voucher2.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>VOUCHER</p>
                            <p className='break-all pt-5'>R$:500,00</p>
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
                            src='/voucher3.png'
                            alt=''
                            height={100}
                            width={115}
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                            style={{
                                objectFit: "contain"
                            }}
                        />
                        <article className='flex flex-col pt-5 pl-5 pr-5'>
                            <p className='break-all'>VOUCHER</p>
                            <p className='break-all pt-5'>R$:1.000,00</p>
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