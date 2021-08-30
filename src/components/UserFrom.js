import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/user/user.context'

const userform = props => {
  const [user, setUser] = useState(props.route.params ? props.route.params : {})
  const { dispatch } = useContext(UsersContext)
  return (
    <View style={style.form}>
      <Text>Nome:</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => { setUser({ ...user, name }) }}
        placeholder="Informe o nome"
        value={user.name}
      />
      <Text>E-mail:</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) => { setUser({ ...user, email }) }}
        placeholder="Informe o e-mail"
        value={user.email}
      />
      <Text>Avatar:</Text>
      <TextInput
        style={style.input}
        onChangeText={(avatar) => { setUser({ ...user, avatar }) }}
        placeholder="Informe um avatar"
        value={user.avatar}
      />
      <Button
        title="Salvar"
        onPress={
          () => {
            dispatch({
              type: user.id ? 'updateUser' : 'createUser',
              payload: user
            })
            props.navigation.goBack()
          }
        }
      />
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    padding: 12
  },
  input: {
    height: 40,
    padding: 2,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  }
})
export default userform
