function ImageEstado({ userName, userImage, storyImage }) {
  return (
    <div className="story-card position-relative text-white" style={{ 
      width: '120px', 
      height: '200px', 
      borderRadius: '10px', 
      overflow: 'hidden',
      backgroundImage: `url(${storyImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      cursor: 'pointer',
      marginRight: '10px',
      flexShrink: 0
    }}>
      <img src={userImage} alt={userName} className="rounded-circle border border-2 border-primary position-absolute top-0 start-0 m-2" style={{ width: '40px', height: '40px' }} />
      <div className="position-absolute bottom-0 p-2">
        <small className="fw-bold">{userName}</small>
      </div>
    </div>
  );
}

export default ImageEstado;