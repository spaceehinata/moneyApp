import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface NotificationIconProps {
  color: string;
  size: number;
  focused: boolean;
}

export default function NotificationIcon({
  color,
  size = 26,
  focused,
}: NotificationIconProps) {
  const scale = size / 21; // base width from SVG is 21
  const strokeColor = focused ? "#2B47FC" : "gray";

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg
        width={21 * scale}
        height={25 * scale}
        viewBox="0 0 21 25"
        fill="none"
      >
        <Path
          stroke={strokeColor}
          strokeLinecap="square"
          strokeWidth={1.045}
          d="M13.545 20.863A3.146 3.146 0 0 1 10.41 24a3.146 3.146 0 0 1-3.136-3.137"
        />
        <Path
          stroke={strokeColor}
          strokeLinecap="square"
          strokeWidth={1.045}
          d="M17.727 13.546V8.318C17.727 4.293 14.434 1 10.41 1 6.384 1 3.091 4.293 3.091 8.318v5.228C3.09 17.727 1 20.864 1 20.864h18.818s-2.09-3.137-2.09-7.319Z"
        />
      </Svg>

      {focused && (
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 2.5,
            backgroundColor: "#2743FD",
            marginTop: 8,
          }}
        />
      )}
    </View>
  );
}
