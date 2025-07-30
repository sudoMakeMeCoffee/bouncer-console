/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class', // 🔥 Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "#5227FF",
        secondary: "#060010",
        accent: "#42D674",
        background: "#F7F8F8",
        white: "#FFFFFF",
        black: "#000000",
        gray: {
          100: "#F7F8F8",
          200: "#E1E2E3",
          300: "#C4C5C6",
          400: "#A7A8A9",
          500: "#8A8B8C",
          600: "#6B6C6D", // for dark mode
          700: "#4C4D4E", // for dark mode
        },
      },

      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },

      fontSize: {
        sm: ["0.875rem", "1.25rem"],
        md: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
      },

      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },

      height: {
        sm: "2rem",
        md: "2.5rem",
        lg: "3rem",
      },

      width: {
        sm: "8rem",
        md: "12rem",
        lg: "16rem",
      },

      maxWidth: {
        "7xl": "1280px",
        "8xl": "1440px",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
      },

      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },

      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents, theme }) {
      addComponents({
        ".wrapper": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.md"),
          paddingRight: theme("spacing.md"),
          [`@screen sm`]: {
            paddingLeft: theme("spacing.lg"),
            paddingRight: theme("spacing.lg"),
          },
          [`@screen lg`]: {
            paddingLeft: theme("spacing.xl"),
            paddingRight: theme("spacing.xl"),
            maxWidth: theme("maxWidth.7xl"),
          },
        },

        ".input-primary": {
          display: "flex",
          alignItems: "center",
          padding: theme("spacing.md"),
          borderRadius: theme("borderRadius.lg"),
          border: `1px solid #aaa`,
          backgroundColor: "#fff",
          color: "#000",
          "&:focus-within": {
            borderColor: theme("colors.primary"),
          },
          "&.dark": {
            backgroundColor: theme("colors.secondary"),
            border: `1px solid ${theme("colors.gray.600")}`,
            color: theme("colors.gray.200"),
          },
        },

        ".input-field": {
          flex: "1",
          border: "1px solid #aaa",
          outline: "none",
          backgroundColor: "transparent",
          color: "#000",
          fontSize: theme("fontSize.md")[0],
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          "&:focus": {
            border: "1px solid #000",
          },
          ".dark &": {
            color: theme("colors.gray.100"),
            borderColor: theme("colors.gray.600"),
            "&:focus": {
              borderColor: theme("colors.gray.400"),
            },
          },
        },

        ".btn-primary": {
          backgroundColor: theme("colors.primary"),
          color: "#fff",
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          boxShadow: theme("boxShadow.sm"),
          "&:hover": {
            boxShadow: theme("boxShadow.md"),
          },
          "&:disabled": {
            backgroundColor: theme("colors.secondary"),
            cursor: "not-allowed",
            opacity: "0.6",
            boxShadow: "none",
          },
        },

        ".btn-secondary": {
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: "200",
          border: "1px solid #aaa",
          display: "inline-flex",
          alignItems: "center", 
          justifyContent: "center",
          borderRadius: theme("borderRadius.md"),
          transition: "background-color 0.2s ease-in-out",
          boxShadow: theme("boxShadow.sm"),
          "&:hover": {
            boxShadow: theme("boxShadow.lg"),
          },
          "&:disabled": {
            backgroundColor: theme("colors.secondary"),
            cursor: "not-allowed",
            opacity: "0.6",
            boxShadow: "none",
          },
          ".dark &": {
            backgroundColor: theme("colors.secondary"),
            color: theme("colors.gray.100"),
            borderColor: theme("colors.gray.600"),
          },
        },

        ".btn-sm": {
          fontSize: theme("fontSize.sm")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.md")}`,
          height: theme("height.sm"),
        },
        ".btn-md": {
          fontSize: "12px",
          padding: "5px 15px"
        },
        ".btn-lg": {
          fontSize: theme("fontSize.lg")[0],
          padding: `${theme("spacing.md")} ${theme("spacing.xl")}`,
          height: theme("height.lg"),
        },

        ".input-sm": {
          fontSize: theme("fontSize.sm")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.md")}`,
          height: theme("height.sm"),
        },
        ".input-md": {
          fontSize: theme("fontSize.md")[0],
          padding: `${theme("spacing.sm")} ${theme("spacing.lg")}`,
          height: theme("height.md"),
        },
        ".input-lg": {
          fontSize: theme("fontSize.lg")[0],
          padding: `${theme("spacing.md")} ${theme("spacing.xl")}`,
          height: theme("height.lg"),
        },
      });
    },
  ],
};
