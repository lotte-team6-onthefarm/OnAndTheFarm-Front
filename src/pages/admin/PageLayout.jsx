import React from 'react';
import { useState } from 'react';
import AddMainDisplay from '../../components/admin/addMainDisplay/AddMainDisplay';

export default function PageLayout() {
  const [a, setA] = useState(false);
  return <div>{!a && <AddMainDisplay />}</div>;
}
