// Account.tsx
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { DownloadPicture } from '@/components/BottomSheet';

export default function Account() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Account</Text>
        {/* Download Picture Button and Modal */}
        <DownloadPicture />
      </View>
    </SafeAreaView>
  );
}
