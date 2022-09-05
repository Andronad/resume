export default class Project {
    constructor(duration, company, name, responsibilities, skills) {
        this.id = (Date.now() + parseInt(Math.random() * 10000)).toString();
        this.duration = duration;
        this.company = company;
        this.name = name;
        this.responsibilities = responsibilities;
        this.skills = skills;
    }
}
