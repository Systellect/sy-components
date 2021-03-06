import React from 'react';
import ProgressBar from 'sy-components/ProgressBar';

/** 100% progress with 20px height */
export default function Example100PercentWithCustomHeight() {
  return <ProgressBar percent={100} width={150} height={20} />
}
