1. 도커 파일 작성
2. ```jsx
# dockerfile

#베이스 이미지를 노트 버전 16 알파인으로 해주기
FROM node:16-alpine

#WORKDIR해서 컨테이너 안에 어떤 위치에 리액트 앱 넣을지 정해주기
WORKDIR /usr/src/app

# 컨테이너 안 경로 넣어주기
COPY package.json ./

#종속성들 설치해주기
RUN npm install

#다른 리엑트 파일들도 카피해서 넣어주기
COPY  ./ ./

CMD ["npm", "run", "start"]
```
2. 명령어를 이용한 이미지 빌드 및 컨테이너 실행

```
//터미널

docker run -p 4000:3000 sha256:1372c23232a21f91c4f9233aabb2dde30d31c229672da3e00790c36e1ca72048
```