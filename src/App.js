
import './App.css';

function App() {

  
  function handleLink(){
    alert("Going to the page")
  }

  return (
    <div className="App">
      
      <a href="https://www.codespeedy.com/" onClick={handleLink}>Go to the page</a>
      
    </div>
  );
}

export default App;
