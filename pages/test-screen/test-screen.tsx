import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TobBar } from '../../components/TobBar/TobBar';

const topOffset = 12;
const onPress = () => {};

const plusButton = { iconName: 'plus', onPress };

export const TestScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[styles.content, { paddingTop: top + topOffset }]}
      style={styles.container}
    >
      <View style={styles.item}>
        <TobBar title="Title" />
      </View>
      <View style={styles.item}>
        <TobBar backTitle="Parent Title" title="Title" />
      </View>
      <View style={styles.item}>
        <TobBar rightButtons={[plusButton]} title="Title" />
      </View>
      <View style={styles.item}>
        <TobBar backTitle="Parent Title" rightButtons={[plusButton]} title="Title" />
      </View>
      <View style={styles.item}>
        <TobBar
          backTitle="Parent Title"
          rightButtons={[plusButton, plusButton, plusButton]}
          title="Title"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F7',
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
  item: {
    marginBottom: 16,
  },
});
