import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 40px auto 40px;
  place-items: center;
  grid-gap: 16px;
  height: 44px;
  padding: 20px;
  background-color: #fff;
`;

const NameBox = styled.div`
  font-family: 'Proxima Nova Bold';
  font-size: 20px;
  margin-bottom: 4px;
`;

const DetailBox = styled.div`
  font-size: 14px;
`;

const InfoBox = styled.div`
  margin-right: auto;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Arrow = styled.img`
  width: 20px;
  height: 20px;
  transform: ${props => props.isOpened? 'rotate(90deg)': 'rotate(-90deg)'};
`;

const UserData = ({ userData, isOpened=false, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Avatar src={userData?.avatar || '/assets/images/default-user.png'} alt='user' />
      <InfoBox>
        <NameBox>{userData?.name || ''}</NameBox>
        <DetailBox>
          {`Email: ${userData?.email || ''} Date of Birth: ${userData?.date_of_birth || ''}`}
        </DetailBox>
      </InfoBox>
      <Arrow
        src='/assets/images/right-arrow.svg'
        isOpened={isOpened}
        alt='arrow' />
    </Container>
  );
};

export default UserData;