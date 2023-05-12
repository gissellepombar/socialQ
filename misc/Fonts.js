import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
  });
};

// Font styles
export const title = {
  fontFamily: 'Roboto-Bold',
  fontSize: 30,
  color: '#FFFFFF',
};

export const headingbold = {
  fontFamily: 'Roboto-Bold',
  fontSize: 25,
  color: '#000000',
};

export const heading = {
  fontFamily: 'Roboto-Bold',
  fontSize: 20,
  color: '#FFFFFF',
};

export const greytext = {
  fontFamily: 'Roboto-Medium',
  color: '#9B9B9B',
  fontSize: 15,
};

// export const title = {
//     fontFamily: 'Roboto-Bold',
//     fontSize: 30,
//     color: '#FFFFFF',
//   };
  
//   export const headingbold = {
//     fontFamily: 'Roboto-Bold',
//     fontSize: 25,
//     color: '#000000',
//   };
  
//   export const heading = {
//     fontFamily: 'Roboto-Bold',
//     fontSize: 20,
//     color: '#FFFFFF',
//   };
  
//   export const greytext = {
//     fontFamily: 'Roboto-Medium',
//     color: '#9B9B9B',
//     fontSize: 15,
//   };