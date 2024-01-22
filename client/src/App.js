import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import FormPage from './pages/FormPage';
import PhonesPage from './pages/PhonesPage';
import ProcessorsPage from './pages/ProcessorsPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App () {
  return (
    <Router className='App'>
      <Header />
      <main>
        <Switch>
          <Route path='/form'>
            <FormPage />
          </Route>
          <Route path='/phones'>
            <PhonesPage />
          </Route>
          <Route path='/processors'>
            <ProcessorsPage />
          </Route>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
