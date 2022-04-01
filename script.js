'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//let arr = ['a','b','c','d','e']

//SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));

//SPLICE
// console.log(arr.splice(2))
// console.log(arr.splice(1,2))
// console.log(arr);

//REVERSE
//let arr2 = ['k','a','z','d','i','f']
// console.log(arr2.reverse());

//CONCAT 
//const letters = arr.concat(arr2);
//console.log(letters);

//JOIN
//console.log(letters.join(' - '))

//at() Method
// const arrNum = [23,11,64]
// console.log(arrNum[arrNum.length -1])
// console.log(arrNum.slice(-1)[0])
// console.log(arrNum.at(-1))
// for( const [i,movement] of movements.entries()){
//   if(movement > 0){
//     console.log(`Movement ${ i + 1}: you deposited ${movement}`)
//   }
//   else{
//     console.log(`Movement ${ i + 1}: you withdrew ${Math.abs(movement)}`)
//   }
// }

// movements.forEach(function(mov,i,arr){
//   if(mov > 0){
//     console.log(`Movement ${ i + 1}: you deposited ${mov}`)
//   }
//   else{
//     console.log(`Movement ${ i + 1}: you withdrew ${Math.abs(mov)}`)
//   }
// })

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function(curr,i,map){
//   console.log(`${curr} .... ${i}`)
// })

// const currenSet = new Set([
//   'USD','EUR','GBP','EUR','GBP'
// ])
// currenSet.forEach(function(curr,i,map){
//   console.log(`${curr} .... ${i}`)
// })
const balanceM = movements.reduce(( acc,cur,i,arr) =>  acc + cur ,0);
console.log(balanceM);
labelBalance.textContent = `${balanceM} Euro`
const displayMovements = function(movements){
  containerMovements.innerHTML = ''
  movements.forEach(function(mov,i){
    const type = mov > 0 ? 'deposit' : 'withdrawal'
const html = `
<div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__value">${mov}</div>
</div>
`
containerMovements.insertAdjacentHTML('afterbegin',html)
    })
}
displayMovements(account1.movements);

//Julia's Data [3,5,2,12,7]
//Kate's Data [4,1,15,8,3]
// const checkDogs = function(juliaArr,KateArr){
//   const juliaArrCorrected = juliaArr.slice();
//   juliaArrCorrected.splice(0,1);
//   juliaArrCorrected.splice(-2)

//   const dogs = juliaArrCorrected.concat(KateArr);
// console.log(dogs);
//   dogs.forEach(function(dog,i){
//     if(dog > 3){
//       console.log(`Dog no ${i + 1} is an Adult and his age is ${dog}.`)
//     }
//     else{
//       console.log(`Dog no ${i + 1} is still a puppy.`)
//     }
//   })
// }
// checkDogs([3,5,2,12,7],[4,1,15,8,3]);

// const euroToUsd = 1.1
// const movementUSD = movements.map(function(mov){
//   return mov * euroToUsd;
// })
// console.log(movements);
// console.log(movementUSD);

// const movementUSDfor = []
// for(const mov of movements) movementUSDfor.push(mov * euroToUsd);
// console.log(movementUSDfor);

// const movementDescription = movements.map((mov, i) => 
//     `Movement ${i + 1}: You ${mov > 0 ? 'Deposited': 'Withdrew'} ${Math.abs(mov)}`  
// )
// console.log(movementDescription);

const createUsername = function(acc){
  acc.forEach(function(eachAcct){  
    eachAcct.username = eachAcct.owner
  .toLowerCase()
  .split(' ')
  .map(usName => usName[0])
  .join('');
  });
}
createUsername(accounts);
// console.log(accounts)

const deposits = movements.filter(function(mov){
return mov > 0
});
console.log(deposits);
const depositsArr = [];
for(const mov of movements) if(mov > 0) depositsArr.push(mov);
console.log(depositsArr);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

const maxAmount = movements.reduce((acc,curr) => {
  if(acc > curr) return acc
  else
  return curr;
},movements[0]);
console.log(maxAmount);

const data1 = [5,2,4,1,15,8,3]
const humanAge = data1.map(dogAge =>   (dogAge <=2) ? (2 * dogAge) : (16 + ( dogAge * 4)));
console.log(humanAge);
const adultDogs = humanAge.filter(dogAge =>  (dogAge >= 18 )  )
  console.log(adultDogs);

  const averageAge = adultDogs.reduce((acc,curr) => {
    return acc + curr;
  },0);
 console.log(averageAge/adultDogs.length);