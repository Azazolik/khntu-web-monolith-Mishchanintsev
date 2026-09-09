
1. Опис предметної області 
Інформаційна система "Інтернет-магазин книг" призначена для автоматизації процесу перегляду та придбання книг користувачами.
Система дозволяє користувачам переглядати доступні книги, створювати замовлення та додавати до них необхідні товари. Для кожної книги зберігається інформація про її назву та ціну. Замовлення містить перелік обраних книг, їх кількість та ціну на момент придбання.
Основні сутності предметної області - USER;ORDER;PRODUCT;ORDER_ITEM;CATEGORY;

2. ER-DIAGRAM
erDiagram
 USER ||--o{ ORDER : places
 ORDER ||--|{ ORDER_ITEM : contains
 PRODUCT ||--o{ ORDER_ITEM : included_in
 CATEGORY ||--o{ PRODUCT : contains
 
 USER {
   int id PK
   string email
   string name
 }
 ORDER {
   int id PK
   int userId FK
   datetime createdAt
   float totalAmount
 }
 ORDER_ITEM {
   int id PK
   int orderId FK
   int productId FK
   int quantity
   float priceAtPurchase  
 }
 PRODUCT {
   int id PK
   int categoryId FK
   string title
   float price
 }
 CATEGORY {
   int id PK
   string name
 }


3. Зв'язки між сутностями 
USER - ORDER: один користувач може мати багато замовлень, але кожне замовлення належить одному користувачу(1:N).
CATEGORY - PRODUCT: одна категорія може містити багато книг, але кожна книга належить одній категорії(1:N).
ORDER - ORDER_ITEM: одне замовлення може містити багато позицій, але кожна позиція належить одному замовленню(1:N).
PRODUCT - ORDER_ITEM: одна книга може входити до багатьох позицій різних замовлень, але кожна позиція стосується однієї книги(1:N).
ORDER - PRODUCT: одне замовлення може містити багато книг, а одна книга може бути включена до багатьох замовлень. Цей зв'язок реалізовано через проміжну таблицю ORDER_ITEM(M:N).
