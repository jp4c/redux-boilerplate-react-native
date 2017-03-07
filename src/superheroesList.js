import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class SuperheroesList extends Component {
    getSuperheroes(){
        const {superheroes} = this.props
        return superheroesData = superheroes.map((heroes, key) => {
            return <Text key={key}>{heroes.superhero}</Text>
        })
    }
    render(){
        return (
            <View>
                {this.getSuperheroes()}
            </View>
        )
    }
}

//function que le pasaremos el state y que devuelve siempre un objeto
const mapStateToProps = state => {
    //accedemos a superheroes que es el nombre que le hemos puesto en el reducer
    return {superheroes: state.superheroes}
}

//a connect le pasaremos la función mapStateToProps y luego ejecutará 
//el componente SuperheroList
export default connect(mapStateToProps)(SuperheroesList)