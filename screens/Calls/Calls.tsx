import React from "react";
import { View, Text,StyleSheet } from "react-native";
import ProfileCards from "../../components/ProfileCards";
import { LIGHT_COLOR, SECONDARY_LIGHT } from "../../constants/colors";
import { Feather } from '@expo/vector-icons'; 

interface CallsProps {

}

const styles = StyleSheet.create({
    rootCalls:{
        flex: 1,
        backgroundColor: LIGHT_COLOR,
    },

    floatingContainer: {
        backgroundColor: SECONDARY_LIGHT, 
        width: 50,
        height: 50,
        borderRadius: 30,
        position: "absolute",
        right: 10,
        top: 305,
    },

    iconBox: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    }
});


const Calls = ({}: CallsProps) => {
    const item = {
        id: 4,
        name: 'Oğuz',
        lastMessage: 'Dün, 11:54',
        profilePic: '',
        lastSeen: '12:00'
    }
    return(
        <View style={styles.rootCalls}>
            <ProfileCards {...{item}} call={true} />
            <View>
                <View 
                style={styles.floatingContainer}
                >
                    <View style={styles.iconBox}
                >       
                <View style={{position: 'absolute', bottom: 12, right: 12}}>
                <Feather name="phone" size={24} color={"#ffffff"} />
                </View>                                        
                    </View>                   
                </View>
            </View>
        </View>
    );
};

export default Calls;