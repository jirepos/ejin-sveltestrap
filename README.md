# create-svelte

create-svelte를 통해 Svelte 라이브러리를 구축하는 데 필요한 모든 것을 제공합니다. [문서]((https://kit.svelte.dev/docs/packaging)에서 라이브러리 생성에 대해 자세히 알아보세요.

## Creating a project
이 메시지가 표시된다면 이미 이 단계를 완료하셨을 것입니다. 축하합니다!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing
프로젝트를 생성하고 `npm install`(또는 `pnpm install` 또는 `yarn`)으로 종속 요소를 설치한 후, 개발 서버를 시작합니다:
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

src/lib` 내의 모든 항목은 라이브러리의 일부이며, `src/routes` 내의 모든 항목은 쇼케이스 또는 미리 보기 앱으로 사용할 수 있습니다.

## Building

라이브러리를 구축하려면:

```bash
npm run package
```
쇼케이스 앱의 프로덕션 버전을 생성하려면 다음과 같이 하세요:

```bash
npm run build
```

'npm run preview'로 프로덕션 빌드를 미리 볼 수 있습니다.

> 앱을 배포하려면 대상 환경에 맞는 adapter](https://kit.svelte.dev/docs/adapters)를 설치해야 할 수 있습니다.


## Publishing
package.json으로 이동하여 "이름" 옵션을 통해 패키지에 원하는 이름을 지정합니다. 또한 "라이선스" 필드를 추가하고 템플릿에서 생성할 수 있는 라이선스 파일을 가리키는 것도 고려해 보세요(인기 있는 옵션 중 하나는 MIT 라이선스입니다).

라이브러리를 [npm](https://www.npmjs.com)에 게시하려면:

```bash
npm publish
```



