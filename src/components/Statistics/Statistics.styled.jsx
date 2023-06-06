import styled from 'styled-components';

const StatContainer = styled.section`
  position: relative;
  margin: auto;
  padding-bottom: 0;
  width: 350px;
  height: 200px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 5px #d8e3ed;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 24px;
  text-shadow: 0.5px 0.5px 1px #000000;
  color: #dddee079;
`;

const StatList = styled.ul`
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

  box-shadow: 1px 1px 1px 1px #d8e3ed;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100px;
  width: 100%;
  box-shadow: 0.5px 0.5px 1px 0.5px #d8e3ed;
`;

const StatLabel = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  text-shadow: 0.5px 0.5px 1px #3d3b3b;
  color: #f9fafa7f;
`;

const StatPercentage = styled.span`
  font-size: 26px;
  font-weight: 500;
  text-shadow: 1px 1px 2px #3d3b3b;
`;
export { StatContainer, Title, StatList, Item, StatLabel, StatPercentage };
