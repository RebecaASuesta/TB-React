// Ejercicio 2
// import './App.css';
// import Person from './components/Person/Person';

// function App() {
//   const person1 = {
//     name: 'Rebeca ',
//     surname: 'A. S. ',
//     age: 27
//   }
//   const person2 = {
//     name: 'Miguel ',
//     surname: 'T. S. ',
//     age: 26
//   }
//   const person3 = {
//     name: 'Oriol ',
//     surname: 'S. T. ',
//     age: 3
//   }
  
//   return (
//     <div className="App">
//       <Person personData={person1}/>
//       <Person personData={person2}/>
//       <Person personData={person3}/>
//     </div>
    
//   )
// }

// export default App;

// Página Personal
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Image from './assets/OriolHome.jpeg';

const bioPoints = ['Licenciada en Fracasología.', 'Máster en Toma de Malas Decisiones.', 'En mi tiempo libre rescato perretes.', 'Mi meta en la vida es tener un pato.'];
const listBio = bioPoints.map((bioPoint, i) => <div key={i}>{bioPoint}</div>);

const knowledgesPoints = ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Node', 'Express', 'Sequelize', 'MongoDB', 'Mongoose', 'React'];
const listKnowledges = knowledgesPoints.map((knowledgesPoint, i) => <div key={i}>{knowledgesPoint}</div>)

function App() {
  const header = {
    title: 'Rebeca A. Suesta'
  }

  const home = {
    about: 'Hola, esta es la página principal de Rebeca.',
    image: Image,
    bio: <div>{listBio}</div>,
    knowledges: <div>{listKnowledges}</div>
  }

  return (
    <div className='App'>
      <Header content = {header}/>
      <Home content = {home}/>
    </div>
  )
}

export default App;