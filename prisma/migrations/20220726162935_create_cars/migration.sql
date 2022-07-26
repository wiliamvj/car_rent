-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "id_car" TEXT NOT NULL,
    "car_name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_id_car_fkey" FOREIGN KEY ("id_car") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
