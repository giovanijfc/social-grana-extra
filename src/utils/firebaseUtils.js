export const treaterCodeErrorFirebase = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "Usuário não encontrado na base de dados.";
    case "auth/wrong-password":
      return "A senha digitada está incorreta.";
    case "auth/email-already-in-use":
      return "O email digitado já esta em uso em outra conta.";
    default:
      return "Tivemos um problema...";
  }
};
