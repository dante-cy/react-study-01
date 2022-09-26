import React, { useState } from "react";

function RecordedCount() {
  const [no, setNo] = useState("");
  const [recordedNos, setRecordedNos] = useState([]);

  const saveNo = (e) => {
    e.preventDefault();

    if (no === "") {
      alert("숫자를 입력 해 주세요.");
      return;
    }
    setRecordedNos([...recordedNos, no]);
    setNo("");
  };

  const remveFirst = () => {
    setRecordedNos(recordedNos.filter((_, index) => index != 0));
  };

  const remveLast = () => {
    setRecordedNos(
      recordedNos.filter((_, index) => index != recordedNos.length - 1)
    );
  };

  const remveNo5 = () => {
    setRecordedNos(recordedNos.filter((el) => el != 5));
  };

  return (
    <>
      <div className="m-2">
        <div className="m-2">
          <form>
            <input
              type="number"
              className="input input-bordered mr-2"
              defaultValue={no}
              onChange={(e) => setNo(e.target.value)}
            />
            <button type="submit" className="btn btn-default" onClick={saveNo}>
              기록
            </button>
          </form>
          <hr />
          기록된 숫자 : [{recordedNos.join(", ")}]
          <hr />
          <div>
            <button className="btn btn-outline mr-2" onClick={remveFirst}>
              첫 숫자 삭제
            </button>
            <button className="btn btn-outline mr-2" onClick={remveLast}>
              마지막 숫자 삭제
            </button>
            <button className="btn btn-outline mr-2" onClick={remveNo5}>
              숫자 5 삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecordedCount;
