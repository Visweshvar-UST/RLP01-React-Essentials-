import ReactImg from './assets/react-core-concepts.png'


const ReactContent = ["Fundamantal","Crucial","Core"]
function generateInd(max) {
  return Math.floor(Math.random() * (max+1));
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
