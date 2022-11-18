import {useEffect, useRef} from 'react';

import MusicPlayer from '@messageCreate/MusicPlayer';

import {useRecoilState} from 'recoil';
import {playingState} from '@apis/recoil';

type PreviewProps = {
  type: number;
  fileURL: string;
  subtitle?: string;
  isDetail?: boolean;
};

function VideoPreview({fileURL}: {fileURL: string}) {
  // 배경음악
  const [isPlayingBGM, setIsPlayingBGM] = useRecoilState(playingState);
  const currentPlayingBGM = isPlayingBGM;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current?.pause) {
      if (currentPlayingBGM) {
        setIsPlayingBGM(true);
      }
    } else {
      setIsPlayingBGM(false);
    }
  }, [videoRef.current?.pause]);

  return (
    <video
      ref={videoRef}
      key={fileURL}
      className="message-create-content-image"
      controls={true}
      playsInline={true}>
      <source src={fileURL} />
    </video>
  );
}

// 전달받은 type에 따라 다른 미리보기 컴포넌트 반환
function Preview({
  type,
  fileURL,
  subtitle = '말소리가 없는 음성입니다.',
  isDetail = false,
}: PreviewProps) {
  let preview: any;

  if (type === 0) {
    preview = (
      <div className="message-create-content-text message-create-content-text-preview">
        {fileURL}
      </div>
    );
  } else if (type === 1) {
    preview = (
      <img className="message-create-content-image" src={fileURL} alt="사진" />
    );
  } else if (type === 2) {
    preview = <VideoPreview fileURL={fileURL} />;
  } else if (type === 3) {
    preview = (
      <MusicPlayer fileURL={fileURL} subtitle={subtitle} isDetail={isDetail} />
    );
  }

  return preview;
}

export default Preview;
