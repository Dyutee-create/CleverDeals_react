import { Pagination } from 'react-bootstrap';
import React from 'react';

let active = 7;
let items = [];
for (let number = 1; number <= 10; number++) {
  items.push(
    <Pagination.Item active={number === active}>{number}</Pagination.Item>
  );
}

 const paginationBasic = (
  <div>
    <Pagination bsSize="large">{items}</Pagination>
  </div>
);

export default paginationBasic;