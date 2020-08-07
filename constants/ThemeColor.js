export const ThemeColor = {
  light: {
    text: '#212121',
    background: '#F5F5F5',
    detailedText: '#ccc'
  },
  dark: {
    text: '#E0E0E0',
    background: '#212121',
    detailedText: '#d6d6d6'
  },
};

export const NavigationColor = (isDark) => {
  return{
    navigationTheme:{
      dark: isDark,
      colors: {
        primary: isDark?'#E0E0E0':'#E74C3C',
        background: isDark?'#212121':'#F5F5F5',
        card: isDark?'#212121':'#F5F5F5',
        text: isDark?'#E0E0E0':'#212121',
        border: '#424242',
        notification: '#E74C3C',
      },
    }
  }
}