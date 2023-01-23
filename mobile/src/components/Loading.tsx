import { ActivityIndicator, View } from 'react-native';
import colors from "tailwindcss/colors"

export function Loading() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.zinc[900]}}>
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
}