import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
    const insets = useSafeAreaInsets()

    return (
        <View style={{flex:1, backgroundColor: 'grey'}}>
            <View style={{ position: 'absolute', alignItems: 'center', left:0, right: 0, bottom: insets.bottom + 16, borderWidth: 2, backgroundColor: 'red' }}>
                <ThemedText type="subtitle">Floating Button</ThemedText>
            </View>
        </View>
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
