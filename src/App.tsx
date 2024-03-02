import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="parent flex flex-col items-center justify-center gap-12 md:flex-row md:h-screen md:p-20">
      <Header />
      <div className="w-full items-center justify-center flex flex-col gap-6">
        <Button />
        <Form />
      </div>
    </div>
  );
}

export default App;
