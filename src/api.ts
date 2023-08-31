export const getChatResponse = async (prompt: string): Promise<string> => {
  const response = await fetch("https://45tswthhbi.execute-api.us-east-1.amazonaws.com/dev", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Remove 'x-api-key' header
      // 'x-api-key': API_KEY,
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch response from API.');
  }

  const data = await response.json();
  return data.response;
};
