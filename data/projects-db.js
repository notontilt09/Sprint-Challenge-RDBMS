const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    addProject,
    addAction,
    getProjectById,
    getProjects,
    getActionById,
    getActions,
    removeProject
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => ({ id: ids[0] }))
}

function addAction(action) {
    return db('actions')
        .insert(action)
        .then(ids => ({ id: ids[0] }))

}

function getProjectById(id) {
    return db('projects')
        .where({ id: id })
        .first();
}

function getProjects() {
    return db('projects');
}

function getActions() {
    return db('actions');
}

function getActionById(id) {
    return db('actions')
        .where({ id: id })
        .first();
}

function removeProject(id) {
    return db('projects')
        .where({ id: id })
        .del();
}