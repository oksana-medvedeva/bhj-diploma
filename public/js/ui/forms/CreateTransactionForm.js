/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    Account.list({}, (err, response) => {
      if (response && response.success) {
        let accountsSelect = this.element.querySelector('.accounts-select');
        accountsSelect.innerHTML ='';
        response.data.forEach((item) => {
          accountsSelect.insertAdjacentHTML('beforeend', `<option value="${item.id}">${item.name}</option>`)
        })
      }
    })
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(this.getData(), (err, response) => {
      if (response && response.success) {
        App.getModal(this.element.closest('.modal').dataset.modalId).close();
        this.element.reset();
        App.update();
      }
    })
  }
}