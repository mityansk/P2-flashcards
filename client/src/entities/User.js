class User {
  static async createUser(userData) {

    const response = await fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  }

  // static async getUser() {

  //   const response = await fetch('http://localhost:3000/api/user', {
  //     method: 'Get',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify(userData),
  //   });
  // }
}
export default User;
