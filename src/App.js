import './App.css';
import Navbar from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories'
import RecipeByArea from './components/RecipeByArea/RecipeByArea';
import Navigation from './components/Navigation/Navigation';
import { AreaProvider, CategoriesProvider, IngredientsProvider } from './ContextApi';
import Recipes from './components/Recipes/Recipes';
import Ingredients from './components/Ingredients/Ingredients';
import { RecipesProvider } from './RecipeContext'
import NoMatch from './components/NoMatch/NoMatch';
import SingleRecipe from './components/SingleRecipe/SingleRecipe';
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <IngredientsProvider>
            <AreaProvider>
              <Route exact path="/">
                <Home />
              </Route>
              <RecipesProvider>
                <Route path="/ingredients">
                  <Ingredients />
                </Route>
                <Route path="/area">
                  <RecipeByArea />
                </Route>
                <Route path="/categories">
                  <CategoriesProvider>
                    <Categories />
                  </CategoriesProvider>
                </Route>
                <Route path="/recipes">
                  <Recipes />
                </Route>
                <Route path="/recipe/:id">
                  <SingleRecipe />
                </Route>
                {/* <Route path="*">
              <NoMatch/>
          </Route> */}
              </RecipesProvider>
            </AreaProvider>
          </IngredientsProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
