let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

function analyze(text) {
  const positiveWords = ["good", "great", "excellent", "nice", "awesome", "best"];
  const negativeWords = ["bad", "poor", "worst", "boring", "slow", "hate"];

  text = text.toLowerCase();

  let score = 0;
  positiveWords.forEach(w => { if (text.includes(w)) score++; });
  negativeWords.forEach(w => { if (text.includes(w)) score--; });

  if (score > 0) return "Positive";
  if (score < 0) return "Negative";
  return "Neutral";
}

function submitFeedback() {
  if (!comment.value) return;

  const sentiment = analyze(comment.value);

  feedbacks.push({
    name: name.value || "Anonymous",
    rating: rating.value,
    comment: comment.value,
    sentiment
  });

  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  render();

  name.value = "";
  rating.value = "";
  comment.value = "";
}

function render() {
  feedbackList.innerHTML = "";
  let pos = 0, neu = 0, neg = 0;

  feedbacks.forEach(f => {
    if (f.sentiment === "Positive") pos++;
    else if (f.sentiment === "Negative") neg++;
    else neu++;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${f.name}</strong> (${f.rating || "No rating"})<br>
      ${f.comment}<br>
      <em>Sentiment: ${f.sentiment}</em>
    `;
    feedbackList.appendChild(li);
  });

  document.getElementById("pos").innerText = pos;
  document.getElementById("neu").innerText = neu;
  document.getElementById("neg").innerText = neg;
}

render();
