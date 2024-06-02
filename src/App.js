import { useState } from "react";
import "./styles.css";
import Comments from "./components/Comments";
import useNode from "./hooks/useNode";

const commentData = {
  id: 1,
  items: [],
};

// const commentData = {
//   id: 1,
//   items: [
//     {
//       id: 167725427307,
//       name: "hello",
//       items: [
//         {
//           id: 4567,
//           name: "hello world",
//           items: [
//             {
//               id: 45678,
//               name: "hello world",
//               items: [
//                 {
//                   id: 567890,
//                   name: "hello world 123",
//                   items: [],
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           id: 7656,
//           name: "react js",
//           items: [
//             {
//               id: 45678976543,
//               name: "JavaScript",
//               items: [],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

const App = () => {
  const [comments, setComments] = useState(commentData);
  const { insertNode, deleteNode } = useNode();

  const handleInsertNode = (parentId, comment) => {
    const finalStructure = insertNode(comments, parentId, comment);
    setComments(finalStructure);
  };
  const handleDeleteNode = (id) => {
    const finalStructure = deleteNode(comments, id);
    setComments({ ...finalStructure });
  };

  return (
    <div className="App">
      <Comments
        commentData={comments}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
};

export default App;
