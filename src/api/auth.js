import axios from "axios";

export async function SignInApp(pass) {
  const response = await axios.post(
    "https://indusspeciality.com/api/melanie/home/login.php",
    {
      pass: pass,
    }
  );
  return response.data;
}
