import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserInfo from '../../components/UserInfo/UserInfo';
import getUserInfo from 'services/api';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.div`
  font-family: 'Proxima Nova Bold';
  font-size: 20px;
  margin-bottom: 16px;
`;

const UserInfoList = () => {
  const [userDataList, setUserDataList ] = useState([]);
  const fetchData = async () => {
    const result = await getUserInfo();
    setUserDataList(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <Title>Users</Title>
      {userDataList.map((userData, index) => (
        <UserInfo
          key={index}
          userData={userData} />
      ))
      }
    </Container>
  );
};

export default UserInfoList;