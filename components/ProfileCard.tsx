import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather as Icon, Entypo } from "@expo/vector-icons";
import { GREY_COLOR, LIGHT_COLOR, SECONDARYL_LIGHT } from "../constants/colors";

interface profileCardProps {
  title: string;
  subTitle: string;
  create: boolean;
}

const styles = StyleSheet.create({

    avatar: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'grey',
    },

    profileCardContainer: {
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    plusContainer: {
        backgroundColor: SECONDARYL_LIGHT,
        width: 25,
        height: 25,
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        paddingHorizontal: 15,
    },

    label: {
        fontSize: 16,
    },

    silent: {
        color: 'grey',
    },    
});

const ProfileCard = ({ title, subTitle, create }: profileCardProps) => {
  return (
    <View style={styles.profileCardContainer}>
      <View style={styles.avatar}>
        {create ? (
          <View style={styles.plusContainer}>
            <Icon name="plus" size={20} color={LIGHT_COLOR} />
          </View>
        ) : null}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.silent}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default ProfileCard;