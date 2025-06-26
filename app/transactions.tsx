import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomButton from "../components/Button";
import ExpenseCard from '../components/ExpenseCard';
import { transactions, transactionStyles } from '../data/transactions';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
type CategoryType = 'travel' | 'shopping' | 'sport' | 'medicine';

const getAmountByType = (type: CategoryType): string => {
  const total = transactions
    .filter((t) => t.type === type)
    .reduce((sum, t) => {
      const numeric = parseFloat(t.amount.replace(/[^\d.-]/g, ''));
      return sum + numeric;
    }, 0);

  return total.toFixed(2);
};

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
const translateY = useRef(new Animated.Value(SCREEN_HEIGHT * 0.75)).current;
  const sheetHeight = SCREEN_HEIGHT * 0.85;
  const filteredTransactions = transactions.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

const totalAmount = filteredTransactions.reduce((sum, item) => {
  const numeric = parseFloat(item.amount.replace(/[^\d.-]/g, ''));
  return sum + numeric;
}, 0);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 10,
      onPanResponderMove: (_, gesture) => {
        translateY.setValue(Math.max(SCREEN_HEIGHT * 0.15, gesture.moveY));
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy > 100) {
          Animated.timing(translateY, {
            toValue: SCREEN_HEIGHT * 0.75,
            duration: 200,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.timing(translateY, {
            toValue: SCREEN_HEIGHT * 0.25,
            duration: 200,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Image source={require('../assets/images/back.png')} style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Transactions</Text>
        <Text style={styles.expensesLabel}>Your total expenses</Text>
      <Text style={styles.expensesTotal}>${totalAmount.toFixed(2)}</Text>
      </View>
      <Text style={styles.title}>Your total expenses</Text>
        {/* Category Cards */}
      <View style={styles.cardWrapper}>
          <ExpenseCard
            title="Travel"
            amount={getAmountByType('travel')}
            backgroundColor="#FF8787"
            circleColor="#B05B5B"
          />
          <ExpenseCard
            title="Shopping"
            amount={getAmountByType('shopping')}
            backgroundColor="#F8B756"
            circleColor="#CD9F59"
          />
          <ExpenseCard
            title="Sport"
            amount={getAmountByType('sport')}
            backgroundColor="#8ADDF8"
            circleColor="#559BB2"
          />
          <ExpenseCard
            title="Medicine"
            amount={getAmountByType('medicine')}
            backgroundColor="#D048FC"
            circleColor="#9E38C0"
          />
      </View>

        <View style={styles.pad}>
          <CustomButton
            variant="bank"
            text={`Credit card\nrepayment`}
            backgroundImage={require("../assets/images/bank.png")}
            navigateTo="./"
          />
      </View>
      {/* Bottom Sheet */}
      <Animated.View style={[styles.sheet, { top: Animated.add(translateY, new Animated.Value(105)) }]}>

        {/* Drag Handle */}
      <View style={styles.handleWrapper} {...panResponder.panHandlers}>
        <View style={styles.handle} />
      </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={22} color="#3D56FA" style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#80E0FF"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>

        {/* Transactions */}
        <FlatList
          data={filteredTransactions}
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
      </Animated.View>
    </View>
  );
};

export default Transactions;

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
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom:50,
  },
  expensesLabel: {
    fontSize: 22,
    color: '#80E0FF',
    textAlign: 'center',
    fontWeight: '400',
  },
  expensesTotal: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  backArrow: {
    width: 26,
    height: 21,
    tintColor: 'white',
    marginTop:20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 25,
    zIndex: 10,
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#2743FD',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    height: SCREEN_HEIGHT -80,
    paddingTop: 20,
  },
  handle: {
    width: 70,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
  handleWrapper: {
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
},

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B5EFF',
    borderRadius: 10,
    marginHorizontal: 36,
    paddingHorizontal: 12,
    paddingVertical: 13,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  pad: {
    paddingHorizontal: 32,
  },
  cardWrapper: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  paddingHorizontal: 30,
  marginTop: 30,
  marginBottom: 20,
  gap:13,
},
title:{
  fontSize: 22,
  fontWeight: '700',
  color: '#000',
  marginLeft: 30,
  marginTop: 35,
}
});
