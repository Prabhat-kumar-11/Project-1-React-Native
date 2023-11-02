import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Active',
      imageUrl:
        'https://wallpapers.com/images/high/cool-profile-picture-mmg5lynaskhshnuo.webp',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'Inactive',
      imageUrl:
        'https://wallpapers.com/images/high/cool-profile-picture-mmg5lynaskhshnuo.webp',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl:
        'https://wallpapers.com/images/high/cool-profile-picture-mmg5lynaskhshnuo.webp',
    },
    {
      uid: 4,
      name: 'Alice Johnson',
      status: 'Online',
      imageUrl:
        'https://wallpapers.com/images/high/cool-profile-picture-mmg5lynaskhshnuo.webp',
    },
    {
      uid: 5,
      name: 'Bob Brown',
      status: 'Offline',
      imageUrl:
        'https://wallpapers.com/images/high/cool-profile-picture-mmg5lynaskhshnuo.webp',
    },
    {
      uid: 6,
      name: 'Eva Martinez',
      status: 'Away',
      imageUrl:
        'https://wallpapers.com/images/high/cool-profile-picture-mmg5lynaskhshnuo.webp',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView contentContainerStyle={styles.contactContainer}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image style={styles.userImage} source={{uri: imageUrl}} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactContainer: {
    alignItems: 'center',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 14,
    color: '#888',
  },
});
