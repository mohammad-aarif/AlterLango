import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Courses from './components/courses/Courses';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Learn from './components/learn/Learn';
import Notfound from './components/notfound/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/learn">
            <Learn></Learn>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
