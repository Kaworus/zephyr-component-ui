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
/** 获取物品配方ID **/
export function getRecipesOutput(id:number):any {
  return new Promise((resolve, reject) => {
    const result = request(`https://api.guildwars2.com/v2/recipes/search?output=${id}`)
    resolve(result)
  })
}

/** 获取物品配方ID **/
export function getRecipesInput(id:number):any {
  return new Promise((resolve, reject) => {
    const result = request(`https://api.guildwars2.com/v2/recipes/search?input=${id}`)
    resolve(result)
  })
}

/** 获取配方详情 */
export function getRecipes(ids:number[]):any {
  return new Promise((resolve, reject) => {
    const result = request(`https://api.guildwars2.com/v2/recipes?ids=${ids.join(',')}`)
    resolve(result)
  })
}
