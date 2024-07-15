import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';

const FileIcon = () => {
  return (
    <div className="w-full cursor-pointer ml-8">
      <FontAwesomeIcon icon={faFileArchive} />
    </div>
  );
};

export default FileIcon;
