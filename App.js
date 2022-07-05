import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator } from 'react-native';
import Style from "./App.style";
import UserCard from './components/UserCard';

import axios from 'axios';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  async function getUserData (){
    setLoading(true);
    const reponse = await axios.get("https://jsonplaceholder.typicode.com/users");
    setLoading(false);
    setUserData(reponse.data);

  }

  const renderUser = ( {item} ) => {
    return(<UserCard name={item.name} username={item.username} email={item.email}/>);
}
 

  return(
    <View style={Style.main}>    
      {
        loading ? 
        (<ActivityIndicator size="large"/>)
        :
        (<FlatList style={Style.flatlist} data={userData} renderItem={renderUser}/>)
      }
      
      <Button color="#FEB139"title='Get User Information' onPress={getUserData}/>
    </View>

  );
};

export default App;
