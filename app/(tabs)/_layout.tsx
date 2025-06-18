import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import NotificationIcon from "../../components/icons/NotificationIcon";
import UserIcon from "../../components/icons/UserIcon";
import WalletIcon from "../../components/icons/WalletIcon";


export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 108,
            paddingBottom: 35,
            paddingTop: 35,
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarIconStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Tabs.Screen
          name="index"
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
    </>
  );
}
