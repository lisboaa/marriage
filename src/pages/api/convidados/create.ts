import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function Create(request: NextApiRequest, response: NextApiResponse) {
    const { nome,cpf,telefone, quantidade_adulto, quantidade_crianca } = request.body
    console.log('passou aqui' + 'valores' + nome);
    
    await prisma.convidado.create({
        data: {
            nome,
            cpf,
            telefone,
            quantidade_adulto,
            quantidade_crianca,

        }
    })

    return response.status(201).json({})
}