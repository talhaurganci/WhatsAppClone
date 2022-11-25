import React from "react";
import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import { userList } from "../../services/data";
import { userListProps } from "../../services/interface";
import { Feather } from '@expo/vector-icons';
import { LIGHT_COLOR, SECONDARY_LIGHT } from "../../constants/colors";
import ProfileCards from "../../components/ProfileCards";
const {width:wWidth, height:wHeight} = Dimensions.get('window');




interface ChatsProps {}

const styles = StyleSheet.create({

    root: {
        flex: 1, 
        backgroundColor: LIGHT_COLOR,
    },

    cardContainer: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        width: wWidth - 20,
        marginVertical: 5,
        marginHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.17,
    },

    avatarContainer: {
        flexDirection: "row", alignItems: "center"
    },

    avatarBox: {
        width:55, 
        height:55, 
        borderRadius: 30, 
        backgroundColor: "grey",
    },

    silentText: {
        color: 'grey'
    },

    floatingContainer: {
        backgroundColor: SECONDARY_LIGHT, 
        width: 55,
        height: 55,
        borderRadius: 35,
        position: "absolute",
        right: 10,
        bottom: 20,
    },

    iconBox: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    }

})

const Chats = ({}: ChatsProps) => {
    const renderItem = ({item}: {item:userListProps}) => {
        return <ProfileCards {...{ item }} />;
    };
    return(
        <View style={styles.root}>
            <FlatList
            data={userList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            />
            <View>
                <View 
                style={styles.floatingContainer}
                >
                    <View style={styles.iconBox}
                >       
                    <Feather name="message-square" size={24} color="white" />                    
                    </View>                   
                </View>
            </View>
        </View>
    );
};

export default Chats;