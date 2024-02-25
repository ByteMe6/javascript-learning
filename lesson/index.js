// fffffffffff
// fff
// fff
// ffffffffff
// fff
// fff
// fff
// fff

// uuuu        uuuu
// uuuu        uuuu
// uuuu        uuuu
// uuuu        uuuu
// uuuu        uuuu
// uuuu        uuuu
// uuuu        uuuu
//  uuuu      uuuu
//    uuuuuuuu

//     nnnnnnnn
//   nnnn    nnnn
//  nnnn      nnnn
//  nnnn      nnnn
//  nnnn      nnnn
//  nnnn      nnnn
//  nnnn      nnnn
//  nnnn      nnnn
//  nnnn      nnnn

//        ccccccccccc
//     ccccccc
//   ccccccc
//  ccccccc
//  ccccccc
//  ccccccc
//    ccccccc
//     ccccccc
//        ccccccccccc

//   tttt
//   tttt
//   tttt
//   tttttttt
//   tttttttt
//   tttt
//   tttt
//   tttt  tttt
//   tttttttt

//    iii
//   iiiii
//    iii

//  iiiiiiii
//  iiiiiiii
//  iiiiiiii
//  iiiiiiii
//  iiiiiiii
//  iiiiiiii
//  iiiiiiii
//  iiiiiiii


//      ooooooooo
//      ooooooooo
//  ooooo       ooooo
//  ooooo       ooooo
// ooooo         ooooo
// ooooo         ooooo
//  ooooo       ooooo
//  ooooo       ooooo
//      oooooooooo
//      oooooooooo

//     nnnnnnnn
//  nnnn    nnnn
// nnnn      nnnn
// nnnn      nnnn
// nnnn      nnnn
// nnnn      nnnn
// nnnn      nnnn
// nnnn      nnnn
// nnnn      nnnn

function doCoffee(water, milk, coffee) {
  console.log("вода : " + water, "молока : " + milk, "кава : " + coffee);

  if (coffee && milk && water) {
    console.log("Роблю каву з молоком");
  } else if (water && coffee) {
    console.log("Роблю каву ");
  } else if (water) {
    console.log("Додайте каву та молоко бо є лише вода");
  } else {
    console.log("тут нічого немає");
  }
}
a = 1 //same as let