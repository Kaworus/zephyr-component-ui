/* eslint-disable */
import { request } from 'umi';

/** 获取物品信息列表 **/
export function getItemsList():any {
  return new Promise((resolve, reject) => {
    const result = request('https://api.guildwars2.com/v2/items')
    resolve(result)
  })
}

/** 获取当前页物品信息列表 **/
export function getItemsListByPage(ids:number[]):any {
  return new Promise((resolve, reject) => {
    const result = request(`https://api.guildwars2.com/v2/items?ids=${ids.join(',')}`)
    resolve(result)
  })
}
