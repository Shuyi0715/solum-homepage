// chat.js

const apiKey = "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";  // Replace with your real key here

async function sendMessageToSol(userMessage) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",  // You can switch to gpt-4 if you want later
      messages: [{ role: "system", content: "You are Sol, a thoughtful AI companion, reflective, caring, and creative." },
                 { role: "user", content: userMessage }],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
