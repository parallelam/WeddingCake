import axios from 'axios';

const getUserInfo = async () => {

  const response = await axios.get('http://localhost:3000/api/v1/user/').then(res => {
    if(res.status == 200&&res.data.status == "SUCCESS") {
      const users = res.data.data;
      return users;
    }
  });
  console.log(response);
  return response;
};

export default getUserInfo;