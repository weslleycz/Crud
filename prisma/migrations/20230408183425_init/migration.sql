-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
