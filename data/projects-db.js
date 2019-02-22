const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    addProject,
    addAction,
    getProject
}

function addProject(project) {

}

function addAction(action) {

}

function getProject(id) {
    
}