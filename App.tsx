import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { RegisterScreen } from './src/screens/RegisterScreen';
// import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        {/* <StackNavigator/> */}
        <RegisterScreen/>
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App;
