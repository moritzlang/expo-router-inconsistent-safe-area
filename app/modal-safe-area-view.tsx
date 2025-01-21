import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
            <View  style={{ flex: 1, backgroundColor: 'blue' }}>
                <ThemedText>Content is in safe area.</ThemedText>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
