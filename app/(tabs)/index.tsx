import React from 'react';
import { Image, StyleSheet, Platform , View  ,Text , Pressable} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from  '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from  '@expo/vector-icons/MaterialCommunityIcons'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  HomeIcon
} from "@/assets/svgs"
import { Searchbar } from 'react-native-paper';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  
  
  return (
    <View   style={styles.container}>
      <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Positon</ThemedText>
        <View style={styles.c2}>
        <View style={styles.con}>
         <Ionicons name="location-sharp" size={20} color= '#FF37DF'  />
          <Text style={{
            color:'#FFE8FF',
            fontFamily: 'roboto',
          }}>Les mureaux, France</Text>
           <Ionicons name="chevron-down" size={20} color= '#FF37DF' style={styles.down} />
        </View>
        <View style={styles.c3}>
          <Pressable style={styles.btn}>
            <MaterialIcons name="shopping-cart" size={35} color= '#eee'/>
          </Pressable>
           <Pressable style={styles.btn}>
            <Ionicons name="notifications" size={35} color= '#eee'/>
          </Pressable>
        </View>
        </View>
       <View style={styles.containerInput}>
         <Searchbar
         style={styles.search}
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      icon={()=>(
        <Ionicons name="search" size={30} color={'#6300B3'} />
      )}
      right={()=>(
       <MaterialCommunityIcons name="qrcode-scan" size={30} style={{
         marginRight: 10,
       }}  color={'#6300B3'} />
      )}
    />
     <Pressable style={[styles.btn, {
       marginLeft: 15,
     }]}>
            <Ionicons name="filter" size={35} color= '#eee'/>
          </Pressable>
       </View>
      </ThemedView>
      <ThemedText>hello</ThemedText>
      </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
     backgroundColor:'#000',
  },
  header:{
    width: "100%",
    backgroundColor: '#6300B3',
  },
  title: {
    fontFamily: 'medium',
    fontSize: 22,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 2,
    fontWeight: '500',
    color: '#FFE8FF',
  },
  con:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  down:{
    marginBottom: -6
  },
  btn:{
    backgroundColor: '#7835A6',
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  c2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 6,
  } ,
  c3:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  search:{
    height: 50,
  borderRadius: 8,
  width: 330,
  },
  containerInput:{
   flexDirection: 'row',
   margin: 10,
   marginBottom: 20,
   marginTop: 20,
   alignItems: 'center',
  }
});
