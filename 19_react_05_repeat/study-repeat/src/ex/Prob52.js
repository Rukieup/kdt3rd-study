import { useState } from 'react';
import '../styles/Prob52.scss'

const Prob52 = () => {
  const [ inform, setInform] = useState([
    // { name:xx, content: xx},
  ])
  const [ inputName, setInputName ] = useState('')
  const [ inputContent, setInputContent] = useState('')
  const [ inputSerch, setInputSerch] = useState('') // 검색할 값

  const addInform = () => {
    const newInform = inform.concat({
      name: inputName,
      content: inputContent,
    })
    setInform(newInform);
  }

  const serchInform = () => {
    
  }

  return (
    <div className='contents'>
      <form>
        <label htmlFor="userName">작성자</label>
        <input type="text" name='userName' value={inputName} onChange={(e) => setInputName(e.target.value)}/>

        <label htmlFor="content">제목</label>
        <input type="text" name='content' value={inputContent} onChange={(e) => setInputContent(e.target.value)}/>

        <button type="button" onClick={addInform} >작성</button>
      </form>


      <div>
        <select name="" id="">
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
          <option value="번호">번호</option>
        </select>
        <input type="text" placeholder='검색어' value={inputSerch} onChange={(e) => setInputSerch}/>
        <button type="button" onClick={serchInform}>검색</button>
        <button type="button">전체</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          {inform.map((x, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{x.name}</td>
                <td>{x.content}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Prob52;