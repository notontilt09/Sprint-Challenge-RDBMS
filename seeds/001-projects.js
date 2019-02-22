
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'sprint challenge',
          description: 'week 12 RDMBS Sprint Challenge',
          completed: 0
        },
        {
          name: 'instagram clone',
          description: 'remaking instagram using react',
          completed: 1
        },
        {
          name: 'lambda school',
          description: '30 weeks of full-stack web training',
          completed: 0
        },        
      ]);
    });
};
