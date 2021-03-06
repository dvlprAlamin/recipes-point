import './App.css';
import Navbar from './components/Navigation/Navigation';
import {BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories'
import RecipeByArea from './components/RecipeByArea/RecipeByArea';
import Navigation from './components/Navigation/Navigation';
import {AreaProvider, CategoriesProvider, IngredientsProvider} from './ContextApi';
import Recipes from './components/Recipes/Recipes';
import Ingredients from './components/Ingredients/Ingredients';
import { RecipesProvider } from './RecipeContext';
function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <RecipesProvider>
          <Route path="/ingredients">
            <IngredientsProvider>
              <Ingredients/>
            </IngredientsProvider>
          </Route>
          <Route path="/area">
            <AreaProvider>
              <RecipeByArea/>
            </AreaProvider>
          </Route>
          <Route path="/categories">
            <CategoriesProvider>
            <Categories/>
            </CategoriesProvider>
          </Route>
          <Route path="/recipes">
              <Recipes/>
          </Route>
          </RecipesProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
