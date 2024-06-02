const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Estudios Bíblicos" },
                { name: "Leyes y Principios Bnei Noach" },
                { name: "Historia y Cultura" },
                { name: "Filosofía" },
                { name: "Hebreo" },
                { name: "Liderazgo" },
                { name: "Ética" },
                { name: "Ciencia" },
                { name: "Torah Avanzado" },
            ]
        });

        console.log("Success");
    } catch (error) {
        console.log("Error al sembrar las categorías de la base de datos", error);
    } finally {
        await database.$disconnect();
    }
}

main();