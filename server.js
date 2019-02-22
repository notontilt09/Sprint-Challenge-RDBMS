const express = require('express');
const helmet = require('helmet');
const db = require('./data/projects-db.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/projects', async (req, res) => {
    try {
        const projects = await db.getProjects()
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
});

server.get('/api/projects/:id', async (req, res) => {
    try {
        const project  = await db.getProjectById(req.params.id)
        if (!project) {
            res.status(404).json({ message: `There is no project with an id of ${req.params.id} `});
        } else {
            const actions = await db.getActions()
                .where({ project_id: req.params.id })
            actions.forEach(action => {
                action.completed = action.completed === 0 ? false : true;
            })
            project.actions = actions;
            project.completed = project.completed === 0 ? false : true;
            res.status(200).json(project);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

server.post('/api/projects', async (req, res) => {
    try {
        const { id } = await db.addProject(req.body)
        if (!req.body.name || !req.body.description) {
            res.status(404).json({ message: 'Please provide a name and description for the project' });
        } else {
            const newProject = await db.getProject(id);
            res.status(201).json(newProject)
        }
    } catch (error) {
        res.status(500).json(error);        
    }
});

// server.delete('/api/projects/:id', async (req, res) => {
    
// });

server.get('/api/actions', async (req, res) => {
    try {
        const actions = await db.getActions();
        res.status(201).json(actions)
    } catch (error) {
        res.status(500).json(error);
    }
});

server.post('/api/actions', async (req, res) => {
    try {
        const { id } = await db.addAction(req.body)
        if (!req.body.description || !req.body.notes || !req.body.project_id) {
            res.status(404).json({ message: 'Please probide project_id, description, and notes for this action' });
        } else {
            const newAction = await db.getActionById(id);
            res.status(201).json(newAction)
        }
    } catch (error) {
        res.status(500).json(error);
    }
});




module.exports = server;