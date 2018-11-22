
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {id: 1, value: 'a', position: 1},
        {id: 2, value: 'b', position: 2},
        {id: 3, value: 'c', position: 3},
        {id: 4, value: 'd', position: 4},
        {id: 5, value: 'e', position: 5},
        {id: 6, value: 'f', position: 6},
        {id: 7, value: 'g', position: 7},
        {id: 8, value: 'h', position: 8},
        {id: 9, value: 'i', position: 9},
        {id: 10, value: 'j', position: 10},
        {id: 11, value: 'k', position: 11},
        {id: 12, value: 'l', position: 12},
        {id: 13, value: 'm', position: 13},
        {id: 14, value: 'n', position: 14},
        {id: 15, value: 'o', position: 15},
        {id: 16, value: 'p', position: 16},
        {id: 17, value: 'q', position: 17},
        {id: 18, value: 'r', position: 18},
        {id: 19, value: 's', position: 19},
        {id: 20, value: 't', position: 20},
        {id: 21, value: 'u', position: 21},
        {id: 22, value: 'v', position: 22},
        {id: 23, value: 'w', position: 23},
        {id: 24, value: 'x', position: 24},
        {id: 25, value: 'y', position: 25},
        {id: 26, value: 'z', position: 26},
     
      ]);
    });
};
