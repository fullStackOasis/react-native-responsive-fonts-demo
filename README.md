# Sizing Text in React Native

Demos the problem with sizing text in React Native. Unlike Android's "sp" unit, there no "responsive" text sizing in React Native. So far as I can tell, you are on your own as of November 2020.

First screenshot shows some text and an image below it. The font size is at the 4th setting from left on an Android A20 device.
<img src="https://github.com/fullStackOasis/react-native-responsive-fonts-demo/raw/main/init-screen-smallest-font-no-zoom-android-a20.png" size="500">

Second screenshot shows the app with font size all the way to the left. In this case, the `LargeText` component compensates by setting a larger font size.
<img src="https://github.com/fullStackOasis/react-native-responsive-fonts-demo/raw/main/init-screen-smallest-font-no-zoom-android-a20-using-LargeText.png" size="500">


Third screenshot shows the app with font size all the way to the right. `TeenyWeenyText` component is used to compensate by setting a smaller font size.
<img src="https://github.com/fullStackOasis/react-native-responsive-fonts-demo/raw/main/init-screen-smallest-font-no-zoom-android-a20-using-TeenyWeenyText.png" size="500">


See documentation on extending styles in [styled-components](https://styled-components.com/docs/basics#extending-styles).