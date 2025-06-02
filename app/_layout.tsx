import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useWindowDimensions } from 'react-native';

export default function RootLayout() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <Tabs 
      screenOptions={{ 
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#a7a7a7',
        tabBarStyle: {
          paddingBottom: isLandscape ? 0 : 85,
          paddingTop: isLandscape ? 0 : 10,
          borderTopWidth: 1,
          borderTopColor: '#d9d9d9',
          height: isLandscape ? 50 : 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="vakanties"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="over"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="instellingen"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
