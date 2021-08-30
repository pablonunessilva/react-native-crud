import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Avatar, Icon, Button } from 'react-native-elements'
import UsersContext from '../context/user/user.context'


const userList = props => {
  const { state, dispatch } = useContext(UsersContext)
  function confirmUserDeletion(user) {
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          })
        }
      },
      {
        text: 'Não'
      }
    ])
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => { confirmUserDeletion(user) }}
          type='clear'
          icon={<Icon name='delete' size={25} color='red' />}
        />
        <Button
          onPress={() => { props.navigation.navigate('UserForm', user) }}
          type='clear'
          icon={<Icon name='edit' size={25} color='orange' />}
        />
      </>
    )
  }

  function getUserItem({ item: user }) {
    return (
      <ListItem key={user.id} bottomDivider onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar source={{ uri: user.avatar }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignContent: 'flex-end' }}>
          {
            getActions(user)
          }
        </View>
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
}

export default userList
