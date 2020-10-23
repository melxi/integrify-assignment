import React from 'react';

const Avatar = ({name}) => {
  const avatarStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    height: '100px',
    margin: '0 auto',
    color: "white",
    backgroundColor: "DodgerBlue",
    borderRadius: '100%'
  };

  return (
    <div style={avatarStyles}>
      <h2>{name.charAt(0)}</h2>
    </div>
  )
}

export default Avatar;