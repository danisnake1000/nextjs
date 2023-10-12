import { prisma } from "@/libs/prisma";

const listarAnalisis = async () => {
  return await prisma.analysis.findMany();
};

const Analyis = async () => {
  const ana = await listarAnalisis();












  
  return (
    <div className="bg-red-400 py-2 mx-2 font-bold text-xl">
      {ana.map((anali) => (
        <div className="py-2 text-black flex justify-center " key={anali.id}>
          {anali.AnalisisDefluidosCorporales} {anali.bacteriologia}{" "}
          {new Date(anali.createdAt).toLocaleDateString()}
        </div>
      ))}
    </div>
  );
};

export default Analyis;
