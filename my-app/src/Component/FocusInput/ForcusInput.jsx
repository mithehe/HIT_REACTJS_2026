import { useRef, useState } from 'react';

export default function FocusInput() {
  // 1. Khởi tạo một ref với giá trị null
  const inputRef = useRef(null);
  const [isClick, setIsClick] = useState();
  //isClicked bi render lai nen se bi mat gia tri, nen can su dung useRef de luu tru gia tri cua isClicked

  const handleFocus = () => {
    // 2. Truy cập vào thẻ HTML thông qua thuộc tính .current
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  };

  return (
    <div>
      {/* 3. Gắn ref vào thẻ input */}
      <input ref={inputRef} type="text" placeholder="Nhập tên..." />
      <button onClick={handleFocus}>Focus vào ô này!</button>
    </div>
  );
}