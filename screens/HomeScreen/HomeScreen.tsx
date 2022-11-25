import React from 'react';
import {View ,Text, StyleSheet} from 'react-native';

interface HomeScreenProbs {



}

const HomeScreen = ({}: HomeScreenProbs) => {
    return(
       <View style={styles.homeScreenRoot}>
        <Text>HomeScreen</Text>
       </View>
    )
}


const styles = StyleSheet.create({
homeScreenRoot: {
    flex: 1,
},
});

export default HomeScreen;