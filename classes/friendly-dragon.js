// Your code here
const Dragon = require('./dragon.js');

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;

    }
    hasLifeGoals() {
        for (let lifeGoal of this.lifeGoals) {
            console.log(`${this.name} likes to ${lifeGoal}`);
        }
    }
    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
}

module.exports = FriendlyDragon;
