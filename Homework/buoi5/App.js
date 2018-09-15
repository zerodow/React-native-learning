import { createStackNavigator } from 'react-navigation';
import FoodList from './src/FoodList';
import FoodDetail from './src/FoodDetail';

export default createStackNavigator({
  FoodList: { screen: FoodList },
  FoodDetail: { screen: FoodDetail }
})