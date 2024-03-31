// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharlene Bush", "Ross Vazquez", "Carey Barr"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubes.com",
//     eyeColor: "blue",
//     friends: ["Moore Hensley", "Ross Vazquez", "Carey Barr"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@flotonic.com",
//     eyeColor: "green",
//     friends: ["Moore Hensley", "Sharlene Bush", "Carey Barr"],
//     isActive: false,
//     balance: 1312,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Carey Barr"],
//     isActive: true,
//     balance: 2493,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nosplode.com",
//     eyeColor: "blue",
//     friends: ["Moore Hensley", "Sharlene Bush", "Ross Vazquez"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [],
//     isActive: false,
//     balance: 1493,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthonty@voratak.com",
//     eyeColor: "brown",
//     friends: ["Elma Head", "Carey Barr"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // Завдання 1
// // Отримати масив імен всіх користувачів (поле name).
// function getUserNames(users) {
//   // Створити пустий масив для зберігання імен
//   const names = [];

//   // Перебрати всі об'єкти користувачів
//   for (const user of users) {
//     // Отримати ім'я користувача
//     const name = user.name;

//     // Додати ім'я до масиву
//     names.push(name);
//   }

//   // Повернути масив імен
//   return names;
// }
// // const userNames = getUserNames(users);

// console.log(userNames); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// // Завдання 2
// // Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// function getUsersWithEyeColor(users, eyeColor) {
//   // Створити пустий масив для зберігання користувачів
//   const filteredUsers = [];

//   // Перебрати всі об'єкти користувачів
//   for (const user of users) {
//     // Отримати колір очей користувача
//     const userEyeColor = user.eyeColor;

//     // Якщо колір очей користувача збігається з заданим, додати його до масиву
//     if (userEyeColor === eyeColor) {
//       filteredUsers.push(user);
//     }
//   }

//   // Повернути масив користувачів
//   return filteredUsers;
// }
// // const blueEyedUsers = getUsersWithEyeColor(users, "blue");

// console.log(blueEyedUsers);

// // const greenEyedUsers = getUsersWithEyeColor(users, "green");

// console.log(greenEyedUsers);

// // Завдання 3
// // Отримати масив імен користувачів за статтю (поле gender).
// function getUsersWithGender(users, gender) {
//   // Створити пустий масив для зберігання імен
//   const names = [];

//   // Перебрати всі об'єкти користувачів
//   for (const user of users) {
//     // Отримати стать користувача
//     const userGender = user.gender;

//     // Якщо стать користувача збігається з заданою, додати його ім'я до масиву
//     if (userGender === gender) {
//       names.push(user.name);
//     }
//   }

//   // Повернути масив імен
//   return names;
// }

// const maleUsers = getUsersWithGender(users, "male");

// console.log(maleUsers)
// const femaleUsers = getUsersWithGender(users, "female");

// console.log(femaleUsers)
// // Завдання 4
// // Отримати масив тільки неактивних користувачів (поле isActive).
// function getInactiveUsers(users) {

//   const inactiveUsers = [];
//   for (const user of users) {
//     const userIsActive = user.isActive;
//     if (!userIsActive) {
//       inactiveUsers.push(user);
//     }
//   }
//   return inactiveUsers;
// }
// const inactiveUsers = getInactiveUsers(users);
// console.log(inactiveUsers);

// //////////////////////////////

// // objecrs

// const userNames = getUserNames(users);

// console.log(userNames); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// // Завдання 2
// // Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// function getUsersWithEyeColor(users, eyeColor) {
//   // Створити пустий масив для зберігання користувачів
//   const filteredUsers = [];

//   // Перебрати всі об'єкти користувачів
//   for (const user of users) {
//     // Отримати колір очей користувача
//     const userEyeColor = user.eyeColor;

//     // Якщо колір очей користувача збігається з заданим, додати його до масиву
//     if (userEyeColor === eyeColor) {
//       filteredUsers.push(user);
//     }
//   }

//   // Повернути масив користувачів
//   return filteredUsers;
// }
// const blueEyedUsers = getUsersWithEyeColor(users, "blue");

// console.log(blueEyedUsers);

// const greenEyedUsers = getUsersWithEyeColor(users, "green");

// console.log(greenEyedUsers);

// // Завдання 3
// // Отримати масив імен користувачів за статтю (поле gender).
// function getUsersWithGender(users, gender) {
//   // Створити пустий масив для зберігання імен
//   const names = [];

//   // Перебрати всі об'єкти користувачів
//   for (const user of users) {
//     // Отримати стать користувача
//     const userGender = user.gender;

//     // Якщо стать користувача збігається з заданою, додати його ім'я до масиву
//     if (userGender === gender) {
//       names.push(user.name);
//     }
//   }

//   // Повернути масив імен
//   return names;
// }

// // const maleUsers = getUsersWithGender(users, "male");

// // console.log(maleUsers)
// // const femaleUsers = getUsersWithGender(users, "female");

// // console.log(femaleUsers)
// // Завдання 4
// // Отримати масив тільки неактивних користувачів (поле isActive).
// function getInactiveUsers(users) {

//   const inactiveUsers = [];
//   for (const user of users) {
//     const userIsActive = user.isActive;
//     if (!userIsActive) {
//       inactiveUsers.push(user);
//     }
//   }
//   return inactiveUsers;
// }
// // const inactiveUsers = getInactiveUsers(users);
// console.log(inactiveUsers);

// // завдання 7
// // /* * Типів транзацкій всього два. * Можна покласти або зняти гроші з рахунку. */const Transaction = {
// //   DEPOSIT: 'deposit',
// //   WITHDRAW: 'withdraw',};
// // /* * Кожна транзакція - це об'єкт з властивостями: id, type і amount */
// // const account = {
// //   // Поточний баланс рахунку
// //   balance: 0,
// //   // Історія транзакцій
// //   transactions: [],
// //   /*   * Метод створює і повертає об'єкт транзакції.   * Приймає суму і тип транзакції.   */
// //   createTransaction(amount, type) {}
// //   /*   * Метод відповідає за додавання суми до балансу.   * Приймає суму танзакції.   * Викликає createTransaction для створення об'єкта транзакції   * після чого додає його в історію транзакцій   */
// //   deposit(amount) {},
// //   /*   * Метод відповідає за зняття суми з балансу.   * Приймає суму танзакції.   * Викликає createTransaction для створення об'єкта транзакції   * після чого додає його в історію транзакцій.   *   * Якщо amount більше, ніж поточний баланс, виводь повідомлення   * про те, що зняття такої суми не можливо, недостатньо коштів.   */
// //   withdraw(amount) {},
// //   /*   * Метод повертає поточний баланс   */
// //   getBalance() {},
// //   /*   * Метод шукає і повертає об'єкт транзакції по id   */
// //   getTransactionDetails(id) {},
// //   /*   * Метод повертає кількість коштів   * певного типу транзакції з усієї історії транзакцій   */
// //   getTransactionTotal(type) {},};

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const id = Math.floor(Math.random() * 1000000);
//     const transaction = {
//       id,
//       type,
//       amount,
//     };
//     return transaction;
//   },

//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.error("Недостатньо коштів на рахунку!");
//       return;
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     return this.transactions.find((transaction) => transaction.id === id);
//   },

  /*
   * Метод повертає загальну суму коштів
   * певного типу транзакції з усієї історії транзакцій
   */
//   getTransactionTotal(type) {
//     const total = this.transactions.reduce((acc, transaction) => {
//       if (transaction.type === type) {
//         acc += transaction.amount;
//       }
//       return acc;
//     }, 0);
//     return total;
//   },
// };


