// Form to create an account
export default function CreateAccount() {
  return (
    <div>
      <h1>Create Account</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="username">Create a Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Create a Password:</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
