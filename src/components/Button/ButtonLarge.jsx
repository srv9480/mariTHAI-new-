import React from 'react';
import './styles.less';

export default function ButtonLarge() {
  return (
    <button
      className="btn-large"
      onClick={() => {
        window.location.href = 'https://w583606.yclients.com';
      }}
    >
      Записаться
    </button>
  );
}
