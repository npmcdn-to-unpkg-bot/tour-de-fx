export class TodoModel {
  status: string = 'started';
  title: string;
  constructor(title) {
    this.title = title

  }
  toggle() {
    this.status = this.status === 'started' ? 'completed' : 'started'
  }

}
