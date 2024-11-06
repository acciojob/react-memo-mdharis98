{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from 'react'
import UseMemo from './UserMemo'
import ReactMemo from './ReactMemo'
const App = () => {
  return (
    <div id = "main">
      <h1>React.useMemo</h1>
      <UseMemo />
      <ReactMemo />
    </div>
  )
}

export default App