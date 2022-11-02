/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

// 팝오버을 실행하기 위해서 script에 popover함수를 실행해야 한다.
$(function () {
  $('#popover_btn').popover({
    // fade 효과 사용 여부
    animation: true,
    // 팝오버을 나타낼 특정 요소
    container: false,
    // 지연 설정
    delay: {
      show: 500,
      hide: 100
    },
    // 템필릿
    html: false,
    // html false 경우 지정할 요소 selector
    selector: false,
    // html true일 경우 사용되는 popover 템플릿
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    // 팝오버 트리거(반응) 이벤트
    trigger: 'hover focus',
    viewport: {
      selector: 'body',
      padding: 0
    },
    // 방향 (설정하면 요소의 data-placement 설정의 무효된다.)
    //placement: 'bottom',
    // 제목 (설정하면 요소의 title 설정의 무효된다.)
    //title: '',
    // 컨텐츠 값 (설정하면 요소의 data-content값은 무효된다.)
    // content: '',
    //sanitize: true,
    //sanitizeFn: null,
    //whiteList: ''
  });
});