export class UserService {
  public users = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      orders: [
        {
          name: 'Šaldytuvas',
          price: 380,
        },
      ],
    },
    {
      name: 'Antanas',
      surname: 'Petraitis',
      orders: [
        {
          name: 'Šaldytuvas',
          price: 380,
        },
      ],
    },
    {
      name: 'Kazys',
      surname: 'Kazlauskas',
      orders: [],
    },
  ];

  public order(userIndex: number, productName: string, productPrice: number) {
    this.users[userIndex].orders.push({
      name: productName,
      price: productPrice,
    });
  }

  public addUser(name: string, surname: string) {
    this.users.push({
      name: name,
      surname: surname,
      orders: [],
    });
  }
}
