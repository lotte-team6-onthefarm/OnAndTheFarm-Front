import React, { useEffect, useState } from 'react';
import {
  CounterButton,
  CounterDiv,
  CounterNumber,
  PaginationA,
  PaginationDiv,
  PaginationLi,
  PaginationUl,
} from './Pagination.style';

export default function Pagination(props) {
  const [pager, setPager] = useState([]);
  const clickPage = page => {
    if (page < 0 || page > props.totalPage - 1) {
      return;
    }
    props.setPage(page);
    let temp = [];
    let tempTen = parseInt(page / 10);
    let tempOne = parseInt(props.totalPage % 10);
    if (props.totalPage < 10) {
      for (let index = 1; index < props.totalPage + 1; index++) {
        temp.push(index);
      }
      setPager(temp);
    } else if (parseInt(page / 10) !== parseInt(props.totalPage / 10)) {
      for (let index = 1; index < 10 + 1; index++) {
        temp.push(tempTen * 10 + index);
      }
      setPager(temp);
    } else if (parseInt(page / 10) === parseInt(props.totalPage / 10)) {
      for (let index = 1; index < tempOne + 1; index++) {
        temp.push(tempTen * 10 + index);
      }
      setPager(temp);
    }
  };
  useEffect(() => {
    clickPage(0);
  }, [props.selectedCategory, props.selectedFilter]);
  return (
    <PaginationDiv>
      <PaginationUl>
        <PaginationLi className={props.nowPage === 1 ? 'disabled' : ''}>
          <PaginationA onClick={() => clickPage(0)}>맨 앞으로</PaginationA>
        </PaginationLi>
        <PaginationLi className={props.nowPage === 1 ? 'disabled' : ''}>
          <PaginationA onClick={() => clickPage(props.nowPage - 2)}>
            앞으로
          </PaginationA>
        </PaginationLi>
        {pager.map((page, index) => (
          <PaginationLi
            key={index}
            className={props.nowPage === page ? 'active' : 'nomal'}
          >
            <PaginationA onClick={() => clickPage(page - 1)}>
              {page}
            </PaginationA>
          </PaginationLi>
        ))}
        <PaginationLi
          className={props.nowPage === props.totalPage ? 'disabled' : ''}
        >
          <PaginationA onClick={() => clickPage(props.nowPage)}>
            뒤로
          </PaginationA>
        </PaginationLi>
        <PaginationLi
          className={props.nowPage === props.totalPage ? 'disabled' : ''}
        >
          <PaginationA onClick={() => clickPage(props.totalPage - 1)}>
            맨 뒤로
          </PaginationA>
        </PaginationLi>
      </PaginationUl>
    </PaginationDiv>
  );
}
