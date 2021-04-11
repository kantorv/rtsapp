import logo from '../logo.svg';





function Main() {
  return (
    <div style={{flex:1,   display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div style={{flexGrow:0 }}>
     <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
    </div>
  );
}

export default Main;
