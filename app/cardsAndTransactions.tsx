import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { cards } from '../data/cardsData';
import { transactions, transactionStyles } from '../data/transactions';

const { width, height } = Dimensions.get('window');

const CardsAndTransactions = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Image source={require('../assets/images/back.png')} style={styles.backArrow} />
        </TouchableOpacity>

        <Text style={styles.headerText}>You can check your cards here.</Text>
      </View>

      {/* Card Slider */}
      <View style={styles.cardSliderWrapper}>
        <FlatList
          horizontal
          data={cards}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 32 }}
          onScroll={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / (209 + 16));
            setActiveCardIndex(index);
          }}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => {
            const isActive = index === activeCardIndex;
            const textColor = item.isGradient ? '#fff' : '#000';
            const cardHeight = isActive ? 305 : 258;

            const CardContent = () => (
              <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <View>
                  <Text style={[styles.cardBalance, { color: textColor }]}>{item.balance}</Text>
                  <Text style={[styles.cardType, { color: textColor }]}>{item.type}</Text>
                </View>
                <View style={styles.cardBottomRow}>
                  <View>
                    <Text style={[styles.cardExpiry, { color: textColor }]}>{item.expiry}</Text>
                    <Text style={[styles.cardDigits, { color: textColor }]}>**** **** **** {item.lastDigits}</Text>
                  </View>
                  <Image source={item.logo} style={styles.cardLogo} />
                </View>
              </View>
            );

            const shadowStyle = {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.11,
              shadowRadius: 25,
              elevation: 10,
            };

            return item.isGradient ? (
              <LinearGradient
                colors={['#40D3F2', '#2B47FC', '#E100FF']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={[styles.card, shadowStyle, { height: cardHeight }]}
              >
                <CardContent />
              </LinearGradient>
            ) : (
              <View
                style={[
                  styles.card,
                  shadowStyle,
                  { backgroundColor: '#FFFFFF', height: cardHeight },
                ]}
              >
                <CardContent />
              </View>
            );
          }}
        />
      </View>

      {/* Recent Transactions Title */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      
      {/* Transactions List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={transactionStyles.transactionItem}>
            <Image source={item.icon} style={transactionStyles.icon} />
            <View style={{ flex: 1 }}>
              <Text style={transactionStyles.transactionTitle}>{item.title}</Text>
              <Text style={transactionStyles.transactionDate}>{item.date}</Text>
            </View>
            <Text style={transactionStyles.amount}>{item.amount}</Text>
            <Text style={transactionStyles.arrow}>{'>'}</Text>
          </View>
        )}
        style={transactionStyles.transactionsList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
};

export default CardsAndTransactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#2743FD',
    padding: 32,
    paddingTop: 66,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    height: 278,
    zIndex: 2,
    position: 'relative',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
  },
  cardSliderWrapper: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    zIndex: 3,
    paddingLeft: 32,
  },
  card: {
    borderRadius: 30,
    padding: 20,
    width: 209,
    marginRight: 25,
    justifyContent: 'space-between',
  },
  cardBalance: {
    fontSize: 24,
    fontWeight: '700',
  },
  cardType: {
    fontWeight: '700',
    fontSize: 16,
  },
  cardExpiry: {
    fontWeight: '400',
    fontSize: 14,
  },
  cardDigits: {
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 16,
  },
  cardLogo: {
    width: 40,
    height: 33,
    marginBottom: 16,
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 32,
    marginTop: 268,
    zIndex: 1,
  },
  
  backArrow: {
    width: 26,
    height: 21,
    tintColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
    zIndex: 10,
  },
});
