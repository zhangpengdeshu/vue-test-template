import Vue from 'vue'
import Button from '../../../src/components/Button.vue'

describe('Button', () => {
  it('has a created hook', () => {
    expect(typeof Button.created).to.equal('function')
  })

  it('sets the correct default data', () => {
    const defaultData = Button.data()
    expect(defaultData.text).to.equal('Hello Spec')
  })

  it('sets new text when created', () => {
    const vm = new Vue(Button).$mount()
    expect(vm.text).to.equal('Bye Spec')
  })

  it('renders the correct text', () => {
    const Ctor = Vue.extend(Button)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).to.equal('Bye Spec')
  })
})