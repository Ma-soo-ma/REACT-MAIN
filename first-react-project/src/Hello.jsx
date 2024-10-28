function Hello() {

  var myName = "Prashant";
  var myAge = 20;
  let fullName =()=>{
    return "Prashant Kumar";
  }

  return <p>MessageNo:This is Your teacher {fullName()}, and he is {myAge} years old</p>
}

export default Hello;
