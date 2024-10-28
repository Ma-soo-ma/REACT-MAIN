function Random(){
  let number = Math.floor(Math.random() * 100);
    return <p style={{color:"red"}}>Random Number: {number}</p>
}

export default Random;