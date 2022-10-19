import React, { useEffect } from 'react';
import { useState } from 'react';
import { CATEGORY } from '../../../../../assets/category/category';
import SelectBox from '../../../../common/SelectBox';
import { CategoryListWrapper } from './CategoryList.style';

export default function CaetgoryList(props) {
  const categoryId = props.categoryId;
  const setCategoryId = props.setCategoryId;
  const [categoryList, setCategoryList] = useState('과일류');
  const [categoryData, setCategoryData] = useState(0);

  useEffect(() => {
    setCategoryId(categoryData);
  }, [categoryData]);

  useEffect(() => {
    if (categoryList === '과일류') {
      setCategoryData(1);
    } else if (categoryList === '곡물류') {
      setCategoryData(26);
    } else if (categoryList === '채소류') {
      setCategoryData(34);
    }
  }, [categoryList]);
  return (
    <CategoryListWrapper>
      <SelectBox
        options={CATEGORY.categorys}
        setSelectData={setCategoryList}
      ></SelectBox>
      {categoryList === '과일류' && (
        <SelectBox
          options={CATEGORY.fruits}
          setSelectData={setCategoryData}
        ></SelectBox>
      )}
      {categoryList === '곡물류' && (
        <SelectBox
          options={CATEGORY.cereals}
          setSelectData={setCategoryData}
        ></SelectBox>
      )}
      {categoryList === '채소류' && (
        <SelectBox
          options={CATEGORY.vegetables}
          setSelectData={setCategoryData}
        ></SelectBox>
      )}
    </CategoryListWrapper>
  );
}
