import "./App.css";

function Profile({ img, name, age, profession }) {
  return ( 
    <div className="profile">
      <img src={img} alt="stevie" />
      <p>name: {name}</p>
      <p>age:{age} </p>
      <p>profession: {profession}</p>
    </div>
  );
}

function App() {
  // const user = {
  //   img: "images/stevie.jpg",
  //   name: "John Smith",
  //   age: 20,
  //   profession:"Frontend Developer"
  // }
  return (
    <div className="App">
      <Profile
        img="images/stevie.jpg"
        name="Stevie"
        age={20}
        profession="Who knows"
        // {...user}
      />
      <Profile
        img="images/elliot.jpg"
        name="Elliot"
        age={25}
        profession="Fullstack Developer"
      />
      <Profile
      img="images/matthew.png"
      name="Matthew"
      age =" Really old"
      profession="Backend Dev"
      />
      <Profile
      img="images/justen.jpg"
      name="Justen or Justin"
      age ="19"
      profession="Another Developer"
      />
    </div>
  );
}

export default App;
