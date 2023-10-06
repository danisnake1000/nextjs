
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
    parasitologia,
    endocrinologia,
    serologia,
    estudiosMoleculares,
    citopatologia,
    bacteriologia,
    micologia,
    toxicologia,
    orina,
    otros,
    animalId
  } = await request.json();
  const createAnalyis = await prisma.analysis.create({
    data: {
      hematologia,
      bioquimica,
      AnalisisDefluidosCorporales,
      parasitologia,
      endocrinologia,
      serologia,
      estudiosMoleculares,
      citopatologia,
      bacteriologia,
      micologia,
      toxicologia,
      orina,
      otros,
      animalId
    },
  });
  return NextResponse.json(" analysis creado");
}
