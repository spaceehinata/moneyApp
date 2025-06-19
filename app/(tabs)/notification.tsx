import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface NotificationItem {
  id: string;
  name: string;
  message: string;
  avatar: any;
}

const notifications: NotificationItem[] = [
  {
    id: '1',
    name: 'Georgo Armani',
    message: 'Georgo Just sent you $15.',
    avatar: require('../../assets/images/tobi.png'),
  },
  {
    id: '2',
    name: 'Pedro Gonzales',
    message: 'Pedro sent you $14,445.',
    avatar: require('../../assets/images/tobi.png'),
  },
  {
    id: '3',
    name: 'Nuked Nuke',
    message: 'Nuke sent you $45.',
    avatar: require('../../assets/images/tobi.png'),
  },
  {
    id: '4',
    name: 'Nini Gordon',
    message: 'Gordon sent you $1325.',
    avatar: require('../../assets/images/tobi.png'),
  },
  {
    id: '5',
    name: 'Chyaber Gonzales',
    message: 'Chyaber sent you $125.',
    avatar: require('../../assets/images/tobi.png'),
  },
  {
    id: '6',
    name: 'Your Dog',
    message: 'Dog sent you $10.',
    avatar: require('../../assets/images/tobi.png'),
  },
];

const NotificationScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotifications = notifications.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <Pressable style={styles.itemContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#3D56FA" />
    </Pressable>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.searchBar}>
        <Ionicons name="search" size={22} color="#3D56FA" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#3D56FA"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <Text style={styles.headerText}>You can check your{"\n"}notifications here.</Text>
      <FlatList
        data={filteredNotifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </KeyboardAvoidingView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:30,
    paddingTop: 40,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 45,
    marginTop:40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#3D56FA',
    fontSize: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3A3A3A',
    marginVertical:40,
  },
  list: {
    // paddingBottom: 40,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#DEE1EF',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginRight: 10.77,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: '400',
    fontSize: 16,
    color: '#000',
  },
  message: {
    color: '#3D56FA',
    fontSize: 16,
    marginTop: 5,
    fontWeight: '400',
  },
});
