import styled from 'styled-components';

const TableContainer = styled.table`
  margin: 10px;

  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 5px #d8e3ed;
`;

const TableHead = styled.thead`
  height: 35px;
  color: #fff;
  background-color: #03cce6;
  text-size: 14px;
  text-shadow: 0.5px 0.5px 1px #81e1d6;
  text-transform: uppercase;
`;

const TableRow = styled.tr`
  box-shadow: 1px 1px 1px 1px #d8e3ed;

  &:nth-child(even) {
    background-color: #f2f8f8;
  }
`;

const TableHeader = styled.th`
  padding-left: 40px;
  text-align: left;

  &:not(:first-child) {
    padding-left: 0;
    text-align: center;
  }
`;

const TableBody = styled.tbody`
  box-shadow: 0.5px 0.5px 0.5px 0.5px #d8e3ed;
`;

const TableData = styled.td`
  margin-top: 0;
  margin-bottom: 15px;
  padding-left: 40px;
  font-size: 14px;
  text-shadow: 0.5px 0.5px 1px #3d3b3b;
  color: #dddee079;
  text-align: left;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #d8e3ed;

  &:not(:first-child) {
    padding-left: 0;
    text-align: center;
  }

  &::first-letter {
    text-transform: uppercase;
  }
`;

export {
  TableContainer,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
};
