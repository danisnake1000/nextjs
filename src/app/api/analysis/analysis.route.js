// import {prisma} from "@/libs/prisma"
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const getAnalysis = await prisma.analysis.findMany();
  return NextResponse.json(getAnalysis);
}
export async function POST(request) {
  const {
    hematologia,
    bioquimica,
    AnalisisDefluidosCorporales,
    endocrinologia,
    serologia,
    estudiosMoleculares,
    citopatologia,
    micologia,
    toxicologia,
    orina,
    otros,
  } = await request.json();
  const createAnalyis = await prisma.analysis.create({
    data: {
      id,
      hematologia,
      bioquimica,
      AnalisisDefluidosCorporales,
      endocrinologia,
      serologia,
      estudiosMoleculares,
      citopatologia,
      micologia,
      toxicologia,
      orina,
      otros,
    },
  });
  return NextResponse.json("creando  analysis");
}
