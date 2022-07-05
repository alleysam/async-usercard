import React from "react";
import { View, Text } from "react-native";
import Style from "./UserCard.style";

const UserCard = ( props ) =>{
    return(
        <View style={Style.container}>
            <Text style={Style.text}> Name  : {props.name}</Text>
            <Text style={Style.text}> UserName : {props.username}</Text>
            <Text style={Style.text}> E-Mail : {props.email}</Text>
        </View>
    );
};

export default UserCard;