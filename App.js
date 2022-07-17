import * as React from "react";
import { render } from "react-dom";
import PickImage from"./screens/Cmaera.js"

export default function App() 
{
  render() 
  {
    return 
    <PickImage/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
