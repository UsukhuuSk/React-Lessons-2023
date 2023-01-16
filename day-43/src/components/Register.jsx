export default function Register() {
  return (
    <div>
      <h1>This is the register page</h1>
      <form action="">
        <label for="email">Email:</label>
        <input type="email" name="email"></input>
        <br />
        <label for="firstname">Firstname:</label>
        <input type="text" name="firstname"></input>
        <br />
        <label for="lastname">Lastname:</label>
        <input type="text" name="lastname"></input>
        <br />
        <label for="password">Password:</label>
        <input type="password" name="password"></input>
        <br />
        <label for="password">Confirm Password:</label>
        <input type="password" name="password"></input>
        <br />
        <button>Sign up</button>
      </form>
    </div>
  );
}
