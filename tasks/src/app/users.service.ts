export class UserService {
  public users = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      tasks: [
        {
          project: 'Two',
          description: 'Prekių kataloge blogai rodo aprašymą',
        },
      ],
    },
    {
      name: 'Antanas',
      surname: 'Petraitis',
      tasks: [],
    },
    {
      name: 'Kazys',
      surname: 'Biliunas',
      tasks: [],
    },
  ];

  public addUser(name: string, surname: string) {
    this.users.push({
      name: name,
      surname: surname,
      tasks: [],
    });
  }

  public addTaskToUser(
    userIndex: number,
    project: string,
    description: string
  ) {
    this.users[userIndex].tasks.push({
      project: project,
      description: description,
    });
  }
}
