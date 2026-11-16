# Valid_Login_Users.js
Checking Valid Users On a random Website
User Authentication Test Dataset & Validation Utility 🧪🔐
A clean, modular JavaScript utility script designed for testing user authentication rules, account statuses, and role-based permissions using modern ES6+ array methods (filter, map, find, and some).

🚀 Features
Configurable Validation Rules: Enforces active account status and a minimum password length requirement (MINIMUM_PASSWORD_LENGTH = 8).

Categorized User Filtration: Dynamically splits test accounts into validUsernames and invalidUsernames arrays.

Role-Based Lookups: Automatically queries the dataset to locate the first active administrator account.

State Auditing: Performs a quick boolean check to determine if any inactive users exist within the test suite.

👥 Test Dataset Breakdown
The script evaluates an array of mock users covering various edge cases:

Username,Role,Status (isActive),Password Length,Validation Status,Reason / Notes
standard_user,customer,true (Active),12 (Secret123!),Valid,Meets all criteria.
Locked_user,customer,false (Inactive),12 (Secret123!),Invalid,Account is locked/inactive.
short_password_user,customer,true (Active),3 (abc),Invalid,Password is less than 8 characters.
admin_user,admin,true (Active),12 (Adminpass99),Valid,Active admin account.
inactive_admin,admin,false (Inactive),12 (Adminpass00),Invalid,Admin account is inactive.

🛠️ Code Logic Overview
// Validation rule checking active status and password length
const isValidLoginUser = (user) => {
    return user.isActive && user.password.length >= MINIMUM_PASSWORD_LENGTH;
};

Filtering & Mapping: Uses .filter() paired with .map() to cleanly extract usernames of passing and failing test accounts.

First Match Lookup: Uses .find() to locate the primary administrative user (role === "admin" && user.isActive).

Condition Checking: Uses .some() to check for the presence of any inactive accounts.
