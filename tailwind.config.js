module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        xxs: '280px',
        xs: '320px',
        sm: '480px',
        md: '800px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        YGCRed: '#C71D0E',
        YGCDarkRed: '#3B241E',
        YGCGold: '#D3AE37',
        YGCDarkGold: '#c5a964',
        YGCGrey: '#3A3A3B',
        YGCLightGrey: '#6F6F6F',
        YGCBackGround: '#1e1e1c',

      },
      fontFamily: {
        'matterregular': ['matterregular', 'sans-serif'],
        'matterlight': ['matterlight', 'sans-serif'],
        'mattermedium': ['mattermedium', 'sans-serif'],
        'matterheavy': ['matterheavy', 'sans-serif'],
        'mattersemibold': ['mattersemibold', 'sans-serif'],
        'matterbold': ['matterbold', 'sans-serif'],
        'Matter-Regular': ['Matter-Regular', 'sans-serif'],
        'Matter-Bold': ['Matter-Bold', 'sans-serif'],
        'Matter-Semibold': ['Matter-Semibold', 'sans-serif'],
        'Matter-Light': ['Matter-Light', 'sans-serif'],
        'Matter-Heavy': ['Matter-Heavy', 'sans-serif'],
        'Matter-Medium': ['Matter-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}