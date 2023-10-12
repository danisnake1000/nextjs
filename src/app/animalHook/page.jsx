import { prisma } from "@/libs/prisma";
// import { useEffect, useState } from "react";

const listarAnimal = async () => {
  return await prisma.animal.findMany();
};

const Hook = async () => {
  const animal = await listarAnimal();
  //   const [animal, setAnimal] = useState();

  //  useEffect(() => {
  //   fetch("/api/animal")
  // .then(response=> response.json())
  // .then((data) =>
  //     setAnimal(data)

  // )

  // }, [])

  return (
    <div className="bg-red-400 py-2 mx-2 font-bold text-xl">
    {animal.map((animal) => (
      <div className="py-2 text-black flex justify-center " key={animal.id}>
        {animal.especie} {animal.nombrePaciente}
       
      </div>
    ))}
  </div>
  );
};

export default Hook;
