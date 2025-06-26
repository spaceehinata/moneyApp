import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ExpenseCardProps {
  title: string;
  amount: string;
  backgroundColor: string;
  circleColor: string;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  title,
  amount,
  backgroundColor,
  circleColor,
}) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={[styles.circle, { backgroundColor: circleColor }]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // width: '47%',
    width: 160,
    height: 100,
    borderRadius: 25,
    padding: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    width: 121,
    height: 121,
    borderRadius: 100,
    top: -29,
    left: -6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    zIndex: 1,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    zIndex: 1,
    marginTop: 10,
  },
});

export default ExpenseCard;
