type Role = "user" | "bot";

interface Message {
  id: string;
  state: "success" | "error" | "loading";
  content: string;
}
