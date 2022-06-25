import React from 'react';
import { useDropzone } from 'react-dropzone';

const ReactDropzone = () => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
      ));

    return (
        <section className="container">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    )
}

export default ReactDropzone;
