module.exports={
    extends:["react-app"],
    "overrides": [
        {
          "files": ["**/*.ts?(x)"],
          "extends":["plugin:@typescript-eslint/all"],
          "parserOptions":{
            "project":'./tsconfig.json'
          },
          "rules": {
            "@typescript-eslint/space-before-function-paren":['off'],
            "@typescript-eslint/explicit-module-boundary-types":['off'],
            "@typescript-eslint/explicit-function-return-type":['off'],
            "@typescript-eslint/explicit-member-accessibility":['error',{ accessibility: 'no-public' }],
            "@typescript-eslint/naming-convention":['off'],
            "@typescript-eslint/no-magic-numbers":['off'],
            "@typescript-eslint/no-floating-promises":['off'],
            "@typescript-eslint/prefer-readonly-parameter-types":['off'],
            "@typescript-eslint/quotes":['error','single'],
            '@typescript-eslint/indent': [
                'error',
                2,
                {
                  SwitchCase: 1,
                  VariableDeclarator: 1,
                  outerIIFEBody: 1,
                  // MemberExpression: null,
                  FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                  },
                  FunctionExpression: {
                    parameters: 1,
                    body: 1,
                  },
                  CallExpression: { arguments: 1 },
                  ArrayExpression: 1,
                  ObjectExpression: 1,
                  ImportDeclaration: 1,
                  flatTernaryExpressions: false,
                  // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
                  //  ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
                  ignoreComments: false,
                }
            ],
          }
        }
    ]
}