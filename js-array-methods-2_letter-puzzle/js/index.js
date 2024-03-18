import { employees } from "../utils/data.js";

// EXAMPLE:
// QUESTION 1: Is there any employee that is older than 65 years?
// Hint: use some()

const hasEmployeesOlderThan65 = employees.some((employee) => employee.age > 65);

// Now it's your turn...
//----------------------------------------
// QUESTION 2: Is there any employee with first name 'Frederique'?
// Hint: use some()

const employeeNamedFrederique = employees.some(
  (employee) => employee.firstName === "Frederique"
);

//----------------------------------------
// QUESTION 3: Is there any employee younger than 18 years?
// Hint: use some()

const employeeYoungerThan18 = employees.some((employee) => employee.age < 18);

//----------------------------------------
// QUESTION 4: Has every employee a phone number?
// Hint: use every()

const everyEmployeeHasPhoneNumber = employees.every(
  (employee) => employee.phone
);

//----------------------------------------
// QUESTION 5: Does every id start with '0'?
// Hint: Use every()

const everyIdStartsWith0 = employees.every((employee) =>
  employee.id.startsWith("0")
);

//----------------------------------------
// QUESTION 6: Has every employee a first name AND a last name?
// Hint: use every()

const everyEmployeeHasFirstAndLastName = employees.every(
  (employee) => employee.firstName && employee.lastName
);

//----------------------------------------
// QUESTION 7: Can you find the employee named 'Louise' that is 33 years old?
// Hint: use find()

const employeeLouise33 = employees.find(
  (employee) => employee.firstName === "Louise" && employee.age === 33
);

//----------------------------------------
// QUESTION 8: We need to find the employee with the id '0.0795620650485831'
// Hint: Use find()

const employeeWithId = employees.find(
  (employee) => employee.id === "0.0795620650485831"
);

//----------------------------------------
// QUESTION 9: Please find the employee with first name 'Edna' and profession 'Inverstment Manager'
// Hint: use find()

const ednaInvestment = employees.find(
  (employee) =>
    employee.firstName === "Edna" &&
    employee.profession === "Investment Manager"
);

//----------------------------------------
// QUESTION 10: We need a new employees array now sorted by age ascending (1 -> 100)
// Hint: Use toSorted()

const employeesSortedByAge = employees.toSorted((a, b) => a.age - b.age);

// const employeesSortedByAge = employees.slice().sort((a, b) => a.age - b.age);

//----------------------------------------
// QUESTION 11: We want a new employees array sorted by last name descending (Z -> A)
// Hint use toSorted()

// toSorted() MDN  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

// Option 1
const employeesSortedByLastName = employees.toSorted((a, b) => {
  // Both last names are converted to lower case to ensure the comparison is case-insensitive.

  // If 'a.lastName' comes before 'b.lastName' lexicographically, return 1 to indicate 'a' should be sorted after 'b'.
  if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return 1;

  // If 'a.lastName' comes after 'b.lastName' lexicographically, return -1 to indicate 'a' should be sorted before 'b'.
  if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return -1;

  // If both last names are equal (after converting to lower case), return 0 to indicate no change in order between 'a' and 'b'.
  return 0;
});

// Option 2
// localeCompare() MDN:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

// The 'localeCompare' method is used here for string comparison, which compares 'b.lastName' with 'a.lastName' according to the locale and sorting rules.
// This results in the array being sorted in descending order by the 'lastName' field.
// The reason 'b.lastName' is the first argument is specifically to achieve the descending order sort, as 'localeCompare' returns a negative value if the first string is sorted before the second string in the locale's order.

const employeesSortedByLastName1 = employees.toSorted((a, b) =>
  b.lastName.localeCompare(a.lastName)
);

// Great! 🎉 You got it! 🚀 Now you can read the solution of the letter puzzle. 💪

export {
  hasEmployeesOlderThan65,
  employeesSortedByAge,
  employeeNamedFrederique,
  employeeWithId,
  employeeYoungerThan18,
  everyEmployeeHasPhoneNumber,
  employeesSortedByLastName,
  everyIdStartsWith0,
  everyEmployeeHasFirstAndLastName,
  employeeLouise33,
  ednaInvestment,
};
