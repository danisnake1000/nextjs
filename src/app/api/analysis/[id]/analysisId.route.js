import { NextResponse } from "next/server"
import { Server } from "@/libs/prisma"

export function GET() {
    return NextResponse.json("opteniendo por id analysis")
}
export function PUT() {
    return NextResponse.json("actualizando analysis")
}
export function DELETE() {
    return NextResponse.json("borrando analysis")
}