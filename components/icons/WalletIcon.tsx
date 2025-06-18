import React from "react";
import { View } from "react-native";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface WalletIconProps {
  color: string;
  size: number;
  focused: boolean;
}

export default function WalletIcon({
  color,
  size = 26,
  focused,
}: WalletIconProps) {
  const scale = size / 26;
  const strokeColor = focused ? "#2B47FC" : "gray";

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg
        width={26 * scale}
        height={25 * scale}
        viewBox="0 0 26 25"
        fill="none"
      >
        <G clipPath="url(#clip0_661_28)">
          <Path
            d="M22.6 12.7083L22.6 6.04163L17.8 6.04163L7.4 6.04163L3.4 6.04163C2.0744 6.04163 1 4.92246 1 3.54163L1 21.0416C1 22.8825 2.4328 24.375 4.2 24.375L22.6 24.375L22.6 17.7083"
            stroke={strokeColor}
            strokeWidth="1.05"
            strokeLinecap="square"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 17.7083L19.4 17.7083C18.0744 17.7083 17 16.5891 17 15.2083C17 13.8274 18.0744 12.7083 19.4 12.7083L25 12.7083L25 17.7083Z"
            stroke={strokeColor}
            strokeWidth="1.05"
            strokeLinecap="square"
          />
          <Path
            d="M17.8 2.70829L17.8 1.04163L3.4 1.04163C2.0744 1.04163 1 2.16079 1 3.54163C1 4.92246 2.0744 6.04163 3.4 6.04163"
            stroke={strokeColor}
            strokeWidth="1.05"
            strokeLinecap="square"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_661_28">
            <Rect width="26" height="25" fill="white" />
          </ClipPath>
        </Defs>
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
