'use client';

import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import BurgerMenu from '../../components/BurgerMenu';
import NotificationIcon from '../../components/icons/NotificationIcon';
import UserIcon from '../../components/icons/UserIcon';
import WalletIcon from '../../components/icons/WalletIcon';

export default function RootLayout() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("homepage");

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {/* 🟡 Tabs */}
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

      <BurgerMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        activeMenu={activeMenu}
        onNavigate={(menuId) => {
          setActiveMenu(menuId);
          setMenuVisible(false);
        }}
      />
    </View>
  );
}
