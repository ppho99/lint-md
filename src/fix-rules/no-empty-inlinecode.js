import Text from '../helper/Text'

export default (markdown, error) => {
  const { ast } = error;

  const { position } = ast.node;
  const { start, end } = position;

  // 删除这一个代码块即可
  return new Text(markdown).removeBlock(start, end).result();
};
