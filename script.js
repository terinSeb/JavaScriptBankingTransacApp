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
const calcDisplayBalance = acc => {
const balanceM = acc.movements.reduce(( acc,cur,i,arr) =>  acc + cur ,0);
labelBalance.textContent = `${balanceM.toFixed(2)} Euro`;
acc.balance =  (+balanceM).toFixed(2);
}

const displayMovements = function(movements, sort=false){
  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements;
  containerMovements.innerHTML = ''
  movs.forEach(function(mov,i){
    const type = mov > 0 ? 'deposit' : 'withdrawal'
const html = `
<div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__value">${mov.toFixed(2)}€</div>
</div>
`
containerMovements.insertAdjacentHTML('afterbegin',html)
    })
}
let isSorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!isSorted)
  isSorted = !isSorted;
})
// displayMovements(account1.movements);

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

// Coding Challenge #1
// const deposits = movements.filter(function(mov){
// return mov > 0
// });
// console.log(deposits);
// const depositsArr = [];
// for(const mov of movements) if(mov > 0) depositsArr.push(mov);
// console.log(depositsArr);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const maxAmount = movements.reduce((acc,curr) => {
//   if(acc > curr) return acc
//   else
//   return curr;
// },movements[0]);
// console.log(maxAmount);

// const data1 = [5,2,4,1,15,8,3]
// const humanAge = data1.map(dogAge =>   (dogAge <=2) ? (2 * dogAge) : (16 + ( dogAge * 4)));
// console.log(humanAge);
// const adultDogs = humanAge.filter(dogAge =>  (dogAge >= 18 )  )
//   console.log(adultDogs);
//   const averageAge = adultDogs.reduce((acc,curr) => {
//     return acc + curr;
//   },0);
//  console.log(averageAge/adultDogs.length);

const calcDisplaySummary = function(currAcc){
const income = currAcc.movements.filter(mov => mov > 0)
.reduce((acc,cur) => acc + cur,0);
labelSumIn.textContent = `${income.toFixed(2)}€`

const outIncome = currAcc.movements.filter(mov => mov < 0)
.reduce((acc,cur) => acc + cur,0);
labelSumOut.textContent = `${outIncome.toFixed(2)}€`

const totInterest = currAcc.movements.filter(move => move > 0)
.map(mov => (mov * currAcc.interestRate)/100)
.filter(mov => mov > 1)
.reduce((acc,curr) => acc + curr,0 )
labelSumInterest.textContent = `${totInterest.toFixed(2)}€`

}
// calcDisplaySummary(account1.movements);

//Example for Find Method:
const withdwawal = movements.find(mov => mov > 0);
console.log(withdwawal);
const acct = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(acct);

let currentAccount
function updateUI(acc){
//Display Movements
displayMovements(acc.movements);
//Display Balance
calcDisplayBalance(acc);
//Display Summary
calcDisplaySummary(acc);
}
btnLogin.addEventListener('click', function(e){
e.preventDefault();

currentAccount = accounts.find(
  acc => acc.username === inputLoginUsername.value
  );
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and Message
    labelWelcome.textContent = `Welcom back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);

  }
})

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acct => acct.username === inputTransferTo.value);
  if(amount > 0 
    && receiverAcc
    && currentAccount.balance > amount
    && receiverAcc?.username !== currentAccount.username){
 receiverAcc.movements.push(amount);
 currentAccount.movements.push(-amount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
})

btnClose.addEventListener('click', function(e){
e.preventDefault();

if(inputCloseUsername.value === currentAccount.username &&
  Number(inputClosePin.value) === currentAccount.pin)
  {
    const index =  accounts.findIndex( acc => 
      acc.username === inputCloseUsername.value)

      accounts.splice(index,1);
      containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = '';
})

// console.log(movements.some(amt => amt > 2000))
// console.log(movements.every(amt => amt > 2000))

// const deposit = mov => mov > 2000;
// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))

// const arr = [[1,2,3],[4,5,6],7,8]
// const arrDeep = [[1,[2,3]],[4,5,6],7,8]
// console.log(arr.flat());
// console.log(arrDeep.flat(2));


const overAllBalance = accounts.map(acc => acc.movements)
.flat()
.reduce((acc,mov) => acc+ mov,0);

const overAllBalance2 = accounts.flatMap(acc => acc.movements)
.reduce((acc,mov) => acc+ mov,0);

// console.log(overAllBalance2)
// console.log(accounts)

const x = new Array(7);

console.log(x.fill(1,3,5));

console.log(Array.from({length: 7}, () => 2));

console.log(Array.from({length: 7}, (_,i) => i + 1));

labelBalance.addEventListener('click',function(){
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€',''))
  )
  console.log(movementsUI);
})

const {deposit,withdrawls} = accounts.flatMap(acc => acc.movements)
.reduce((acc,curr) =>
{acc[curr > 0 ? 'deposit' : 'withdrawls'] += curr
return acc}
 ,
{deposit:0,withdrawls:0} );

console.log(deposit,withdrawls);

// console.log(numDeposit100);

const convertTitleCase = function(title){
  const nonConverts = ['a','an','and','the','but','or','on','in','with'];
  const capsTitle =
  title.toLowerCase()
  .split(' ')
  .map(word => nonConverts.includes(word) ? word :
  word[0].toUpperCase() + word.slice(1))
  .join(' ');

  return capsTitle;
}

console.log(convertTitleCase('this is a nice title'));

const dogs = [
{weight:22,curFood:250,owners:['Alice','Bob']},
{weight:8,curFood:200,owners:['Matilda']},
{weight:13,curFood:275,owners:['Sarah','John']},
{weight:32,curFood:340,owners:['Michael']}
];

dogs.forEach(function(dogsData){
  dogsData.recmFood = Math.trunc((dogsData.weight ** 0.75) * 28);
})

let sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

let result = sarahDog.curFood > (sarahDog.recmFood + (sarahDog.recmFood ** 0.1))
  ? 'Dog is eating too Much' :
  sarahDog.curFood < (sarahDog.recmFood + (sarahDog.recmFood ** 0.1))
  ? 'Dog is eating very less' : 'Dog is eating Fine.'
  // console.log(result);

  let arrayToomuch = dogs.filter(dog => dog.curFood > dog.recmFood )
  .flatMap(dog => dog.owners);

  console.log(arrayToomuch);