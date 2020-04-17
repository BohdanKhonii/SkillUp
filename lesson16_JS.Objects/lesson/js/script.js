//#############################################
// let skill = {
//     name: `html`,
//     level: 5,
//     combine : function(){
//         return `${this.name}-${this.level}`;
//     }
// }
// alert(skill.combine());
//#############################################
// function calculator(a,b){
//     this.a=a;
//     this.b=b;
//     this.sum = function(){
//         return this.a+this.b;
//     }
//     this.mul = function(){
//         return this.a*this.b;
//     }
// }
// let calculator1=new calculator(4,3);
// let calculator2=new calculator(2,3);
// alert( calculator1.sum() );
// alert( calculator2.mul() );
//#############################################
// let city = {
//   'Zarephath': 728375,
//   'Reinerton': 864402,
//   'Spelter': 340533,
//   'Henrietta': 932557,
//   'Dyckesville': 421758,
//   'Yettem': 250492,
//   'Gracey': 551885,
//   'Floris': 216435,
//   'Davenport': 290139,
//   'Tioga': 653031,
//   checkMore: function () {         
//     let max=0,town;
//     for(let key in city){
//       if (city[key]>max) {
//         max=city[key];
//         town=key;        
//       }
//     }
//     return town;
//   }
// }
// alert(city.checkMore());
//#############################################
// let users = [
//     {
//       "index": 0,
//       "isActive": true,
//       "balance": "$2,226.60",
//       "name": "Eugenia Sawyer",
//       "gender": "female",
//       "phone": "+1 (840) 583-3207",
//       "address": "949 John Street, Rose, Puerto Rico, 1857"
//     },
//     {
//       "index": 1,
//       "isActive": true,
//       "balance": "$2,613.77",
//       "name": "Pauline Gallegos",
//       "gender": "female",
//       "phone": "+1 (985) 593-3328",
//       "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
//     },
//     {
//       "index": 2,
//       "isActive": false,
//       "balance": "$3,976.41",
//       "name": "Middleton Chaney",
//       "gender": "male",
//       "phone": "+1 (995) 591-2478",
//       "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
//     },
//     {
//       "index": 3,
//       "isActive": true,
//       "balance": "$1,934.58",
//       "name": "Burns Poole",
//       "gender": "male",
//       "phone": "+1 (885) 559-3422",
//       "address": "730 Seba Avenue, Osage, Alabama, 6290"
//     },
//     {
//       "index": 4,
//       "isActive": true,
//       "balance": "$3,261.65",
//       "name": "Mcfadden Horne",
//       "gender": "male",
//       "phone": "+1 (942) 565-3988",
//       "address": "120 Scholes Street, Kirk, Michigan, 1018"
//     },
//     {
//       "index": 5,
//       "isActive": false,
//       "balance": "$1,790.56",
//       "name": "Suzette Lewis",
//       "gender": "female",
//       "phone": "+1 (837) 586-3283",
//       "address": "314 Dunne Place, Bawcomville, Guam, 9053"
//     }
// ];
// users.getFloat=function(str){
//     let arr=str.split('');
//     let index=arr.indexOf('$');
//     arr.splice(index,1);
//     index=arr.indexOf(',');
//     arr.splice(index,1);
//     str=arr.join('');
//     return parseFloat(str);
// }
// users.getNumberofReachSub=function() {
//     let sum=0,j=0, arr=[];
//     for(let i=0;i<users.length;i++){
//         if(users.getFloat(users[i].balance)>2000){
//             arr[j]=users[i].phone;
//             j++;
//             sum+=users.getFloat(users[i].balance);
//         }
//     }
//     alert(`Phones:${arr}`);
//     alert(`Sum:${sum}`);
// //Доданки мають лише соті, але сума виходить на 2 триліонні частинки меншою від потрібної. 
// }
// users.getNumberofReachSub();
//#############################################
// function Worker(name,surname,rate,days){
//   this.name=name;
//   this.surname=surname;
//   this.rate=rate;
//   this.days=days;
//   this.getSalary = function () {
//     return this.days*this.rate;
//   }
// }
// let worker=new Worker('Іван','Іванов',10,31);
// console.log(`Name: ${worker.name},`);
// console.log(`Surname: ${worker.surname},`);
// console.log(`Rate: ${worker.rate},`);
// console.log(`Days: ${worker.days},`);
// console.log(`Salaty: ${worker.getSalary()}.`);
//#############################################
