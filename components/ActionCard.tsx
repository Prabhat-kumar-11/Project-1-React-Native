import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in javscript 21</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://thumbs.dreamstime.com/z/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg?w=992',
          }}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium neque quos aperiam incidunt expedita,
            sunt minus. Vero fuga quam repellat tenetur vel, sapiente illo modi
            velit? Quidem, ex quam?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => openWebsite('https://github.com/Prabhat-kumar-11')}>
            <Text style={styles.readMoreButtonText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 4,
  },
  elevatedCard: {
    // You can add more styles specific to elevated cards if needed
  },
  headingContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardBody: {
    marginVertical: 10,
  },
  footerContainer: {
    alignItems: 'center',
  },
  readMoreButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  readMoreButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
