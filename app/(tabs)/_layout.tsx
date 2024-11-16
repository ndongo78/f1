import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
  HomeIcon,
  ExpoleIcon,
  FavIcon,
  ProfilIcon,
} from "@/assets/svgs"
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF37DF",
        headerShown: false,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon width={35} height={35} color={color}   fill={color}  />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <ExpoleIcon width={35} height={35} color={color}   fill={color}  />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <FavIcon width={35} height={35} color={color}   fill={color}  />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <ProfilIcon width={35} height={35} color={color}   fill={color}  />
          ),
        }}
      />
    </Tabs>
  );
}
