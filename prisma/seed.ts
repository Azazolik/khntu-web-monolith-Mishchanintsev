
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Початок заповнення бази даних');

  const category1 = await prisma.category.create({
    data: { name: 'Українська література' }
  });

  const category2 = await prisma.category.create({
    data: { name: 'Фентезі' }
  });

  await prisma.product.createMany({
    data: [
      { title: 'Кобзар', price: 250, categoryId: category1.id },
      { title: 'Лісова пісня', price: 200, categoryId: category1.id },
      { title: 'Гаррі Поттер і філософський камінь', price: 450, categoryId: category2.id }
    ]
  });

  console.log('Базу даних успішно заповнено!');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
