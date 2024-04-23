// old dz
// Завдання 3

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:

// getItems();
// - повертає масив поточних товарів
// addItem(item);
// - отримує новий товар і додає його до поточних
// removeItem(item);
//  - отримує товар і, якщо він є, видаляє його з поточних
class Storage{
  constructor(item) {
    this.item = item;
  }
  getItems() {
    return this.item;
  }
  addItem(item) {
    this.item.push(item)
  }
  removeItem(item){
    let indexof = this.item.indexOf(item);
    if (indexof > -1) {
      this.item.splice(indexof, 1);
    } else {
        return "you are stupid bitch, stop deleting non existing element"
  }}
}

const storage = new Storage([
  "stalker 2 - game",
  "олександер лінтяй та абьюзєр - film",
  "fortnite - game",
  "cyberpank 2077 - game",
  "resident evil 4 - game",
]);

const items = storage.getItems();
console.log(items)
console.log(items);
storage.addItem("narko virus 228 - bad virus");
console.log(items);

storage.removeItem("narko virus 228 - bad virus");
storage.removeItem("cyberpank 2077 - game");
storage.removeItem("Stray - game");




console.log(items);
