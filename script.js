function showAlert() {
    let messageContainer = document.getElementById("messageContainer");

    messageContainer.innerHTML = `
        <div class="container">
            <div class="highlight">
            <p>The main theme about this game trying to make a difference in a harsh world. Each of our main characters have all suffered at the hands of society in some way. Whether, it be abuse from a teacher, having insanely high expectations due to a status, or being used as a tool for a bigger corprate plan. I'm pretty sure everyone can relate to these, especially the last two. However, the main characters learn to stand against this and speak for themselves. Many people in this world today feel like they cannot be themselves due to an authority or the world saying they must act a certain way. And you always hear about someone or something, saying how bad the world is. But what are they really doing to improve it? Just going to a virtual world and complaining about it. But that is not what changes the world. It's you, the person actually standing up and making that change. This is why I feel persona five has the most powerful message of them all. Because while Persona threes theme on that is very powerful. The reason most people end up committing suicide and don't think there's no point to life these days is because of how harsh this world is, and that no one is standing up to it. And reaching out to the truth and persona 4 respecting and understanding the truth means an impact on not just you, but on other people through that truth because you're not being swayed by society's lies and multiple sources. This game's themed strengthens the other two themes in ways that make all of blend together very well. He acknowledges parts of society that many people wish to prevent, like greedy companies taking advantage of employees, working them to the death. Or abusive teachers who use authority to keep their students in check. Or, a politician who hides behind others and manipulates everyone to keep his position in power. In fact, there are many protests standing up against these types of authorities and corruption to this day, and that shows the impact that this game has made on so many people, including myself.</p>

            </div>
        </div>
    `;

    // Ensure it stays within the screen
    messageContainer.style.display = "block";
    messageContainer.style.maxHeight = "50vh"; // Limits height to half the screen
    messageContainer.style.overflowY = "auto"; // Enables scrolling if too big
}


