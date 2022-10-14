import React from 'react';
import { useState } from 'react';
import { CATEGORY } from '../../../../../assets/category/category';
import {
  CategoryListWrapper,
  LeftListBlock,
  RightListBlock,
} from './CategoryList.style';

export default function CaetgoryList(props) {
  const productCategoryId = props.productCategoryId;
  const productCategory = props.productCategory;
  const setProductCategory = props.setProductCategory;
  const [categoryList, setCategoryList] = useState('과일류');
  const [categoryData, setCategoryData] = useState('');

  // function
  const categoryHandler = data => {
    setCategoryList(data);
  };
  const categoryDataHandler = data => {
    setCategoryData(data);
    setProductCategory(data);
  };
  return (
    <CategoryListWrapper>
      <LeftListBlock>
        {CATEGORY.categorys.map((category, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                categoryHandler(category);
              }}
              className={
                categoryList === category || productCategory ? 'active' : ''
              }
            >
              {idx === 0 && category + `(${CATEGORY.fruits.length})`}
              {idx === 1 && category + `(${CATEGORY.cereals.length})`}
              {idx === 2 && category + `(${CATEGORY.vegetables.length})`}
            </div>
          );
        })}
      </LeftListBlock>
      {categoryList === '과일류' && (
        <RightListBlock>
          {CATEGORY.fruits.map((fruit, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  categoryDataHandler(fruit.id);
                }}
                className={categoryData === fruit.id ? 'active' : ''}
              >
                {fruit.name}
              </div>
            );
          })}
        </RightListBlock>
      )}
      {categoryList === '곡물류' && (
        <RightListBlock>
          {CATEGORY.cereals.map((cereal, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  categoryDataHandler(cereal.id);
                }}
                className={categoryData === cereal.id ? 'active' : ''}
              >
                {cereal.name}
              </div>
            );
          })}
        </RightListBlock>
      )}
      {categoryList === '채소류' && (
        <RightListBlock>
          {CATEGORY.vegetables.map((vegetable, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  categoryDataHandler(vegetable.id);
                }}
                className={categoryData === vegetable.id ? 'active' : ''}
              >
                {vegetable.name}
              </div>
            );
          })}
        </RightListBlock>
      )}
    </CategoryListWrapper>
  );
}
