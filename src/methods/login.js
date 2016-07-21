import f7 from '../f7'
import mt from '../mixins/modal-transition'

const { modal } = mt.transitions

f7.loginScreen = function (l = document.querySelector('.login-screen')) {
  modal.beforeEnter(l)
  // 触发重绘
  const { clientHeight } = l
  modal.enter(l)
}

f7.closeLogin = function (l = document.querySelector('.login-screen')) {
  modal.beforeLeave(l)
  modal.leave(l, function () {
    modal.afterLeave(l)
    l.style.display = ''
  })
}
