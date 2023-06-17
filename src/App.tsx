import Accordion from "./components/Accordion";
import { useCounterStore }  from './store/counterStore.ts'
import { shallow } from 'zustand/shallow';

function App() {

  const { counter, name, posts} = useCounterStore((state) => ({
    counter: state.count,
    name: state.title,
    posts: state.post
  }), shallow);

  const { increment, getPosts, clearStore, multiply } = useCounterStore()

  return (
    <div>
      <Accordion title="Más información">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          aspernatur.
        </p>
      </Accordion>

      <h2>Name: {name}</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => increment(10)}>
        Increment by 10
      </button>
      <button onClick={() => getPosts()}>
        Get posts
      </button>
      <hr />
      <hr />
      <button onClick={() => clearStore()}>
        Clear
      </button>
      <hr />
      <button onClick={() => multiply(2)}>
        Multiply by 2
      </button>
      <hr />


      {JSON.stringify(posts)}


    </div>
  );
}

export default App;
