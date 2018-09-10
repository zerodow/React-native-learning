import { createStackNavigator } from 'react-navigation';
import CakeList from './src/CakeList';
import CakeDetail from './src/CakeDetail';

const App = createStackNavigator({
  CakeList: { screen: CakeList },
  CakeDetail: { screen: CakeDetail }
})

export default App;
