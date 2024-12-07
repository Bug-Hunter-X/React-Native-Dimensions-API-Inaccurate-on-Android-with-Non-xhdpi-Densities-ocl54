# React Native Dimensions API Inaccurate on Android

This repository demonstrates a bug in React Native's `Dimensions` API where incorrect screen dimensions are returned on Android devices with screen densities other than xhdpi. The bug and its solution are provided in separate Javascript files.

## Bug Description

The `Dimensions.get('window')` method returns inaccurate `width` and `height` values on certain Android devices. This leads to layout issues and incorrect rendering of UI elements.

## Bug Solution

The solution involves using the `PixelRatio` API to adjust the dimensions according to the screen density. This ensures that the UI elements are displayed correctly regardless of the device's screen density.

## Files

- `DimensionsBug.js`: Demonstrates the bug by showing incorrect dimensions obtained using Dimensions.get('window').
- `DimensionsBugSolution.js`: Shows how to use `PixelRatio` to correct the reported dimension values.