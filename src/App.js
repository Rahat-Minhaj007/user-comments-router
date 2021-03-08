import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Post from './components/Post/Post';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/post">
       <Post></Post>
        </Route>
        <Route path="/comments/:id">
          <Comments></Comments>
        </Route>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="*">
         <NoMatch></NoMatch>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
