import React from 'react'
import {View, Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import SuperheroesList from './superheroesList'

/* Aquí no pongo el return porque estoy usando ES6 */
const App = () => (
    <Provider store={createStore(reducers)}>
        <View>
            <SuperheroesList />
        </View>
    </Provider>
)

export default App