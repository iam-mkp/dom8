class User{
  static i=0;
 constructor(userName,email,password){
  this.userName=userName;
  this.email=email;
  this.password=password;
  User.i+=1
 }
 static countUser(){
  console.log('There are 50 users')
 }
 register(){
  console.log(this.userName+' is now registered')
 }
 }
 class Member extends User{
   constructor(userName,email,password,memberPackage){
   super(userName,email,password)
   this.memberPackage=memberPackage;
   let todaysDate=new Date();
   const membershipactivetillYear=todaysDate.getFullYear();
   const membershipactivetillMonth=todaysDate.getMonth();
   const membershipactivetillDay=todaysDate.getDay();
   
     const membershipactivetillDate=todaysDate.getDate(
     membershipactivetillYear,
     membershipactivetillMonth +1,
     membershipactivetillDay);
 }
 renewMembership(){
   const membershipactivetillYear=this.membershipactivetillDate.getFullYear();
   const membershipactivetillMonth=this.membershipactivetillDate.getMonth();
   const membershipactivetillDay=this.membershipactivetillDate.getDay();
   
   if(this.memberPackage==="standard package"){
   const membershipactivetillDate=todayDate.getDate(
     membershipactivetillYear,
     membershipactivetillMonth +1,
     membershipactivetillDay);
 }else if(this.memberPackage==="Yearly package"){
   const membershipactivetillDate=todayDate.getDate(
     membershipactivetillYear +1,
     membershipactivetillMonth,
     membershipactivetillDay);
 }
 }
 subcriptionActiveTill(){
   console.log(
    this.userName + 
    'is subscribed to '+
    this.memberPackage +
    "uptill" +
    this.membershipactivetillDate
   );
 }
 getPackage(){
   console.log(this.userName+"is subscribe"+this.memberPackage)
 }
 }
 let user1=new Member('suraj','surajjoshi8561@gmail.com','12345678','standard package')
 user1.getPackage();
 user1.renewMembership();
 user1.subcriptionActiveTill();
 user1.register();
 User.countUser();
 console.log(User.i);
 
 let user2=new Member('rahul','rahul@gmail.com','12345678','Yearly package')
 user1.getPackage();
 user1.renewMembership();
 user1.subcriptionActiveTill();