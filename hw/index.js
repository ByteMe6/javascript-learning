// 1. Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
let bankAcount = {
  userName: "Sananam Ubeeeeg Kariy Andeew",
  userId: 1000,
  password: "пароль не встановлений",
//   balance: 2 + " гривні " + 3 + " копійки",
  balance: 2,

  deposit(amount, pass) {
    if (pass === this.password){
    this.balance += amount;
    console.log(
      `Поповнено рахунок на ${amount} гривень. Ваш новий баланс: ${this.balance} гривень.`
    );
} else{
    console.log("Ти шо хочеш нас обікрати пароль цього лоха " + this.password)
}
  },

  withdraw(amount, pass) {
    if (pass === this.password){
    if (amount > this.balance) {
      console.log(
        `Недостатньо коштів на рахунку. Ваш баланс: ${this.balance} гривень.`
      );
      return;
    }
    this.balance -= amount;
    console.log(
      `Знято ${amount} гривень з рахунку. Ваш новий баланс: ${this.balance} гривень.`
    );}else{
    console.log("Ти шо хочеш нас обікрати пароль цього лоха " + this.password)
    }
  },

  // від мене
  isUserNishiy: true,
  isUserStupid: true,
};

bankAcount.password = "password1234567"
bankAcount.Userloch = "user loch" 
console.log(bankAcount);
bankAcount.withdraw(2, "password1234567")
bankAcount.deposit(5, "password1234567")
bankAcount.deposit(10)

// 2. Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
  temperature: 0,

  isBelowZero() {
    console.log(this.temperature < 0 ? "Температура нижче 0 градусів"  + " точніше " + this.temperature : "Температура вище або рівна 0 градусів" + "точніше " + this.temperature);
  },

  setTemperature(newTemp) {
    this.temperature = newTemp;
  }
};

// Example usage
weather.setTemperature(10)
weather.isBelowZero()
weather.setTemperature(-180320948139)
weather.isBelowZero()


// 3. Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт
const user = {
  name: "Artem",
  email: "",
  password: "",

  login(userEmail, userPassword) {
    this.email = userEmail;
    this.password = userPassword;

    const correctEmail = "lochiVsi@email.com";
    const correctPassword = "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨usersSucks🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨";

    if (this.email === correctEmail && this.password === correctPassword) {
      console.log("Вхід успішний!");
    } else {
      console.log("Неправильний email або пароль. Ти дундук");
    }
  },
};

user.login("lochiVsi@email.com", "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨usersnotSucks🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");
user.login("lochiVsi@email.com", "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨userSucks🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");
user.login("lochiVsi@email.com", "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨userSucksNope🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");
user.login("lochiVsi@email.com", "🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨usersSucks🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");


// 4. Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
const movie = {
  title: "Wonka",
  director: "лох лівий",
  year: 2023,
  rating: 10,

  isHighRating() {
    return this.rating > 8;
  },

  displayInfo(title, dir, year, rate) {
    this.title = title
    this.director = dir
    this.year = year
    this.rating = rate
    console.log(`Фільм: ${this.title} \nРежисер: ${this.director}\nРік випуску: ${this.year}\nРейтинг: ${this.rating}`);
    console.log(this.isHighRating() ? "Високий рейтинг (вище 8)" : "Середній або низький рейтинг (8 або нижче)");
  },
};

movie.displayInfo("Wonka", "лох лівий", 2023, 10);
movie.displayInfo("ace Ventura", "--", 1990, 1);

