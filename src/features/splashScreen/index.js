import React, { useEffect, useState } from 'react';
import { AlignCenterWrapper, Logo } from '../../components/styled';
import logo from '../../favicon.svg';

const SplashScreen = props => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading && (
        <AlignCenterWrapper>
          <Logo src={logo} alt={'logo'} />
        </AlignCenterWrapper>
      )}
    </>
  );
};

SplashScreen.propTypes = {};

export default SplashScreen;
