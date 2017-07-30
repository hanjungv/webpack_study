# webpack_study
react app without create-react-app (webpack tutorial)

## 하게 된 계기
* 회사에서 하고있는 프로젝트는 따로 웹팩을 설정해 주지 않고 create-react-app을 사용해서 잘~개발하고 있었다.
* 하지만 배포 시점이 오자 Spring ui 서버에 올려야 되는 상황에 번들 파일을 만들때 여러가지 사용하지 않는 것들 또한 포함 되어버림
* 넘나 수동적인 자세를 갖게 된다. 그래서 급한 마음에 웹팩을 공부해보려 한다. 
* 이 프로젝트가 얼마나 커질지 모르겠지만 webpack -> node Api 서버 구성 -> React App과 잘 통신이 되게 해보려고 한다.
* https://velopert.com/814 를 참조하여 작성하였습니다. 감사합니다.

## log
1. 2017.07.29 url : [https://github.com/hanjungv/webpack_study/blob/master/2017.07.29.LOG.md](https://github.com/hanjungv/webpack_study/blob/master/2017.07.29.LOG.md)
2. 2017.07.30 url : [https://github.com/hanjungv/webpack_study/blob/master/2017.07.30.LOG.md](https://github.com/hanjungv/webpack_study/blob/master/2017.07.30.LOG.md)

#### 일하면서 궁금했던 점
0. package.json 이란?
    * 모두가 모듈의 의존성 관리 해주는것 까지는 알 것이라 생각한다. 그래도 조금 더 궁금해서 찾아보니 번역이 된 [http://programmingsummaries.tistory.com/385](http://programmingsummaries.tistory.com/385)이란 글이 존재해서 간략하게 읽어보려한다.
0. Proxy 란?
0. CORS 란?
0. HTTP method의 4가지 POST, GET, PUT, DELETE
0. HTTP 1.0 1.1 2.0 에 대해 좀 공부해보자