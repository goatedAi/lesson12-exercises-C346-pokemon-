import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { datasource, cardImage } from './Data.js';

const Add = ({ navigation }) => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [type, setType] = useState('Fire');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Pikachu"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Card Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 25"
          keyboardType="number-pad"
          maxLength={3}
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />

        <Text style={styles.label}>Type:</Text>
        <View style={styles.pickerBox}>
          <Picker selectedValue={type} onValueChange={(value) => setType(value)}>
            <Picker.Item label="Fire" value="Fire" />
            <Picker.Item label="Water" value="Water" />
            <Picker.Item label="Grass" value="Grass" />
            <Picker.Item label="Lightning" value="Lightning" />
          </Picker>
        </View>
      </View>

      {cardNumber !== '' && (
        <View style={styles.previewRow}>
          <Image source={{ uri: cardImage(cardNumber) }} style={styles.cardImage} />
        </View>
      )}

      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Button
            title="Submit"
            color="#E3350D"
            onPress={() => {
              if (name === '' || cardNumber === '') {
                Alert.alert('Please enter a name and a card number');
                return;
              }
              let item = { key: name, cardNumber: Number(cardNumber) };
              let indexnum = datasource.findIndex((section) => section.title === type);
              datasource[indexnum].data.push(item);
              navigation.navigate('Home');
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
  pickerBox: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
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
    marginTop: 16,
  },
  button: {
    flex: 1,
  },
});

export default Add;
