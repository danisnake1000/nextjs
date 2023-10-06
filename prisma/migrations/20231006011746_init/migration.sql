-- CreateTable
CREATE TABLE "Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombrePaciente" TEXT NOT NULL,
    "nombrePropietario" TEXT NOT NULL,
    "nombreVeterinaria" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "raza" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Analysis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hematologia" TEXT NOT NULL,
    "bioquimica" TEXT NOT NULL,
    "AnalisisDefluidosCorporales" TEXT NOT NULL,
    "parasitologia" TEXT NOT NULL,
    "endocrinologia" TEXT NOT NULL,
    "serologia" TEXT NOT NULL,
    "estudiosMoleculares" TEXT NOT NULL,
    "citopatologia" TEXT NOT NULL,
    "bacteriologia" TEXT NOT NULL,
    "micologia" TEXT NOT NULL,
    "toxicologia" TEXT NOT NULL,
    "orina" TEXT NOT NULL,
    "otros" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "animalId" INTEGER NOT NULL,
    CONSTRAINT "Analysis_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
