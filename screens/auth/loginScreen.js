import { BlurView } from "expo-blur";
import { Pressable, StyleSheet, Text, View } from "react-native";


const flatButton = ({children, onPress}) => {
    <View>
        <BlurView>
            <Pressable 
            style={({pressed})=> [styles.button, pressed && styles.pressed]}
            onPress={onPress}
            >
            <View>
                <Text style={styles.buttonText}> {children} </Text>
            </View>
            </Pressable>
        </BlurView>
    </View>
}


export default flatButton

const styles = StyleSheet.create({
    
})