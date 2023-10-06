import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const getAnimalId = await prisma.animal.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(getAnimalId);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const actualizado = await prisma.animal.update({
        where:{
            id: Number(params.id)
        },
        data: data
    })
  return NextResponse.json(actualizado);
}
export async function DELETE(request, { params }) {
  try {
    const deleteAnimal = await prisma.animal.delete({
        where: {
          id: Number(params.id),
        },
      });
      return NextResponse.json(deleteAnimal)
  } catch (error) {
return NextResponse.json(error.message)
  }
  
}
