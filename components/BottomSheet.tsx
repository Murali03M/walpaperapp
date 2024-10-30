// DownloadPicture.tsx
import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export const DownloadPicture = () => {
  // Ref for the BottomSheetModal
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Open the BottomSheetModal
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // Rendering the modal
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <Button title="Download Picture" onPress={handlePresentModalPress} />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          snapPoints={["99%"]}
                  enablePanDownToClose={true}
                  handleIndicatorStyle={{ height:0}}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
