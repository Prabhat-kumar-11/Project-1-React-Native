import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: `https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mountains</Text>
          <Text style={styles.cardLabel}>Himalaya, Himachal</Text>
          <Text style={styles.cardDescription}>
            Explore the majestic mountains of India, the tallest in the world.
          </Text>
          <Text style={styles.cardFooter}>2 days away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  card: {
    width: 350,
    borderRadius: 10,
    marginVertical: 16,
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 16,
  },
  cardLabel: { color: 'dodgerblue', fontSize: 16 },
  cardTitle: { color: 'purple', fontSize: 20, fontWeight: 'bold' },
  cardDescription: {
    color: 'black',
    fontSize: 14,
    marginTop: 8,
  },
  cardFooter: {
    color: 'aqua',
    fontSize: 14,
    marginTop: 8,
  },
});
