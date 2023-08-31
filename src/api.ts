/* eslint-disable no-promise-executor-return */
/* eslint-disable import/prefer-default-export */
const { VITE_API_KEY: API_KEY, VITE_API_URL: API_URL } = import.meta.env;

export const getChatResponse = async (prompt: string): Promise<string> => {
  // NEED ADD REQUEST API IMPLEMENTATION

  // wait 2 second to simulate a real request to the API
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error(
  //   "Need to add API request implementation (look at src/api.ts)"
  // );

  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
};
