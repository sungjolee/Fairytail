import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import Room from '../components/main/Room';
import {useRecoilState} from 'recoil';
import {loadingState, playingState} from '@apis/Recoil';
import InitMessage from '@/apis/notifications/foregroundMessaging';
import Confirm from '@/components/common/Confirm';
import Alert from '@/components/common/Alert';
import {returnFalse, returnTrue} from '@/components/common/commonFunc';
import {bgmList} from '@common/commonFunc';

import OpenHelp from '@common/OpenHelp';

let prePath = '';

function Main() {
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  // const []
  const info = {
    title: 'BGM 자동재생 확인',
    message: `BGM 재생을 허용하시겠습니까? \n(BGM은 설정에서 변경 및 재생 여부 수정이 가능합니다)`,
  };
  const [onPlay, setOnplay] = useRecoilState(playingState);
  const [openConfirm, setOpenConfirm] = useState(false);
  const onConfirm = () => {
    // 음악 이름을 넣자
    localStorage.setItem('bgm', bgmList[0].title);
    setOpenConfirm(returnFalse);
    setOnplay(returnTrue);
  };
  const onCancel = () => {
    localStorage.setItem('bgm', '');
    setOpenConfirm(returnFalse);
  };

  if (isLoading) {
    setIsLoading(false);
    window.location.reload();
  }

  useEffect(() => {
    console.log('load');
    if (!localStorage.getItem('bgm') && !isLoading) {
      setOpenConfirm(returnTrue);
      console.log('open');
    }
  }, [isLoading]);
  return (
    <>
      <InitMessage />
      <Confirm
        info={info}
        onConfirmed={onConfirm}
        onCancel={onCancel}
        open={openConfirm}
      />
      {/* <Alert info={} open={} onConfirmed={} /> */}

      <OpenHelp imagesIndex={0} />
      <Room />
    </>
  );
}
export default Main;
