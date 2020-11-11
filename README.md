# Sizing Text in React Native

Demos the problem with sizing text in React Native. Unlike Android's "sp" unit, there no "responsive" text sizing in React Native. You are on your own as of November 2020.

First screenshot shows some text and an image below it. The font size is at the 4th setting from left on an Android A20 device.

Second screenshot shows the app with font size all the way to the left. In this case, the `LargeText` component compensates by setting a larger font size.

Third screenshot shows the app with font size all the way to the right. `TeenyWeenyText` component is used to compensate by setting a smaller font size.