import React from 'react'
import Editor from '@monaco-editor/react';

const EditView = () => {
  return (
    <div>
      <Editor height="70vh" defaultLanguage="java" defaultValue="// some comment" />
    </div>
  )
}

export default EditView