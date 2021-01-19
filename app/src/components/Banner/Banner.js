import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';
import Star from '../Star/Star';

const Root = styled.div`
  background-color: #fff;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 20px;
  min-height: 100px;
  margin: 0 auto;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextPanel = styled.div`
  display: grid;
  grid-gap: 4px;
`;

const TitleBox = styled.div`
  font-family: 'Proxima Nova Bold';
  font-size: 32px;
  letter-spacing: 1px;
`;

const TextBox = styled.div`
  font-size: 14px;
`;

const RatingLine = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  place-content: center;
  font-family: 'Proxima Nova Bold';
  font-size: 24px;
  color: grey;
`;

const Banner = ({
  avatar='/assets/images/hanks-dank.jpg',
  title="Hank's Dank",
  address='Dispensary Dankville, California',
  text='Medical & Recreational',
  rating=4.6
}) => {
  return (
    <Root>
      <Container>
        <Avatar src={avatar} alt={title} />
        <TextPanel>
          <TitleBox>{title}</TitleBox>
          <TextBox>{address}</TextBox>
          <TextBox>{text}</TextBox>
          <RatingLine>
            <Rating
            initialRating={rating}
            emptySymbol={
              <Star
                color='transparent'
                border='#00d0ba' />
            }
            fullSymbol={
              <Star
                color='#00d0ba'
                border='#00d0ba' />
            }
            readOnly />
            {rating}
          </RatingLine>
        </TextPanel>
      </Container>
    </Root>
  );
};

export default Banner;