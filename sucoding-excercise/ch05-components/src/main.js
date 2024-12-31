// 컴포넌트의 전역 등록은 항상 src/main.js에서 진행
// -> 전역 등록 시 뷰 앱의 모든 곳에서 등록한 컴포넌트 사용 가능.
import {compile, createApp} from 'vue'
import App from './App.vue'

// 전역 등록할 컴포넌트 불러오기. 여기서 FirstChild를 '컴포넌트 인스턴스' 라고 함.
// import FirstChild from '@/components/FirstChild.vue';
// import SecondChild from '@/components/SecondChild.vue';

// 컴포넌트를 전역 등록하려면 애플리케이션 인스턴스 필요.
// -> 애플리케이션 인스턴스를 변수에 할당
const app = createApp(App);
// app
//     .component('FirstChild', FirstChild); // component() 애플리케이션 전역 등록
    // .component('SecondChild', SecondChild); // 전역 등록할 컴포넌트 많은 경우
app.mount('#app');
