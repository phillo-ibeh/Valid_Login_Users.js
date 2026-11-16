const loginTestUsers = [
    {username: "standard_user", password: "Secret123!", isActive: true, role: "customer"},
    {username: "Locked_user", password: "Secret123!", isActive: false, role: "customer"},
    {username: "short_password_user", password: "abc", isActive: true, role: "customer"},
    {username: "admin_user", password: "Adminpass99", isActive: true, role: "admin"},
    {username: "inactive_admin", password: "Adminpass00", isActive: false, role: "admin"}
];
//Declare the minimum password length as a constant
const MINIMUM_PASSWORD_LENGTH = 8; 
// Write a single arrow function for Validity rule for the LoginTestUsers array
const isValidLoginUser = (user) => {
    return user.isActive && user.password.length >= MINIMUM_PASSWORD_LENGTH;
};
// Get the usernames of Valid Users
const validUsernames = loginTestUsers.filter(isValidLoginUser)
     .map(user => user.username);
// Get the usernames of invalid users 
const invalidUsernames = loginTestUsers.filter(user => !isValidLoginUser(user))
   .map(user => user.username);
// Find the first Active Admin User
const firstActiveAdminUser = loginTestUsers.find(user => user.role === "admin" && user.isActive);        
// Check whether any user is inactive 
const hasInactiveUsers = loginTestUsers.some(user => !user.isActive);

// Print all four answers
console.log(`Valid users: ${validUsernames.join(", ")}`);
console.log(`Invalid users: ${invalidUsernames.join(", ")}`);
console.log(`First Active Admin: ${firstActiveAdminUser ? firstActiveAdminUser.username : "None"}`);
console.log(`Any inactive user: ${hasInactiveUsers}`);