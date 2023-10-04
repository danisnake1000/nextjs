import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json("obteniendo analysis")
}
export function POST() {
    return NextResponse.json("creando  analysis")
}
