import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, StyleSheet, PermissionsAndroid } from "react-native";
import { combineTabWithStackProps } from "../../container/Main";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity } from "react-native";


interface CameraScreenProps {
  navigation: combineTabWithStackProps<"camera">;
}
const CameraScreen = ({ navigation }: CameraScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      
    });
  }, []);

  const [type, setType] = useState(CameraType.back);
  const [permission] = Camera.useCameraPermissions();

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Whatsapp needs Camera Permission",
          message:
            "Whatsapp needs camera permission.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        return <View />;
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  requestCameraPermission();

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
export default CameraScreen;