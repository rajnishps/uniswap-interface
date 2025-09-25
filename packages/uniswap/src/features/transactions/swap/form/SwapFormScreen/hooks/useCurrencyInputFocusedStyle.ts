import type { FlexProps } from "ui/src";

function getCurrencyInputFocusedStyle(isFocused: boolean): FlexProps {
  return {
    borderColor: isFocused ? "#ffffff20" : "$transparent",
    backgroundColor: isFocused ? "#ffffff20" : "#ffffff20",
    hoverStyle: {
      borderColor: isFocused ? "#ffffff20" : "$transparent",
      backgroundColor: isFocused ? "#ffffff20" : "#ffffff20",
    },
  };
}

const focusedInputStyle = getCurrencyInputFocusedStyle(true);
const unfocusedInputStyle = getCurrencyInputFocusedStyle(false);

export function useCurrencyInputFocusedStyle(isFocused: boolean): FlexProps {
  return isFocused ? focusedInputStyle : unfocusedInputStyle;
}
