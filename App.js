import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import telaPrincipal from './screens/telaPrincipal';
import pedidos from './screens/pedidos';
import menuCompra from './screens/menuCompra';
import perfil from './screens/perfil';
import curriculo from './screens/curriculo'
import detalhesPedido from './screens/detalhesPedido'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={telaPrincipal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pedidos"
          component={pedidos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuCompra"
          component={menuCompra}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Curriculo"
          component={curriculo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetalhesPedido"
          component={detalhesPedido}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;