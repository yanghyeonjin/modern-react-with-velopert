# 리액트 개발 할 때 사용하면 편리한 도구들 - Prettier, ESLint

## Prettier

1. 루트 디렉토리에 .prettierrc 파일을 만든다.

    ```javascript
    {
        "trailingComma": "es5", // 콤마(,) 적용 방법
        "tabWidth": 4, // 들여쓰기 크기
        "semi": true, // 세미콜론 적용여부
        "singleQuote": true // 작은 따옴표로 사용
    }
    ```

2. Prettier 익스텐션을 설치한다.
3. 에디터의 설정에서 `Format On Save`를 켜준다.

## ESLint

1. CRA (create-react-app)로 만든 프로젝트는 eslint 모듈이 설치되어 있어서, 자바스크립트 실수를 하게 되면 터미널에 오류 또는 경고가 자동으로 나타난다.
2. ESLint 익스텐션 설치 -> 에디터 상에서도 오류나 경고가 나타나게 된다. (프로젝트의 루트로 에디터를 켜지 않으면 안 나타나는 현상이 있음. 리액트 프로젝트 루트를 기준으로 폴더를 열어주자.)
3. 까다로운 규칙 적용 (npm i eslint-config-airbnb) -> **`협업에서는 기본 설정으로 진행하자..`**
4. package.json 수정

    ```javascript
    "eslintConfig": {
        "extends": [
        "react-app",
        "airbnb"
        ]
    },
    ```

5. 적용 확인 (이곳저곳 빨간색! 만약 나타나지 않는다면 window reload 후 다시 확인)

## Prettier ESLint 함께 사용하기

> eslint가 자바스크립트 문법 뿐만 아니라 코드 스타일도 관리하기 때문에 Prettier와 함께 쓰려면 충돌되는 항목을 막아주어야한다.

1. npm i eslint-config-prettier
2. package.json 수정

    ```javascript
    "eslintConfig": {
        "extends": [
        "react-app",
        "airbnb",
        "prettier"
        ]
    },
    ```

## ESLint 규칙 비활성화하기

```javascript
"eslintConfig": {
    "extends": [
      "react-app",
      "airbnb",
      "prettier"
    ],
    "rules": {
      "react/jsx-filename-extension": 0, // "off" or 0
      "no-unused-vars": 1 // "warn" or 1
    }
},
```
