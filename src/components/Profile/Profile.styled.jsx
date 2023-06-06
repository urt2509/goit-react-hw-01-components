import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: auto;
  padding-bottom: 0;
  width: 350px;
  height: 450px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 5px #d8e3ed;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;
`;

const Avatar = styled.img`
  margin-top: 25px;

  width: 150px;
  height: 150px;
  border-radius: 50%;

  border: 1px solid #c1c3c6;
  box-shadow: 1px 2px 5px 5px #d8e3ed;
`;

const UserName = styled.p`
  margin-bottom: 15px;

  font-size: 24px;
  text-shadow: 0.5px 0.5px 2px #000000;
  color: #3d3b3b;
`;

const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 16px;
  text-shadow: 0.5px 0.5px 1px #3d3b3b;
  color: #dddee079;
`;

const Location = styled.p`
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 16px;
  text-shadow: 0.5px 0.5px 1px #3d3b3b;
  color: #dddee079;
`;

const StatsList = styled.ul`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-around;
  max-height: 100px;
  height: 100%;

  margin: 0;

  padding: 0;
  background-color: #f3f7fa;
  box-shadow: 1px 1px 1px 1px #d8e3ed;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100px;
  width: 100%;
  box-shadow: 0.5px 0.5px 1px 0.5px #d8e3ed;
`;

const Label = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  text-shadow: 0.5px 0.5px 1px #3d3b3b;
  color: #dddee079;
`;

const StatsText = styled.span`
  font-size: 18px;
  font-weight: 500;
  text-shadow: 1px 1px 2px #3d3b3b;
`;
export {
  Container,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  StatsText,
};
