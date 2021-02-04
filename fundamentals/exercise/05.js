// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

function Box({style, size, ...otherProps}) {
  return <div size ={size}
              className={`box ${size ? `box--${size}` : ''}`}
              style={{fontStyle: 'italic', ...style}}
              {...otherProps}
  />
}
// const smallBox = <div 
//                 className="box box--small" 
//                 style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
//                 >small lightblue box</div>
// const mediumBox = <div 
//                 className="box box--medium" 
//                 style={{fontStyle: 'italic', backgroundColor: 'pink'}}
//                 >medium pink box</div>
// const largeBox = <div 
//                 className="box box--large" 
//                 style={{fontStyle: 'italic', backgroundColor: 'orange'}}
//                 >large orange box</div>

function App() {
  return (
    <div>
      <Box size="small"
      style={{backgroundColor: 'lightblue'}} 
      children="small lightblue box"
      />
      <Box size="medium"
      style={{backgroundColor: 'pink'}} 
      children="medium pink  box"
      />
      <Box size="large"
      style={{backgroundColor: 'orange'}} 
      children="large orange box"
      />
    </div>
  )
}

export default App
