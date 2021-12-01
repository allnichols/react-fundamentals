// Basic Forms
// http://localhost:3000/isolated/exercise/06.extra-3.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [username, setUserName] = React.useState('');
  const inputRef = React.useRef(null);

  const handleSubmit = event => {
    event.preventDefault()
    const refUsername = inputRef.current.value;
    onSubmitUsername(refUsername)
  }

  const handleUpperCaseCheck = event => {
    setUserName(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          onChange={handleUpperCaseCheck}
          ref={inputRef}
          type="text"
          id="username"
          value={username}
           />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App