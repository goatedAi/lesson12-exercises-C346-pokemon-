import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { datasource, cardImage } from './Data.js';

const Edit = ({ navigation, route }) => {
  const [name, setName] = useState(route.params.key);
  const [cardNumber, setCardNumber] = useState(String(route.params.cardNumber));

  let indexnum = datasource.findIndex((section) => section.title === route.params.type);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.typeText}>Type: {route.params.type}</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} />

        <Text style={styles.label}>Card Number:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={3}
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
      </View>

      {cardNumber !== '' && (
        <View style={styles.previewRow}>
          <Image source={{ uri: cardImage(cardNumber) }} style={styles.cardImage} />
        </View>
      )}

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Button
            title="Save"
            color="#2F80D1"
            onPress={() => {
              if (name === '' || cardNumber === '') {
                Alert.alert('Please enter a name and a card number');
                return;
              }
              datasource[indexnum].data[route.params.index] = { key: name, cardNumber: Number(cardNumber) };
              navigation.navigate('Home');
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Delete"
            color="#C62828"
            onPress={() => {
              Alert.alert('Are you sure you want to delete this Pokemon?', '', [
                {
                  text: 'Yes',
                  onPress: () => {
                    datasource[indexnum].data.splice(route.params.index, 1);
                    navigation.navigate('Home');
                  },
                },
                { text: 'No' },
              ]);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F2F2F7',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
  },
  typeText: {
    fontSize: 14,
    color: '#777',
    fontWeight: '600',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  previewRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  cardImage: {
    width: 150,
    height: 210,
    borderRadius: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  button: {
    flex: 1,
  },
});

export default Edit;
