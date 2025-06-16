
import React, { useState } from 'react';
import './App.css';

function App() {
  const [testCase, setTestCase] = useState('');
  const [generated, setGenerated] = useState('');

  const handleTransform = () => {
    // Transformation simple simulée
    const feature = `describe('Feature: Login', () => {
  it('should login successfully', () => {
    // Steps generated from test case
  })
})`;
    setGenerated(feature);
  };

  return (
    <div className="App">
      <h1>Test Case to Cypress Feature</h1>
      <textarea
        rows="10"
        cols="80"
        placeholder="Collez ici votre cas de test Jira/Xray (ou JSON brut)"
        value={testCase}
        onChange={(e) => setTestCase(e.target.value)}
      />
      <br />
      <button onClick={handleTransform}>Générer le test Cypress</button>
      <pre>{generated}</pre>
    </div>
  );
}

export default App;
        