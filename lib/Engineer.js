// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
constructor() {
   //properties
    this.github = 'GitHubUser';
    this.role = 'Engineer';
}
//methods
getRole () {
    return this.role;
}
getGithub() {
    return this.github;
}
}

module.exports = Engineer;