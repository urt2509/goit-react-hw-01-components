import styled from 'styled-components';

const FriendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  margin: 25px;
  padding: 25px;
  width: 100%;
  max-heigth: 100%;
`;

const ItemFriend = styled.li`
  display: flex;
  column-gap: 25px;
  align-items: center;
  list-style: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 5px #d8e3ed;
  height: 100%;
  background-color: #fff;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export { FriendListContainer, ItemFriend };
