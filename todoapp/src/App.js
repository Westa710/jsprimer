import { element, render } from "./view/html-util.js";

console.log("App.js: loaded");
export class App {
  constructor() {
    console.log("App initialized");
  }
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    //TodoリストをまとめるList要素
    const todoListElement = element`<ul></ul>`;
    //Todoアイテム数
    let todoItemCount = 0;
    formElement.addEventListener("submit", (event) => {
      //submitイベントの本来の動作を止める
      event.preventDefault();
      //追加するTodoアイテムの要素(li要素)を作成する
      const todoItemElement = element`<li>${inputElement.value}</li>`;
      //todoアイテムをtodoListElementに追加する
      todoListElement.appendChild(todoItemElement);
      //コンテナ要素の中身をTodoリストをまとめるList要素で上書きする
      render(todoListElement, containerElement);
      //Todo相手数を+1し、表示されているテキストを更新する
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数:${todoItemCount}`;
      //入力欄を空文字列にしてリセットする
      inputElement.value = "";
    });
  }
}
