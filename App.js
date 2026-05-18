import './App.css';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => alert('Hi there!')}>Hi!</button>
    </div>
  );
}

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings === '') fillings = 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>

      <p>I want a burger with:</p>
      <label>Tomato:
      <input 
        type="checkbox" 
        name="tomato" 
        checked={inputs.tomato} 
        onChange={handleChange}
      />
      </label>
      <label>Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={inputs.onion} 
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <MyForm />
    </div>
  );
}

export default App;