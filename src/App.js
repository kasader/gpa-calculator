import './App.css';

function App() {
  return (
    <div className="App">
     <header>
        <nav>
         <ul class="nav__links"> 
            <a class="navbar-brand" href="https://www.sccs.swarthmore.edu/">SCCS</a>
            <li><a class="navbar-link" href="https://www.sccs.swarthmore.edu/docs">Documentation</a></li>
          </ul>
       </nav>
      </header> 
      <div class="title">
        <p class="title-text">Swarthmore College</p>
        <p class="title-text">GPA Calculator</p>
      </div>
      <div class ="subtitle">
        <p class="main-subtitle-text">Steps:</p> 
        <div class ="list-padding">
         <ol class="subtitle-text">
            <li class="subtitle-text">Go to MySwarthmore and login using your Swarthmore username and password.</li>
            <li class="subtitle-text">Go to "Student Main Menu" → "Student Records" → "Grades at a Glance".</li>
           <li class="subtitle-text">Copy the entirety of the page and paste it into the input field below. The calculator will do all of the parsing for you.</li>
           <li class="subtitle-text">Click "Calculate GPA".</li>
          </ol>
        </div>

      </div>
    </div>
  );
}

export default App;
