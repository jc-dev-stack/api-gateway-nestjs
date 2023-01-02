-- CreateTable
CREATE TABLE "Path" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "bearerToken" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Path_tag_key" ON "Path"("tag");
