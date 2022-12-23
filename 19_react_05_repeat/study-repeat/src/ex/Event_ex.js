import { useState } from "react";

const Event_ex = () => {
  const [inform, setInform] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextId, setNextId] = useState(3); // 새로운 항목 추가를 위한 id 값

  const addInform = () => {
    const newInform = inform.concat({
      id: nextId,
      name: inputName,
      email: inputEmail,
    });
    setInform(newInform);
    setNextId(nextId + 1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addInform();
    }
  };

  const deleteInform = (id) => {
    const result = inform.filter((a) => a.id !== id);
    setInform(result);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addInform}>등록</button>
      <br />

      {inform.map((a) => {
        return (
          <h2 key={a.id} onDoubleClick={() => deleteInform(a.id)}>
            {a.name}: {a.email}
          </h2>
        );
      })}
    </div>
  );
};

export default Event_ex;
