import React from 'react';
import { MainBannerImage } from '../main/MainBanner.style';

export default function MainMiniBannerLazy() {
  return (
    <div>
      <MainBannerImage className="lazyActive skeleton-list-item" />
    </div>
  );
}
