const useNode = () => {
  const insertNode = (tree, parentId, comment) => {
    if (tree.id === parentId) {
      tree.items.push({
        id: new Date().getTime(),
        name: comment,
        items: [],
      });
      return tree;
    }
    const latestNode = tree.items.map((cmnt) =>
      insertNode(cmnt, parentId, comment)
    );
    return { ...tree, items: latestNode };
  };
  const deleteNode = (tree, id) => {
    for (let index = 0; index < tree.items.length; index++) {
      const currentComment = tree.items[index];
      if (currentComment.id === id) {
        tree.items.splice(index, 1);
        return tree;
      } else {
        deleteNode(currentComment, id);
      }
    }
    return tree;
  };
  return { insertNode, deleteNode };
};

export default useNode;
