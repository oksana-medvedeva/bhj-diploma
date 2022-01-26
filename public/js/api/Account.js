/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * 
 * 
 * {"success":true,"data":[{"name":"Банк","user_id":"1","id":"1","sum":-300},
 * {"name":"Магазин","user_id":"1","id":"2","sum":-3750},{"name":"Бизнес","user_id":"1","id":"3","sum":1439000}]}
 * */
class Account extends Entity {
  static URL = '/account';
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
    createRequest({
      url: this.URL + '/' + id,
      data: {},
      method: 'GET',
      callback: callback,
    });
  }
}
