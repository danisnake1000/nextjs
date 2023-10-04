import { NextResponse } from "next/server"
import {prisma} from "@/libs/prisma"

export function GET() {
    return NextResponse.json("opteniendo por id animales")
}
export function PUT() {
    return NextResponse.json("actualizando animales")
}
export function DELETE() {
    return NextResponse.json("borrando animales")
}