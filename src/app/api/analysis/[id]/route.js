import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  const getAnalysisId = await prisma.analysis.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(getAnalysisId);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const updateAnalysis = await prisma.analysis.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(updateAnalysis);
}
export async function DELETE(request, { params }) {
  const deleteAnalysisId = await prisma.analysis.delete({
    where: {
      id: Number(params.id),
    },
    
  });
  return NextResponse.json(deleteAnalysisId);
}
