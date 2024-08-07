"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon, HomeIcon, GiftIcon, LibraryIcon, ListChecksIcon, MapIcon } from 'lucide-react'
import Link from "next/link";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

export default function ListaPresente() {
    interface Product {
        nome: string;
        valor: number;
        quantidade: number;
        descricao: string;
    }

    const handlerFinishPurchaseClick = async (valor: number, descricao: string) => {
        const product : Product = {nome: descricao, quantidade: valor, descricao: descricao, valor: 1};
        const productObject = [];
        productObject.push(product);
        const checkout = await createCheckout(productObject);
        
        const stripe = await loadStripe(
            `${process.env.STRIPE_PUBLIC_KEY}`
        );

        stripe?.redirectToCheckout({
            sessionId: checkout
        });
    }

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
            <div className="flex flex-col items-center mt-5">
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Lava louças</p>
                            <p className='break-all font-sans font-semibold'>R$:1.800,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(1800), 'Lava louças')}>
                            <p className='font-sans font-medium'>PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Forno elétrico</p>
                            <p className='break-all font-sans font-semibold'>R$:500,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(500), 'Forno elétrico')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Exaustor</p>
                            <p className='break-all font-sans font-semibold'>R$:400,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(400), 'Exaustor')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Faqueiro</p>
                            <p className='break-all font-sans font-semibold'>R$:500,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(500), 'Faqueiro')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Jogo de xícaras</p>
                            <p className='break-all font-sans font-semibold'>R$:150,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(150), 'Jogo de xícaras')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Jogo Jantar</p>
                            <p className='break-all font-sans font-semibold'>R$:400,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(400), 'Jogo Jantar')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Jogo Taças</p>
                            <p className='break-all font-sans font-semibold'>R$:150,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(150), 'Jogo Taças')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Liquidificador</p>
                            <p className='break-all font-sans font-semibold'>R$:180,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(180), 'Liquidificador')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Batedeira</p>
                            <p className='break-all font-sans font-semibold'>R$:300,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(300), 'Batedeira')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Multiprocessador</p>
                            <p className='break-all font-sans font-semibold'>R$:300,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(300), 'Multiprocessador')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Sanduicheira</p>
                            <p className='break-all font-sans font-semibold'>R$:150,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(150), 'Sanduicheira')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Cafeteira</p>
                            <p className='break-all font-sans font-semibold'>R$:400,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(400), 'Cafeteira')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Panela Elétrica de arroz </p>
                            <p className='break-all font-sans font-semibold'>R$:300,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(300), 'Panela Elétrica de arroz')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Panela Eletrica de 
                            feijão</p>
                            <p className='break-all font-sans font-semibold'>R$:300,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(300), 'Panela Eletrica de feijão')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Espremedor de frutas</p>
                            <p className='break-all font-sans font-semibold'>R$:200,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(200), 'Espremedor de frutas')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Mesa de jantar</p>
                            <p className='break-all font-sans font-semibold'>R$:1.500,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(1500), 'Mesa de jantar')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Ventilador de teto</p>
                            <p className='break-all font-sans font-semibold'>R$:400,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(400), 'Ventilador de teto')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Aspirador de pó vertical</p>
                            <p className='break-all font-sans font-semibold'>R$:250,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(250), 'Aspirador de pó vertical')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Aspirador de pó</p>
                            <p className='break-all font-sans font-semibold'>R$:400,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(400), 'Aspirador de pó')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>Secadora de roupas</p>
                            <p className='break-all font-sans font-semibold'>R$:2.000,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(2000), 'Secadora de roupas')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>VOUCHER</p>
                            <p className='break-all font-sans font-semibold'>R$:200,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(200), 'VOUCHER')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>VOUCHER</p>
                            <p className='break-all font-sans font-semibold'>R$:300,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(300), 'VOUCHER')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>VOUCHER</p>
                            <p className='break-all font-sans font-semibold'>R$:500,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(500), 'VOUCHER')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
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
                        <article className='flex flex-col pl-5 justify-end'>
                            <p className='break-all font-sans font-medium text-custom_gray'>VOUCHER</p>
                            <p className='break-all font-sans font-semibold'>R$:1.000,00</p>
                        </article>
                    </div>
                    <div className='pl-1 pr-1 pb-1 pt-2'>
                        <Button className='w-full' onClick={() =>handlerFinishPurchaseClick(Number(1000), 'VOUCHER')}>
                            <p className='font-sans font-medium' >PRESENTEAR</p>
                        </Button>
                    </div>
                </div>
            </div> 
        </>
    )
}