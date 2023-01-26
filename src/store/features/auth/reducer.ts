import {AuthInitialState} from './authSlide';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const reducer = {
  DO_SOMETHING: (state: AuthInitialState) => {},
  LAUNCH_CAMERA: (state: AuthInitialState) => {
    console.log('hey');

    // launchCamera(
    //   {
    //     mediaType: 'photo',
    //     quality: 0.5,
    //   },
    //   res => {
    //     console.log(res);
    //   },
    // );
  },
};

export default reducer;
