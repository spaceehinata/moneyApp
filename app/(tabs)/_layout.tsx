'use client';

import { Tabs, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomButton from "../../components/Button";
import NotificationIcon from '../../components/icons/NotificationIcon';
import UserIcon from '../../components/icons/UserIcon';
import WalletIcon from '../../components/icons/WalletIcon';

import { MenuProvider, useMenu } from './context/MenuContext';

const { width } = Dimensions.get('window');
const menuWidth = width * 0.75;

function InnerRootLayout() {
  const router = useRouter();
  const { menuVisible, openMenu, closeMenu } = useMenu();
  const slideAnim = useRef(new Animated.Value(-menuWidth)).current;

  const [activeMenuItem, setActiveMenuItem] = useState('Payments');

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuVisible ? 0 : -menuWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  const renderMenuItem = (label: string, icon: any, onPress?: () => void) => {
    const isActive = activeMenuItem === label;

    return (
      <TouchableOpacity
        style={[
          styles.menuItemWrapper,
          isActive && styles.activeMenuItemWrapper,
        ]}
        onPress={() => {
          setActiveMenuItem(label);
          closeMenu();
          onPress?.();
        }}
      >
        <View style={styles.leftSide}>
          <Image source={icon} style={styles.menuIcon} />
          <Text style={styles.menuItem}>{label}</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 108,
              paddingBottom: 35,
              paddingTop: 35,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              zIndex: 0,
            },
            tabBarIconStyle: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        >
          <Tabs.Screen
            name="homepage"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <WalletIcon color={color} size={size} focused={focused} />
              ),
              tabBarButton: (props) => {
                const filteredProps = Object.fromEntries(
                  Object.entries(props).filter(([_, v]) => v !== null)
                );
                return (
                  <TouchableOpacity
                    {...filteredProps}
                    onPress={(e) => {
                      if (props.onPress) props.onPress(e);
                      openMenu();
                    }}
                  />
                );
              },
            }}
          />
          <Tabs.Screen
            name="notification"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <NotificationIcon color={color} size={size} focused={focused} />
              ),
            }}
          />
          <Tabs.Screen
            name="user"
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <UserIcon color={color} size={size} focused={focused} />
              ),
            }}
          />
        </Tabs>
      </View>

      {/* Overlay */}
      {menuVisible && (
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={closeMenu}
        >
          <Animated.View style={[styles.overlay, { opacity: 0.3 }]} />
        </TouchableOpacity>
      )}

      {/* Side Menu */}
<Animated.View
  style={[
    styles.sideMenu,
    {
      transform: [{ translateX: slideAnim }],
    },
  ]}
>
  <View style={{ flex: 1, justifyContent: 'space-between' }}>
    <View>
      <View style={styles.userDataWrapper}>
        <Image
          source={require('../../assets/images/prof pic.png')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Shasha Kolakola</Text>
          <Text style={styles.userName}>@chyaber02</Text>
        </View>
      </View>

      <View style={styles.menuItems}>
        {renderMenuItem('Payments', require('../../assets/images/payment.png'))}
        {renderMenuItem('Transactions', require('../../assets/images/tran.png'), () =>
          router.push('/transfer')
        )}
        {renderMenuItem('My Cards', require('../../assets/images/card.png'), () =>
          router.push('/user')
        )}
        {renderMenuItem('Promotions', require('../../assets/images/promot.png'))}
        {renderMenuItem('Savings', require('../../assets/images/save.png'))}
      </View>
    </View>

    <View style={styles.signOutContainer}>
      <CustomButton
        variant="white"
        text="Sign Out"
        arrowIcon={require("../../assets/images/out.png")}
        navigateTo="/welcome"
      />
    </View>
  </View>
</Animated.View>

    </View>
  );
}

export default function RootWrapper() {
  return (
    <MenuProvider>
      <InnerRootLayout />
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
sideMenu: {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  backgroundColor: '#fff',
  zIndex: 999,
  padding: 20,
  width: menuWidth,
  flex: 1,
  justifyContent: 'space-between', 
},
  userDataWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 18,
    marginRight: 10,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
  },
  userName: {
    fontWeight: '400',
    fontSize: 15,
  },
  menuItems: {
    gap: 22,
  },
menuItemWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 12,
  paddingHorizontal: 10, 
},

activeMenuItemWrapper: {
  backgroundColor: '#F2F4F8',
  height: 50,
  marginHorizontal: -20, 
  paddingHorizontal: 20,
  borderRadius: 12,
},

  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  menuItem: {
    fontSize: 18,
    color: '#2B47FC',
  },
  arrow: {
    fontSize: 22,
    color: '#2B47FC',
  },
  
  signOutContainer: {
    marginBottom: 80,
  },
});
