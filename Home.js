import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { datasource, cardImage } from './Data.js';

const Home = ({ navigation }) => {
  // Changes when we come back from Add/Edit, so the list re-draws with the new data.
  const isFocused = useIsFocused();

  const renderItem = ({ item, index, section }) => {
    return (
      <TouchableOpacity
        style={[styles.item, { backgroundColor: section.itemcolor, borderLeftColor: section.bgcolor }]}
        onPress={() =>
          navigation.navigate('Edit', {
            index: index,
            type: section.title,
            key: item.key,
            cardNumber: item.cardNumber,
          })
        }>
        <View>
          <Text style={[styles.itemText, { color: section.textcolor }]}>{item.key}</Text>
          <Text style={[styles.itemSubText, { color: section.textcolor }]}>
            Card #{String(item.cardNumber).padStart(3, '0')}
          </Text>
        </View>
        <Image source={{ uri: cardImage(item.cardNumber) }} style={styles.cardImage} />
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({ section: { title, icon, bgcolor, data } }) => {
    return (
      <View style={[styles.header, { backgroundColor: bgcolor }]}>
        <MaterialCommunityIcons name={icon} size={26} color="white" />
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerCount}>{data.length} cards</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.addButton}>
        <Button title="Add Pokemon" color="#E3350D" onPress={() => navigation.navigate('Add')} />
      </View>
      <SectionList
        sections={datasource}
        extraData={isFocused}
        keyExtractor={(item, index) => item.key + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  addButton: {
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 6,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 16,
    borderRadius: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  headerCount: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 6,
    borderRadius: 10,
    marginTop: 8,
    paddingVertical: 10,
    paddingLeft: 14,
    paddingRight: 10,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  itemSubText: {
    fontSize: 14,
    marginTop: 4,
    opacity: 0.7,
  },
  cardImage: {
    width: 100,
    height: 140,
    borderRadius: 6,
  },
});

export default Home;
