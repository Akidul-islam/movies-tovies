'use client';
import ReactPlayer from 'react-player/youtube';

// Only loads the YouTube player
const VideoPlayer = ({ video_key }: { video_key: string }) => {
  return (
    <ReactPlayer
      controls
      url={`https://www.youtube.com/watch?v=${video_key}`}
      onClickPreview={() => console.log('preview')}
    />
  );
};

export default VideoPlayer;
