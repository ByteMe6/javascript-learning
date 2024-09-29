const users = [
  { name: "Alice", role: "user" },
  { name: "Bob", role: "admin" },
  { name: "Charlie", role: "user" },
  { name: "David", role: "admin" },
];

const updateUserRole = (allUsers, userName) => {

  return new Promise((resolve, reject) => {
     let tablicaLochov = allUsers.map((user) =>
      user.name === userName
        ? { ...user, role: user.role === "user" ? "admin" : "user" }
        : user
    );
    resolve(tablicaLochov)
  });
};

const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Зараз працює так
 */
updateUserRole(users, "Alice", logger);
updateUserRole(users, "Bob", logger);

/*
 * Повинно працювати так
 */
updateUserRole(users, "Alice").then(logger);
updateUserRole(users, "Bob").then(logger);
