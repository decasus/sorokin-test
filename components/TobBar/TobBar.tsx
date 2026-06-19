import React from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './TobBar.style';
import { ITobBarController } from './TobBar.model';

export const TobBar = ({
  title,
  backTitle,
  onBackPress,
  rightButtons = [],
}: ITobBarController) => {
  return (
    <View style={styles.container}>
      {backTitle ? (
        <Pressable hitSlop={8} onPress={onBackPress} style={styles.backButton}>
          <View style={styles.backIcon} />
          <Text numberOfLines={1} style={styles.backText}>
            {backTitle}
          </Text>
        </Pressable>
      ) : null}

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      {rightButtons.length ? (
        <View style={styles.rightButtons}>
          {rightButtons.map((button, index) => (
            <Pressable
              hitSlop={8}
              key={`${button.iconName}-${index}`}
              onPress={button.onPress}
              style={styles.iconButton}
            >
              <Text style={styles.plus}>+</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
};

TobBar.displayName = 'TobBar';
