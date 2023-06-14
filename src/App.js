import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import data from './data.json';
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">
        &nbsp; 
        <section class="wrapper">
      

      <div class="container">
        <div class="grid-cols-2">
          <div class="grid-item-1">
            <h1 class="main-heading">
            Popular video right now*
            </h1>
            <p class="info-text">
            Youth: Open Space #5 Mental Health, Youth, and COVID-19 <b>by ASEAN Youth Forum Channel</b>
            </p>
          </div>
        </div>
      </div>
    </section>
    <br/>
        </Link>
      </div>
      
    <div class="container1"> 
  <iframe class="responsive-iframe" src="https://www.youtube.com/embed/V3jfLetEtrI"></iframe>
</div>
<br/><br/>
<br/><br/>
<hr></hr>
<br/><br/>

      <main>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/blogpost/:id" element={<BlogPost data={data} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
