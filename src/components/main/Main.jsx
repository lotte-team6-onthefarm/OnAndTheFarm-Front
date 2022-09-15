import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h1>Main 컴포넌트 입니다.</h1>
      <Link to="/login">로그인</Link>
    </div>
  );
}
