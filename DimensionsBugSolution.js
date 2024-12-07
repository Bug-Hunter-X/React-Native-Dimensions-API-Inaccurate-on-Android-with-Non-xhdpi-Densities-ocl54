import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const DimensionsBugSolution = () => {
  const [correctedWidth, setCorrectedWidth] = useState(width);
  const [correctedHeight, setCorrectedHeight] = useState(height);

  useEffect(() => {
    const pixelRatio = PixelRatio.get();
    const correctedWidth = width * pixelRatio;
    const correctedHeight = height * pixelRatio;
    setCorrectedWidth(correctedWidth);
    setCorrectedHeight(correctedHeight);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Original Width: {width}</Text>
      <Text>Original Height: {height}</Text>
      <Text>Corrected Width: {correctedWidth}</Text>
      <Text>Corrected Height: {correctedHeight}</Text>
    </View>
  );
};

export default DimensionsBugSolution;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});