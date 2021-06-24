/**
 * Sample React Native App To Scan QR Codes
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { RNCamera } from 'react-native-camera';


const App: () => Node = () => {

  return (
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
        >
        </RNCamera>
  );
};

export default App;
