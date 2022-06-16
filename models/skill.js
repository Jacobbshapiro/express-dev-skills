const skills = [
    {id: 0, skill: 'Learn HTML', done: true},
    {id: 1, skill: 'Learn Express', done: false},
    {id: 2, skill: 'Learn Javascript', done: true},
    {id: 3, skill: 'Learn Bootstrap', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,

}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    id = ~~(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1);
}

function update (editContent, id) {
    id = ~~(id);
    const skillUpdate = skills.find(skill => skill.id === id);
    skillUpdate.skill = editContent.skill;
}