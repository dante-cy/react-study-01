import React, { useState } from "react";

function RecordedCount() {
  const [no, setNo] = useState('');
  const [recordedNos, setRecordedNos] = useState([]);

  const saveNo = (e) => {
    e.preventDefault();

    if (no === '') {
        alert("숫자를 입력 해 주세요.");
        return;
    }
    setRecordedNos([...recordedNos, no]);
    setNo('');
  };

  return (
    <>
      <div className="gap-[10px]">
        <div className="gap-[20px]">
          <form>
            <input
              type="number"
              defaultValue={no}
              onChange={(e) => setNo(e.target.value)}
            />
            <button type="submit" onClick={saveNo}>
              기록
            </button>
          </form>
          <hr />
          기록된 숫자 : [{recordedNos.join(", ")}]
        </div>
      </div>
    </>
  );
}

export default RecordedCount;
