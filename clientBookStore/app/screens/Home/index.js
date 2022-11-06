import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import helpers from '../../helpers/helpers';

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);

  const getAllBooks = async () => {
    try {
      const response = await helpers.api().get('/books');
      setAllBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommendation</Text>
      <FlatList
        data={allBooks}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: helpers.px(100),
  },
  header: {
    ...helpers.fontStyle('Bold', 16),
    marginLeft: helpers.px(10),
  },
  image: {
    width: helpers.px(150),
    height: helpers.px(232),
    marginBottom: helpers.px(13),
  },
  item: {
    marginRight: helpers.px(10),
    padding: helpers.px(10),
    width: helpers.px(170),
    height: helpers.px(400),
    justifyContent: 'space-between',
  },
  name: {
    ...helpers.fontStyle('Bold', 16),
    marginBottom: helpers.px(8),
  },
  author: {
    ...helpers.fontStyle('Regular', 14),
    marginBottom: helpers.px(8),
  },
  description: {
    ...helpers.fontStyle('Light', 12),
    marginBottom: helpers.px(8),
  },
  price: {
    ...helpers.fontStyle('Bold', 12),
    marginBottom: helpers.px(8),
  },
});
