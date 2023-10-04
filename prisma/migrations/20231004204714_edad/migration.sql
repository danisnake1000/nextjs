/*
  Warnings:

  - You are about to alter the column `edad` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `peso` on the `Animal` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Animal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "raza" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Animal" ("apellido", "createdAt", "edad", "id", "nombre", "peso", "raza") SELECT "apellido", "createdAt", "edad", "id", "nombre", "peso", "raza" FROM "Animal";
DROP TABLE "Animal";
ALTER TABLE "new_Animal" RENAME TO "Animal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
