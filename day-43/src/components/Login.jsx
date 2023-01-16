export default function Login() {
  return (
    <div>
      <h1>This is login page</h1>
      <form action="">
        <label for="email">Email:</label>
        <input type="email" name="email"></input>
        <br />
        <label for="password">Password:</label>
        <input name="password" type="password"></input>
        <button>Sign in</button>
      </form>
    </div>
  );
}
