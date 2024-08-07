"use client"

import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import Link from "next/link";
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState } from 'react'
import { MenuIcon, HomeIcon, GiftIcon, LibraryIcon, ListChecksIcon, MapIcon } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    nome: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(30, {
        message: "Nome e sobrenome já é o suficiente para confimação de presença.",
    }),
    cpf: z.string().min(12, {
        message: "Digite o numero de CPF completo.",
      }).max(16, {
        message: "Limite de caracteres ultrapassado.",
      }),
    telefone: z.string().min(10, {
    message: "Informe o DDD junto ao numero.",
    }).max(17,{
        message: "Limite de caracteres ultrapassado.",
    }),
  })

export default function ListaPresenca() {
    
    const [alertInfo, setAlertInfo] = useState({ show: false, title: '', description: '', type: '' });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          nome: "",
          cpf: "",
          telefone: ""
        },
      })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('passou aqui ss' + 'valores' + values.nome + values.cpf + values.telefone);
        
        const isCpfValido = validaCpf(values.cpf)

        if(isCpfValido) {

            const listaConvidados  = await fetch('http://localhost:3000/api/buscar-convidados/buscar', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'cpf': values.cpf
                }
            })
            const dadosResponse = await listaConvidados.json()
            console.log(dadosResponse);
            console.log('Quantidade de convidados: ' + dadosResponse.convidados.length);
            
            const pularRegra = false;

            if(dadosResponse.convidados.length <= 0) {
                const response  = await fetch('http://localhost:3000/api/convidados/create', {
                    method: 'POST',
                    body: JSON.stringify({nome: values.nome, cpf: values.cpf, telefone: values.telefone, quantidade_adulto: 0, quantidade_crianca: 0}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
    
                if (response.ok) {
                    // Limpa o formulário apenas se a resposta for bem-sucedida
                    form.reset();
                    setAlertInfo({
                        show: true,
                        title: '',
                        description: 'Sua presença foi confirmada com sucesso.',
                        type: 'success'  // Assumindo que o componente Alert pode aceitar um tipo para estilização
                    })
        
                    setTimeout(() => {
                        setAlertInfo(prevState => ({
                        ...prevState,
                        show: false
                        }));
                    }, 5000);
        
                    console.log('Dados enviados com sucesso!');
                } else {
                    form.reset();
                    setAlertInfo({
                        show: true,
                        title: 'Atenção!',
                        description: 'Houve um problema na confirmação da presença, tente novamente.',
                        type: 'error'
                    });
                    setTimeout(() => {
                        setAlertInfo(prevState => ({
                        ...prevState,
                        show: false
                        }));
                    }, 5000);
                    console.log('Erro na persistência');
                }
            } else {
                form.reset();
                setAlertInfo({
                    show: true,
                    title: 'Atenção!',
                    description: 'Sua presença já foi confirmada!.',
                    type: 'error'
                });
                setTimeout(() => {
                    setAlertInfo(prevState => ({
                    ...prevState,
                    show: false
                    }));
                }, 5000);
            }
        } else {
            form.reset();
            setAlertInfo({
                show: true,
                title: 'Atenção!',
                description: 'Cpf invalido, digite novamente seu CFP.',
                type: 'error'
            });
            setTimeout(() => {
                setAlertInfo(prevState => ({
                ...prevState,
                show: false
                }));
            }, 5000);
        }
            
    }

    function validaCpf(cpf: any) {
        cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

        // Verifica se o CPF tem 11 dígitos e se não é uma sequência de dígitos repetidos
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

        let soma = 0;
        let resto;

        // Calcula o primeiro dígito verificador
        for (let i = 1; i <= 9; i++) 
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;

        soma = 0;

        // Calcula o segundo dígito verificador
        for (let i = 1; i <= 10; i++) 
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;

        return true;
    }

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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="pt-10 px-4">
                    <div className="w-full max-w-xs mx-auto">
                        {/* <h2 className="text-center text-xl font-semibold text-zinc-900 mb-4">Confirme sua Presença Ilustre em Nosso Casamento</h2> */}
                        <FormField
                            control={form.control}
                            name="nome"  // Mudança de 'username' para 'nome', se esse for o nome correto esperado pelo backend.
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input  placeholder="Seu nome completo" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cpf"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cpf</FormLabel>
                                    <FormControl>
                                        <Input placeholder="000.000.000-00" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="telefone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="mt-4 w-full">Confirmar Presença</Button>
                    </div>
                </form>
            </Form>
            {alertInfo.show && (
                <Alert className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full px-4 z-50">
                <div className="mx-auto bg-white shadow-lg rounded-lg p-6 max-w-xs">
                    {/* <CheckIcon className="h-4 w-4" /> */}
                    <AlertTitle>{alertInfo.title}</AlertTitle>
                    <AlertDescription>{alertInfo.description}</AlertDescription>
                </div>
            </Alert>
            )}
        </div>
    )
}