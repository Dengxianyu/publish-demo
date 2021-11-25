// 这里测试仅仅
import { isArray } from 'lodash-es'

export function checkIsArray(args) {
  return new Promise(resolve => {
    if (!isArray(args)) {
      console.error('the first argument must be an "Array"!')
      return
    }
    resolve()
  })
}

export function checkIsFunctionArray(arr) {
  return new Promise(resolve => {
    if (!arr.every(p => typeof p === 'function')) {
      console.error('every item in Array must be an function!')
      return
    }
    resolve()
  })
}

export function nonseFunction () {
  console.log('I am a nonse export item for testing tree shaking!')
}