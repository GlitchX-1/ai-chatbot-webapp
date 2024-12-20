<!DOCTYPE html>
<html>
<head>
    <title>Signup Page</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <h1>Signup</h1>
    <form action="/signup" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required>

        <button type="submit">Signup</button>
    </form>
</body>
</html>
