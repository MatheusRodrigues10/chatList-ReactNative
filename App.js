import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,  Platform } from 'react-native';
import ListItem from './src/ListItem';
import { conversations } from './src/data';

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList 
        data={conversations}
        renderItem={({item}) => <ListItem data={item} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS == 'ios') ? 20 : 40,
    backgroundColor: '#fff',
  },
});
