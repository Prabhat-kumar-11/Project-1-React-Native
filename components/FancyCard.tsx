import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: `https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>mountains </Text>
          <Text style={styles.cardLable}>himalaya,himachal </Text>
          <Text style={styles.cardDescription}>Huge mountain of india and greatest mountain in the world   </Text>
          <Text style={styles.cardFooter}>2 days away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevated: {},
  cardImage: {height: 200, width: 300},
  cardBody: {},
  cardLable: {},
  cardTitle: {},
  cardDescription: {},
  cardFooter: {},
});
