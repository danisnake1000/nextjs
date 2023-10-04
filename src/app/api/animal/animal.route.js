import { NextResponse } from "next/server";
import { prisma  } from "@/libs/prisma"

 export async function GET() {
    const getAnimal = await prisma.animal.findMany()
    return NextResponse.json(getAnimal)
}
export function POST() {
    return NextResponse.json("creando animales")
}
