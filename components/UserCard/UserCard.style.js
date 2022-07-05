import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        height: Dimensions.get("window").height/4,
        justifyContent:"center",
        borderWidth:2,
        borderRadius:10,
        borderColor:"#F55353",
        padding:25,
        backgroundColor:"#F55353",
        marginTop:25,
    },
    text:{
        marginTop:5,
        fontSize:18,
        fontWeight:"bold",
        color:"black",
    }
});