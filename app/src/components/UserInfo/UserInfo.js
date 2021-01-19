import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'react-collapse';
import UserData from './UserData/UserData';
import DetailedInfo from './DetailedInfo/DetailedInfo';

const Container = styled.div`
  margin-bottom: 12px;
  box-shadow: 0px 0px 6px -2px rgba(0,0,0,0.5);
  cursor: pointer;
`;

const UserInfo = ({ userData }) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleHandler = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Container>
      <UserData userData={userData} isOpened={isOpened} onClick={toggleHandler} />
      <Collapse isOpened={isOpened} theme={{collapse: 'collapse'}}>
        <DetailedInfo userData={userData} />
      </Collapse>
    </Container>
  );
};

export default UserInfo;