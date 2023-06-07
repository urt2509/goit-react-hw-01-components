import styled from 'styled-components';

const backgroundColor = ({ isOnline }) => (isOnline ? '#05dc05' : '#ff6347');

const Status = styled.span`
  display: flex;
  justify-content: center;
  margin-right: 0;
  width: 24px;
  height: 24px;
  background-color: ${backgroundColor};
  border-radius: 50%;
`;

const AvatarFriend = styled.img`
  margin: 0;
  max-width: 100%;
  max-height: 100%;
  min-height: 50px;
  border-radius: 5%;
`;

const NameFriend = styled.p`
  font-size: 24px;
  text-shadow: 0.5px 0.5px 2px #000000;
  color: #3d3b3b;
`;

export { Status, AvatarFriend, NameFriend };
