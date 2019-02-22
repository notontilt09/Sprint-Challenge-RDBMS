
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: "fork repo",
          notes: "click fork let github do it's magic",
          completed: true
        },
        {
          project_id: 1,
          description: "clone repo",
          notes: "clone repo to local machine",
          completed: true
        },
        {
          project_id: 1,
          description: "write all the code",
          notes: "this is the tough part",
          completed: false
        },
        {
          project_id: 2,
          description: "write all react code",
          notes: "this wasn't too bad",
          completed: true
        },
        {
          project_id: 3,
          description: "front-end",
          notes: "josh and dustin",
          completed: true
        },
        {
          project_id: 3,
          description: "back-end",
          notes: "luis",
          completed: false
        },
        {
          project_id: 3,
          description: "cs",
          notes: "????",
          completed: false
        },
      ]);
    });
};
