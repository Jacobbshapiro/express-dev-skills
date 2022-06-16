const skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
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