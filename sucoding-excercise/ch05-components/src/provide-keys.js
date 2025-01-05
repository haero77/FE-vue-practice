// provide 기능으로 공유한 데이터의 키는 중복되면 안 된다.
// 뷰 앱의 크기가 커질수록 키가 중복될 가능성 높아짐 -> 심볼 사용
export const message = Symbol();
export const reversedMessage = Symbol();
