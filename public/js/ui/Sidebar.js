/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    let body = document.querySelector('body');
    document.querySelector('.sidebar-toggle').onclick = (event) => {
      body.classList.toggle('sidebar-open');
      body.classList.toggle('sidebar-collapse');
      event.preventDefault();
    }
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector('.menu-item_register > a').onclick = (event) => {
      App.getModal('register').open();
      event.preventDefault();
    }
    document.querySelector('.menu-item_login > a').onclick = (event) => {
      App.getModal('login').open();
      event.preventDefault();
    }
    document.querySelector('.menu-item_logout > a').onclick = (event) => {
      User.logout(( err, response ) => {
        if (response && response.success) {
          App.setState('init');
        };
      });
      event.preventDefault();
    }
  }
}