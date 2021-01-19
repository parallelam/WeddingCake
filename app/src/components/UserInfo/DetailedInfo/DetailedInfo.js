import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  background-color: #fff;
  border-radius: 4px;
`;

const SubContainer = styled.div`
  padding: 20px 0;
  border-top: 1px solid #e3e3e3;
  display: flex;

  & img {
    height: 100px;
    object-fit: contain;
    margin-left: auto;
  }
`;

const TextPanel = styled.div`
  display: grid;
  grid-gap: 4px;
  font-size: 14px;
`;

const TitleBox = styled.div`
  font-family: 'Proxima Nova Bold';
  font-size: 20px;
`;

const DetailedInfo = ({userData}) => {
  const medic = userData?.medic || {};
  const state = userData?.state || {};
  return (
    <Container>
      <SubContainer>
        <TextPanel>
          <TitleBox>Medical Recommendation</TitleBox>
          <div>{`Issuer: ${medic?.issuer || ''} `}</div>
          <div>{`State: ${medic?.state || ''} `}</div>
          <div>{`Expiration Date: ${medic?.expiration_date || ''} `}</div>
          <div>{`${medic?.message || ''}`}</div>
        </TextPanel>
        {medic.path_to_image &&
          <img src={medic.path_to_image} alt='medical' />
        }
      </SubContainer>
      <SubContainer>
        <TextPanel>
          <TitleBox>State ID</TitleBox>
          <div>{`State ID Number: ${state?.state_num || ''} `}</div>
          <div>{`State: ${state?.state_name || ''} `}</div>
          <div>{`Expiration Date: ${state?.expiration_date || ''} `}</div>
          <div>{`${state?.message || ''}`}</div>
        </TextPanel>
        {state.path_to_image &&
          <img src={state.path_to_image} alt='medical' />
        }
      </SubContainer>
    </Container>
  );
};

export default DetailedInfo;