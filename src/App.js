import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories'
import RecipeByArea from './components/RecipeByArea/RecipeByArea';
import Navigation from './components/Navigation/Navigation';
import { AreaProvider, CategoriesProvider, ContextProvider } from './ContextApi';
import Recipes from './components/Recipes/Recipes';
import Ingredients from './components/Ingredients/Ingredients';
import { RecipesProvider } from './RecipeContext'
import NoMatch from './components/NoMatch/NoMatch';
import SingleRecipe from './components/SingleRecipe/SingleRecipe';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <ContextProvider>
      <Router>
        <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ingredients" component={Ingredients} />
            <Route exact path="/nations" component={RecipeByArea} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/:by/:name/recipes" component={Recipes} />
            <Route exact path="/:search/recipes" component={Recipes} />
            <Route exact path="/recipe/:id" component={SingleRecipe} />
            <Route path="*" component={NoMatch} />
          </Switch>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
