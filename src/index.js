import * as utils from './utils'

export default async function runAsyncTasksByOrder(taskList) {
  await utils.checkIsArray(taskList)
  await utils.checkIsFunctionArray(taskList)
  // 由于Array.prototype.reduce(fn)在数组长度为1时会直接返回数组的唯一值，不会执行参数fn，所以单独处理以免返回的不是promise导致外部报错
  if (taskList.length === 1) {
    return taskList[0]()
  }
  return taskList.reduce((pre, cur, curenetIndex) => {
    const promise = curenetIndex === 1 ? pre() : pre
    return promise.then(() => cur())
  })
}