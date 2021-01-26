const brand = {
  color: {
    black: "#000000",
    verydkgray: "#111317",
    dkgray: "#1F2127",
    ltpurple: "#6C5DD3",
    ltred: "#DB535B",
    white: "#FFFFFF",
  },
};

const theme = {
  button: {
    default: {
      bgColor: brand.color.black,
      textColor: brand.color.white,
    },
    primary: {
      bgColor: brand.color.ltpurple,
      textColor: brand.color.white,
    },
  },
};

export { theme };
