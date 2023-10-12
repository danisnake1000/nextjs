-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombrePaciente" TEXT NOT NULL,
    "nombrePropietario" TEXT NOT NULL,
    "nombreVeterinaria" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "raza" TEXT NOT NULL,
    "edad" INTEGER,
    "peso" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Animal" ("createdAt", "edad", "especie", "id", "nombrePaciente", "nombrePropietario", "nombreVeterinaria", "peso", "raza") SELECT "createdAt", "edad", "especie", "id", "nombrePaciente", "nombrePropietario", "nombreVeterinaria", "peso", "raza" FROM "Animal";
DROP TABLE "Animal";
ALTER TABLE "new_Animal" RENAME TO "Animal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
