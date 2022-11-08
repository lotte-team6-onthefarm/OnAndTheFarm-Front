import React from 'react';
import { useState } from 'react';
import AddMainDisplay from '../../components/admin/addMainDisplay/AddMainDisplay';
import SetMainDisplay from '../../components/admin/setMainDisplay/SetMainDisplay';

export default function PageLayout() {
  const [a, setA] = useState(true);
  return <div>{!a && <AddMainDisplay />}{a && <SetMainDisplay />}</div>;
}
