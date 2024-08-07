import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function Buscar(request: NextApiRequest, response: NextApiResponse) {
    const { cpf} = request.headers
    
    const convidados = await prisma.convidado.findMany({
        where: {
            cpf: {
                contains: cpf as string,
            },
        },
    })
    return response.status(201).json({convidados })
}