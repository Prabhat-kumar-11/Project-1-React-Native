import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardRed]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.cardRed]}>
          <Text>RED</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardRed: {backgroundColor: 'red'},
  cardGreen: {backgroundColor: 'green'},
  cardBlue: {backgroundColor: 'aqua'},
});
