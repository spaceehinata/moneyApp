import { Dimensions, ImageSourcePropType, StyleSheet } from 'react-native';

export type CategoryType = 'shopping' | 'medicine' | 'sport' | 'travel';

interface Transaction {
  id: string;
  type: CategoryType;
  title: string;
  date: string;
  amount: string;
  icon: ImageSourcePropType;
}

export const transactions: Transaction[] = [
  {
    id: '1',
    type: 'shopping',
    title: 'Shopping',
    date: '15 Mar 2025, 15:00 PM',
    amount: '120$',
    icon: require('../assets/images/shop.png'),
  },
  {
    id: '2',
    type: 'medicine',
    title: 'Medicine',
    date: '18 Feb 2024, 11:00 AM',
    amount: '555.00$',
    icon: require('../assets/images/med.png'),
  },
  {
    id: '3',
    type: 'sport',
    title: 'Sport',
    date: '1 Feb 2024, 16:32 PM',
    amount: '11.555.00$',
    icon: require('../assets/images/sport.png'),
  },
  {
    id: '4',
    type: 'travel',
    title: 'Travel',
    date: '1 Feb 2024, 16:32 PM',
    amount: '1.555.00$',
    icon: require('../assets/images/travel.png'),
  },
  {
    id: '5',
    type: 'travel',
    title: 'Travel',
    date: '1 Feb 2024, 16:32 PM',
    amount: '1555.00$',
    icon: require('../assets/images/travel.png'),
  },
  {
    id: '6',
    type: 'travel',
    title: 'Travel',
    date: '1 Feb 2024, 16:32 PM',
    amount: '1.555.00$',
    icon: require('../assets/images/travel.png'),
  },
];

const { height } = Dimensions.get('window');

export const transactionStyles = StyleSheet.create({
  transactionsList: {
    flexGrow: 0,
    maxHeight: height - 370,
    marginHorizontal: 0,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  transactionDate: {
    color: '#B9B9B9',
    fontSize: 12,
    fontWeight: '400',
  },
  amount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  arrow: {
    fontSize: 12,
    color: '#C7C7C7',
    marginLeft: 20,
  },
});
