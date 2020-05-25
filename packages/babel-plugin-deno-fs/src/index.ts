import { importDeclarationVisitor } from './importDeclarationVisitor'
import { callExpressionVisitor } from './callExpressionVisitor'

export default function declare(api, options) {
  api.assertVersion(7)

  return {
    name: 'babel-plugin-deno-fs-promises',
    visitor: {
      ImportDeclaration: (path) => importDeclarationVisitor(path),
      CallExpression: (path) => callExpressionVisitor(path),
    },
  }
}
