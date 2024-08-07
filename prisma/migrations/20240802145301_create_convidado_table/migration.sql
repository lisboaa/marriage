-- CreateTable
CREATE TABLE "Convidado" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "quantidade_adulto" INTEGER NOT NULL,
    "quantidade_crianca" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Convidado_pkey" PRIMARY KEY ("id")
);
