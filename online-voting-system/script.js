let votes = {
    A: 0,
    B: 0,
    C: 0
};

function vote(candidate) {
    votes[candidate]++;
    document.getElementById("countA").innerText = votes.A;
    document.getElementById("countB").innerText = votes.B;
    document.getElementById("countC").innerText = votes.C;
    alert("Thank you for voting!");
}
