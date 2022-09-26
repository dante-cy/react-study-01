import React, { useRef, useState } from "react";

function FormRef() {
  const [no, setNo] = useState('');
  const formInputRef = useRef(null);

  const notice = () => {
    formInputRef.current.focus();
    if (!no) {
      alert("숫자를 입력해 주세요.");
      return;
    }

    alert(`당신이 입력한 숫자는 ${no}입니다.`);
    formInputRef.current.value = '';
  };

  return (
    <>
      <div className="m-1">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            notice();
          }}
        >
          <div className="form-control inline-block">
            <input
              type="text"
              ref={formInputRef}
              placeholder="숫자"
              className="input input-bordered mr-2"
              value={no}
              onChange={(e) => setNo(e.target.value)}
            />
            <button className="btn">실행</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormRef;
