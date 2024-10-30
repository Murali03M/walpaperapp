import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Explore() {
  return (
    <SafeAreaView >
      <View >
        <Text >Explore</Text>
        {/* Link to Account Info Page */}
        <Link href="/accountinfo" >
          <Text >Account Info</Text>
         </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  linkButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
});
