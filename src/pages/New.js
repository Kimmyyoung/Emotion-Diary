import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Emotio Diary - New Diary`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
