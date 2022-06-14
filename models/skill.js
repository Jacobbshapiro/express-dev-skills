const skills = [
    {id: 0, skill: 'Learn HTML', done: true},
    {id: 1, skill: 'Learn Express', done: false},
    {id: 2, skill: 'Learn Javascript', done: true},
    {id: 3, skill: 'Learn Bootstrap', done: false}
];

module.exports = {
    getAll,
    getOne,

}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}