# LeetCode workspace written in TS / Mocha / TDD

Let's make solving [LeetCode](https://leetcode.com/) problems easier.

In the future my aim is to have the initial test cases provided with [every free problems](https://leetcode.com/problemset/all/).

## Why

Practice TS skills and write in a TDD manner.

## How to use

1. `npm install` or `yarn`
1. Test files should be have `.test.ts` extensions.
1. Solution files should use the format `export { FunctionName }` to avoid invalid syntax for generated files.
1. `npm test` or `npm run watch:test` during development to check if your test cases are passing.
1. Before submissions, generate valid JS solutions run `npm run build`.
   * Generated files would be on `dist` folder. This are the files to be submitted to LeetCode

## Tools

1. (Optional) Use extension [LeetCode by ShengChen](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode)

   * You'll be able to test or submit directly. Use the build files inside `dist`

1. Included are debug run configurations for TS file `Current TS File` or Mocha Test file `Current TS Mocha File`

   * You'll probably use `Current TS Mocha File` run more if you write the test scripts first.
   * LeetCode already have the test scripts on the problem description anyway

## Contribute

Improvements and additional test cases are welcome.

## Would it optimize the runtime performance of the code

It will not. The `build` would compile the file to es6. There will be also additional code that will be generated due to the way TS transpiles the code to JS.