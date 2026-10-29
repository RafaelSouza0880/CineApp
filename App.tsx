import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/CategoryButton';

export default function App() {
  function teste(){}

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <SearchBar value='teste' onChangeText={teste} onClear={teste} />

      <View style={styles.containerCategory}>
        <CategoryButton title='Todos' selected={true} onPress={teste}/>
        <CategoryButton title='Ação' selected={false} onPress={teste}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0B0B14',
    paddingTop: 40,
  },

  containerCategory: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 20,
    marginTop: 15
  }

});
