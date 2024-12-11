import ReactImg from './assets/react-core-concepts.png'
// import ComponentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';

const ReactContent = ["Fundamantal", "Crucial", "Core"]
function generateInd(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (<div>
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {ReactContent[generateInd(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  </div>);
}

function CoreConcept(prop) {
  return (
    <li>
    <img src={prop.image} alt="..." />
    <h3>{prop.title}</h3>
    <p>{prop.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
