-- CreateTable
CREATE TABLE "Animation" (
    "codeAnimation" TEXT NOT NULL,
    "codeType" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "nbPlaceDispo" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "commentaire" TEXT NOT NULL,
    "limiteAge" INTEGER NOT NULL,
    "difficulte" TEXT NOT NULL,
    "dateCreation" DATE NOT NULL,
    "dateValidite" DATE NOT NULL,
    "duree" INTEGER NOT NULL,
    "tarif" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Animation_pkey" PRIMARY KEY ("codeAnimation")
);

-- CreateTable
CREATE TABLE "TypeAnim" (
    "code" TEXT NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "TypeAnim_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Activite" (
    "date" DATE NOT NULL,
    "codeEtat" TEXT NOT NULL,
    "heureRendezVous" TIME NOT NULL,
    "heureDebut" TIME NOT NULL,
    "heureFin" TIME NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "nomResponsable" TEXT NOT NULL,
    "prenomResponsable" TEXT NOT NULL,
    "dateAnnule" DATE,
    "codeAnimation" TEXT NOT NULL,

    CONSTRAINT "Activite_pkey" PRIMARY KEY ("codeAnimation","date")
);

-- CreateTable
CREATE TABLE "EtatActivite" (
    "code" TEXT NOT NULL,
    "nom" TEXT NOT NULL,

    CONSTRAINT "EtatActivite_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "Animation_codeAnimation_key" ON "Animation"("codeAnimation");

-- CreateIndex
CREATE UNIQUE INDEX "TypeAnim_code_key" ON "TypeAnim"("code");

-- CreateIndex
CREATE UNIQUE INDEX "EtatActivite_code_key" ON "EtatActivite"("code");

-- AddForeignKey
ALTER TABLE "Animation" ADD CONSTRAINT "Animation_codeType_fkey" FOREIGN KEY ("codeType") REFERENCES "TypeAnim"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activite" ADD CONSTRAINT "Activite_codeEtat_fkey" FOREIGN KEY ("codeEtat") REFERENCES "EtatActivite"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activite" ADD CONSTRAINT "Activite_codeAnimation_fkey" FOREIGN KEY ("codeAnimation") REFERENCES "Animation"("codeAnimation") ON DELETE CASCADE ON UPDATE CASCADE;
