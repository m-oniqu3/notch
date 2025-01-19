function App() {
  async function fetchAPI() {
    const baseURL = __API_PATH__;
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
  }

  return <button onClick={fetchAPI}>test</button>;
}

export default App;
