
import './App.css'
import { CharactersListPage } from './pages/page-All';
import { Link, Switch, Route } from 'wouter';
import { Page404 } from './pages/page-404';
import { Footer } from './components/Footer';
import { CharacterDetails } from './components/CharacterDetails';
function App() {
  return (
    <>
    <div className='NoFooter'>
    <header className='header'>
      <div className='header-content'>
        <h1>Personajes de Rick y Morty</h1>
        <div className='navbar-container'>
          <Link to="/">🏡Inicio</Link>
        </div>
      </div>
    </header>
    <main className='App'>
        <Switch>
            <Route  path='/' component={CharactersListPage}> </Route>
            <Route  path='/character/:id' component={CharacterDetails}> </Route>
            <Route component={Page404}></Route>
        </Switch>
    </main>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App;
