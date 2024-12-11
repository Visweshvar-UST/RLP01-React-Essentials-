// import ComponentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from "./componants/Header.jsx";
import CoreConcept from './componants/CoreConcept.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0] }/>
            {/*short form by same names*/} 
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
