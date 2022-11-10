import React, { useEffect } from 'react';
import { useState } from 'react';
import { CATEGORY } from '../../../../../assets/category/category';
import SelectBox from '../../../../common/SelectBox';
import useDidMountEffect from '../../../../common/useDidMountEffect';
import { CategoryListWrapper } from './CategoryList.style';

export default function CaetgoryList(props) {
  const setCategoryId = props.setCategoryId;
  const [categoryList, setCategoryList] = useState(props.categoryList);
  const [categoryData, setCategoryData] = useState(props.categoryId);
  // Id : ~25 과일, ~33 곡물, ~64 야채
  // useEffect(() => {
  //   if (props.categoryId > 25 && props.categoryId <= 33) {
  //     setCategoryList('곡물류');
  //   } else if (props.categoryId > 33) {
  //     setCategoryList('채소류');
  //   }
  //   setCategoryData(props.categoryId);
  // }, []);

  useDidMountEffect(() => {
    setCategoryId(categoryData);
  }, [categoryData]);

  useDidMountEffect(() => {
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
          defaultValue={categoryData}
        ></SelectBox>
      )}
      {categoryList === '곡물류' && (
        <SelectBox
          options={CATEGORY.cereals}
          setSelectData={setCategoryData}
          defaultValue={categoryData}
        ></SelectBox>
      )}
      {categoryList === '채소류' && (
        <SelectBox
          options={CATEGORY.vegetables}
          setSelectData={setCategoryData}
          defaultValue={categoryData}
        ></SelectBox>
      )}
    </CategoryListWrapper>
  );
}
