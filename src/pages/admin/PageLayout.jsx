import React from 'react';
import { useState } from 'react';
import AddMainDisplay from '../../components/admin/addMainDisplay/AddMainDisplay';
import SetMainDisplay from '../../components/admin/setMainDisplay/SetMainDisplay';

export default function PageLayout() {
  const [addMain, setAddMain] = useState(false);
  return (
    <div>
      {addMain && <AddMainDisplay setAddMain={setAddMain} />}
      {!addMain && <SetMainDisplay setAddMain={setAddMain}/>}
    </div>
  );
}
