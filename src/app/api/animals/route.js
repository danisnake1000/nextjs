import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const getAnimal = await prisma.animal.findMany();
 return NextResponse.json(getAnimal);

}


export async function POST(request) {
  const {
    nombrePaciente,
    nombrePropietario,
    nombreVeterinaria,
    especie,
    raza,
    edad,
    peso,
  } = await request.json();
  const newAnimal = await prisma.animal.create({
    data: {
      id,
      nombrePaciente,
      nombrePropietario,
      nombreVeterinaria,
      especie,
      raza,
      edad,
      peso,
    },
  });
  return NextResponse.json(newAnimal);
}



