let user = {
    hobby: "срать",
    premium: true,
}
user.mood = "happy";
user["hobby"] = "skydiving"
user["premium"] = false
// user.socialStatus = "debil, loch, nikomu ne treba, pridurok";
// console.log(user[key])


for (const i of Object.keys(user)) {
  console.log(`${i}: ${user[i]}`);
}
// перше завдання закінченно інше зробити завтра