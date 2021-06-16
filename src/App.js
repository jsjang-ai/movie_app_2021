import React from 'react';

function Food({ love }) {
  return <h1>I like {love}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food love="jjajangmien" />
      <Food love="ramen" />
      <Food love="samgiopsal" />
    </div>
  );
}

export default App;
