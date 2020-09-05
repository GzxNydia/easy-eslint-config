# @pro/easy-eslint-config

## Installation

```sh
npm i @pro/easy-eslint-config --save-dev
```

根目录下创建.prettierc.js，添加如下内容:

```js
const config = require("@pro/easy-eslint-config");

module.exports = {
  ...config.prettier,
};
```

根目录下创建.stylelintrc.js，添加如下内容:

```js
const config = require("@pro/easy-eslint-config");

module.exports = {
  ...config.stylelint,
};
```

根目录下创建 commitlint.config.js，添加如下内容:

```js
const config = require("@pro/easy-eslint-config");

module.exports = {
  ...config.commitlint,
};
```

package.json,添加如下内容:

```json
"scriots":{
    "lint": "eslint --ext .js,.jsx,.ts,.d.ts,.tsx ./",
    "lint:fix": "eslint --fix --ext .js,.jsx,.ts,.d.ts,.tsx ./",
    "style": "stylelint 'src/**/*.less' --syntax less",
    "style:fix": "stylelint --fix 'src/**/*.less' --syntax less",
    "prettier": "prettier --check '**/*'",
    "prettier:fix": "prettier --write '**/*'"
},
"husky": {
    "hooks": {
        "pre-commit": "lint-staged",
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
},
"lint-staged": {
    "*.less": [
        "stylelint --syntax=less"
    ],
    "*.{js,jsx,d.ts,ts,tsx}": [
        "eslint"
    ],
    "*": [
        "prettier --write"
    ]
}
```
