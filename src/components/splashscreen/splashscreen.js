import React, { useEffect, useState } from 'react';
import { Flex, Logo } from '../styled';

const Splashscreen = ({ delay = 250, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <Flex style={{ height: '100vh' }}>
      <Logo />
    </Flex>
  );
};

Splashscreen.propTypes = {};

export default Splashscreen;
