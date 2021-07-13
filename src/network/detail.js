import {request} from "./request"
export function getDetailData(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

export class DetailBaseData{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.columns = columns
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.discountBgColor = itemInfo.discountBgColor
    this.discountDesc = itemInfo.discountDesc
    this.services = services
  }
}

export class storeInfo{
  constructor(shopInfo, score){
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.Allsales = shopInfo.cSells
    this.AllGoods = shopInfo.cGoods
    this.score = score
  }
}
export class goodsParams{
  constructor(info, rule){
    this.image = info.images ? info.images[0] : {}
    this.set = info.set
    this.tables = rule.tables
  }
}