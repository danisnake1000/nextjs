import React from "react";
import { prisma } from "@/libs/prisma";

const listarAnalisis = async () => {
  return await prisma.analysis.findMany();
};

const Analyis = async () => {
  const ana = await listarAnalisis();

  return (
    <div>
      {ana.map((anali) => (
        <div key={anali.id}>
          {anali.AnalisisDefluidosCorporales} {anali.bacteriologia}{" "}
          {new Date(anali.createdAt).toLocaleDateString()}
        </div>
      ))}
    </div>
  );
};

export default Analyis;
