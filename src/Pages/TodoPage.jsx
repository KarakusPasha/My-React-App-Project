import { useState } from 'react';

const TodoPage = () => {
  const [list, setList] = useState([]); 
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null); 

  const handleAction = () => {
    if (editId) {
      
      setList(list.map(item => item.id === editId ? { ...item, val: text } : item));
      setEditId(null);
    } else {
      
      setList([...list, { id: Date.now(), val: text }]);
    }
    setText('');
  };

  return (
    <div className="card">
      <h2>Görev Listesi</h2>
      <div className="input-group">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Bir şeyler yaz..." />
        <button className="add-btn" onClick={handleAction}>{editId ? 'Güncelle' : 'Ekle'}</button>
      </div>
      
      {list.map(item => (
        <div key={item.id} className="todo-item">
          <span>{item.val}</span>
          <div>
            <button className="edit-btn" onClick={() => { setEditId(item.id); setText(item.val); }}>Düzenle</button>
            <button className="del-btn" onClick={() => setList(list.filter(x => x.id !== item.id))}>Sil</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoPage;