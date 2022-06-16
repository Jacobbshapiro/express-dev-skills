const skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit
}

function index (req, res) {
    res.render('skills/index', {
        skills: skill.getAll()
    });
};

function show (req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id),
    });
};

function newSkill (req, res) {
    res.render('skills/new')
}

function create(req, res) {
    skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill (req, res) {
    skill.deleteOne(req.params.id);
    res.redirect('/skills');
};

function edit (req, res) {
    res.render ('skills/edit', {
        skill: skill.getOne(req.params.id)
    });
};