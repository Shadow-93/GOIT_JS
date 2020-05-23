import users from './users.js'; // eslint-disable-line

// =====================================================

console.log('Task - 1');

const getUserNames = users => users.map(user => user.name); // eslint-disable-line

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// =====================================================

console.log('Task - 2');
// eslint-disable-next-line
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// =====================================================

console.log('Task - 3');
// eslint-disable-next-line
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// =====================================================

console.log('Task - 4');

const getInactiveUsers = users => users.filter(user => !user.isActive); // eslint-disable-line

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// =====================================================

console.log('Task - 5');
// eslint-disable-next-line
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// =====================================================

console.log('Task - 6');
// eslint-disable-next-line
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age > min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// =====================================================

console.log('Task - 7');
// eslint-disable-next-line
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

// =====================================================

console.log('Task - 8');
// eslint-disable-next-line
const getUsersWithFriend = (users, friendName) => {
  const arr = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  return arr;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// =====================================================

console.log('Task - 9');
// eslint-disable-next-line
const getNamesSortedByFriendsCount = users =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .reduce((allNames, user) => {
      allNames.push(user.name);
      return allNames;
    }, []);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// =====================================================

console.log('Task - 10');

console.log(users);

// eslint-disable-next-line
const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills.sort();
    }, [])
    .filter((item, index, arr) => index === arr.indexOf(item));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
