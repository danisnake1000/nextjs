"use client";

const Animal = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const nombrePaciente = e.target.nombrePaciente.value;
     const nombrePropietario = e.target.nombrePropietario.value;
    const nombreVeterinaria = e.target.nombreVeterinaria.value;
    const especie = e.target.especie.value;
    const raza  = e.target.raza.value;
    // const edad = e.target.edad.value;
    // const peso = e.target.peso.value;
    console.log(nombrePaciente,nombrePropietario,
      nombreVeterinaria,
      especie,
      raza,
      // edad,
      // peso,
      );

    const res = await fetch("/api/animal", {
      method: "POST",
      body: JSON.stringify({
        nombrePaciente,
        nombrePropietario,
        nombreVeterinaria,
        especie,
        raza,
        // edad,
        // peso,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/4" onSubmit={onSubmit}>
        <label htmlFor="animal">Nombre Animal</label>
        <input
          className="bg-gray-400 p-4 mb-10 w-full"
          type="
       "
          name="nombrePaciente"
          id="nombrePaciente"
        />
        <label htmlFor="animal">Nombre Animal</label>
        <input
          className="bg-gray-400 p-4 mb-10 w-full"
          type="
       "
          name="nombrePropietario"
          id="nombrePropietario"
        /> 
        <input
          className="bg-gray-400 p-4 mb-10 w-full"
          type="
       "
          name="nombreVeterinaria"
          id="nombreVeterinaria"
        /> 
        <input
          className="bg-gray-400 p-4 mb-10 w-full"
          type="
       "
          name="especie"
          id="especie"
        /> 
        <input
          className="bg-gray-400 p-4 mb-10 w-full"
          type="
       "
          name="raza"
          id="raza"
        /> 
        {/* <input
          className="bg-gray-400 p-4 mb-10 w-full"
          type="
       "
          name="edad"
          id="edad"
        /> 
        <input
          className="bg-gray-400 p-4 mb-10 w-full"
          type="
       "
          name="peso"
          id="peso"
        />  */}
        <button className="bg-blue-500 hover:bg-blue-500  rounded text-white font-bold py-2 px-4">
          crear
        </button>
      </form>
    </div>
  );
};

export default Animal;
