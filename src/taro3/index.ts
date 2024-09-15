import { getComponentMap, getPropsMap } from './mapping'

export function taro3() {
  return {
    uiName: '@tarojs/components3',
    map: getPropsMap(),
    lib: '@tarojs/components',
  }
}

export function taro3Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    lib: '@tarojs/components',
  }
}
