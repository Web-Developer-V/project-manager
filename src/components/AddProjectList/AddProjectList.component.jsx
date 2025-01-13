import "./AddProjectList.component.css";

const AddProjectList = ({ handleValue, onListAdd, inputValue }) => {
  return (
    <section className="cm-project-list-style AddProject-list-container">
      <form action="">
        <ul className="input-list-box">
          <li>
            <label htmlFor="">제목</label>
            <input
              onChange={(e) => handleValue("title", e.target.value)}
              type="text"
              name="title"
            />
          </li>
          <li>
            <label htmlFor="">내용</label>
            <textarea
              onChange={(e) => handleValue("content", e.target.value)}
              name="content"
            ></textarea>
          </li>
          <li>
            <label htmlFor="">날짜</label>
            <input
              onChange={(e) => handleValue("date", e.target.value)}
              type="date"
              name="date"
            />
          </li>
        </ul>
        <button type="button" onClick={() => onListAdd(inputValue)}>
          추가
        </button>
      </form>
    </section>
  );
};

export default AddProjectList;
