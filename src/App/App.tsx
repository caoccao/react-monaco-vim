import Editor from '@monaco-editor/react'
import { Box } from '@mui/material'
import { editor } from 'monaco-editor'
// @ts-expect-error There's no types for monaco-vim
import { initVimMode } from 'monaco-vim'

import './App.css'

const App = () => {
  function onMountEditor(monacoEditor: editor.IStandaloneCodeEditor) {
    initVimMode(monacoEditor, document.querySelector(`.status-node-target`))
  }

  return (
    <div className="App">
      <Box sx={{ width: '100%', border: '1px solid black' }}>
        <Editor
          height="80vh"
          width="80vh"
          language="plaintext"
          onMount={onMountEditor}
          defaultValue="React Monaco Vim"
          theme="light"
          options={{
            fontSize: 16,
          }}
        />
        <code
          className={`status-node-target`}
          style={{
            padding: '3px',
            backgroundColor: 'lightgray',
            marginTop: '3px',
            textAlign: 'left',
            color: 'black',
            display: 'none',
          }}
        ></code>
      </Box>
    </div>
  )
}

export { App }
