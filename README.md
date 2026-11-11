document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "login") {
    initLogin();
  }

  if (page === "dashboard") {
    initDashboard();
  }

  if (page === "admin") {
    initAdmin();
  }

  if (page === "sections") {
    renderSections();
  }

  if (page === "quizzes") {
    renderQuizzes();
  }

  if (page === "parts") {
    renderParts();
  }

  if (page === "projects") {
    renderProjects();
  }

  if (page === "simulator") {
    initSimulator();
  }

  if (page === "chat") {
    initChat();
  }

  if (page === "ai-helper") {
    renderFaqs();
  }
});

function initLogin() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("studentName").value.trim();
    const section = document.getElementById("studentSection").value;
    const password = document.getElementById("studentPassword").value.trim();

    if (!name || !password) return;

    const student = {
      name,
      section,
      tokens: 250,
      projectsCompleted: 0,
      quizzesCompleted: 0,
      userRole: "student",
      lastLogin: new Date().toISOString()
    };

    localStorage.setItem("veStudent", JSON.stringify(student));
    window.location.href = "dashboard.html";
  });
}

function initDashboard() {
  const student = JSON.parse(localStorage.getItem("veStudent") || "null");

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("veStudent");
      window.location.href = "login.html";
    });
  }

  if (!student) {
    window.location.href = "login.html";
    return;
  }

  const dashboardTitle = document.getElementById("dashboardTitle");
  if (dashboardTitle) dashboardTitle.textContent = `Welcome, ${student.name}`;

  const stats = [
    { label: "Tokens", value: student.tokens },
    { label: "Quiz Score", value: `${student.quizzesCompleted * 50} pts` },
    { label: "Projects", value: student.projectsCompleted },
    { label: "Section", value: student.section }
  ];

  const statsContainer = document.getElementById("dashboardStats");
  statsContainer.innerHTML = stats.map((item) => `
    <div class="stat-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </div>
  `).join("");

  const profileCard = document.getElementById("profileCard");
  profileCard.innerHTML = `
    <div class="profile-row"><span>Name</span><strong>${student.name}</strong></div>
    <div class="profile-row"><span>Section</span><strong>${student.section}</strong></div>
    <div class="profile-row"><span>Role</span><strong>Student</strong></div>
    <div class="profile-row"><span>Tokens</span><strong>${student.tokens}</strong></div>
    <div class="profile-row"><span>Completed Projects</span><strong>${student.projectsCompleted}</strong></div>
    <div class="profile-row"><span>Completed Quizzes</span><strong>${student.quizzesCompleted}</strong></div>
  `;

  const activityList = document.getElementById("activityList");
  activityList.innerHTML = [
    "Completed first robotics quiz and earned 50 tokens.",
    "Reviewed basic sensor module and circuit design.",
    "Uploaded design idea for smart plant monitoring system.",
    "Practiced line-following robot logic in the simulator."
  ].map((item) => `<li>${item}</li>`).join("");
}

function initAdmin() {
  const adminStats = document.getElementById("adminStats");
  const studentTable = document.getElementById("studentTable");
  const quizAdminList = document.getElementById("quizAdminList");

  const stats = [
    { label: "Sections", value: "5" },
    { label: "Students", value: "225" },
    { label: "Quizzes", value: "37" },
    { label: "Safety Status", value: "Active" }
  ];

  adminStats.innerHTML = stats.map((item) => `
    <div class="stat-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
    </div>
  `).join("");

  studentTable.innerHTML = `
    <table class="data-table">
      <thead>
        <tr><th>Name</th><th>Section</th><th>Tokens</th><th>Projects</th></tr>
      </thead>
      <tbody>
        ${dashboardStudents.map((stu) => `
          <tr>
            <td>${stu.name}</td>
            <td>${stu.section}</td>
            <td>${stu.tokens}</td>
            <td>${stu.projects}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  quizAdminList.innerHTML = `
    <div class="admin-list">
      ${quizBank.slice(0, 8).map((q) => `
        <div class="admin-item">
          <span>Q${q.id}</span>
          <strong>${q.question.slice(0, 46)}...</strong>
        </div>
      `).join("")}
      <button id="addQuizBtn" class="btn btn-secondary">Add New Quiz</button>
      <button id="clearUsersBtn" class="btn btn-secondary">Reset Users</button>
    </div>
  `;

  const resetBtn = document.getElementById("resetSiteBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const confirmed = window.confirm("Are you sure you want to reset the website? This will clear stored student and admin data.");
      if (!confirmed) return;
      localStorage.clear();
      alert("Website reset complete.");
      window.location.reload();
    });
  }
}

function renderSections() {
  const container = document.getElementById("sectionsGrid");
  if (!container) return;

  container.innerHTML = sectionData.map((item) => `
    <article class="section-card">
      <span class="section-tag">${item.section}</span>
      <h3>${item.section}</h3>
      <p>${item.focus}</p>
      <strong>${item.members} members</strong>
    </article>
  `).join("");
}

function renderQuizzes() {
  const container = document.getElementById("quizList");
  if (!container) return;

  container.innerHTML = quizBank.map((item, idx) => `
    <div class="quiz-card">
      <h3>Q${idx + 1}. ${item.question}</h3>
      <div class="quiz-options">
        ${item.options.map((option) => `
          <label class="option-row">
            <input type="radio" name="q${item.id}" value="${option}" />
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");

  const submitBtn = document.getElementById("submitQuizBtn");
  submitBtn.addEventListener("click", () => {
    const student = JSON.parse(localStorage.getItem("veStudent") || "null");
    let score = 0;

    quizBank.forEach((question) => {
      const selected = document.querySelector(`input[name="q${question.id}"]:checked`);
      if (selected && selected.value === question.answer) score += 1;
    });

    const tokensEarned = 50;
    if (student) {
      student.tokens = (student.tokens || 0) + tokensEarned;
      student.quizzesCompleted = (student.quizzesCompleted || 0) + 1;
      localStorage.setItem("veStudent", JSON.stringify(student));
    }

    alert(`Quiz submitted! You scored ${score}/${quizBank.length}. You earned 50 tokens.`);
  });
}

function renderParts() {
  const container = document.getElementById("partsGrid");
  if (!container) return;

  container.innerHTML = partCatalog.slice(0, 100).map((part) => `
    <article class="part-card">
      <img src="${part.image}" alt="${part.name}" />
      <h3>${part.name}</h3>
      <p><strong>Use:</strong> ${part.use}</p>
      <p><strong>Function:</strong> ${part.function}</p>
    </article>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  container.innerHTML = projectIdeas.map((project) => `
    <article class="project-card">
      <div class="project-header">
        <h3>${project.title}</h3>
        <span class="tag">${project.use}</span>
      </div>
      <p><strong>Function:</strong> ${project.functionText}</p>
      <p><strong>Parts required:</strong> ${project.requiredParts}</p>
      <p><strong>Build steps:</strong> ${project.buildSteps}</p>
      <p><strong>Estimated cost:</strong> ${project.cost}</p>
    </article>
  `).join("");
}

function initSimulator() {
  const powerToggle = document.getElementById("powerToggle");
  const ledStatus = document.getElementById("ledStatus");
  const motorStatus = document.getElementById("motorStatus");
  let powered = false;

  powerToggle.addEventListener("click", () => {
    powered = !powered;
    powerToggle.textContent = powered ? "Turn Off" : "Turn On";
    ledStatus.classList.toggle("active", powered);
    motorStatus.classList.toggle("active", powered);
  });

  document.getElementById("toggleMotor").addEventListener("click", () => {
    motorStatus.classList.toggle("active");
  });

  document.getElementById("toggleLed").addEventListener("click", () => {
    ledStatus.classList.toggle("active");
  });
}

function initChat() {
  const messages = [
    { from: "bot", text: "Hi! Ask any question about circuits, robot parts, or project planning." },
    { from: "user", text: "How does a motor driver work?" },
    { from: "bot", text: "A motor driver takes signals from the controller and uses them to control motor power, direction, and speed safely." }
  ];

  const chatMessages = document.getElementById("chatMessages");
  const chatForm = document.getElementById("chatForm");

  function renderMessages() {
    chatMessages.innerHTML = messages.map((message) => `
      <div class="chat-bubble ${message.from}">
        ${message.text}
      </div>
    `).join("");
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  renderMessages();

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("chatInput");
    const text = input.value.trim();
    if (!text) return;

    messages.push({ from: "user", text });
    const botReply = generateBotReply(text);
    messages.push({ from: "bot", text: botReply });
    input.value = "";
    renderMessages();
  });
}

function generateBotReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes("motor")) return "A motor converts electrical power into rotation. Use a motor driver for safe speed and direction control.";
  if (lower.includes("sensor")) return "Sensors detect changes in the environment such as distance, motion, light, or temperature.";
  if (lower.includes("arduino")) return "Arduino is a microcontroller that receives inputs from sensors and controls outputs like motors and LEDs.";
  if (lower.includes("battery")) return "A battery provides power, but you must match voltage and current requirements for the circuit components.";
  return "Great question! In robotics, the best approach is to break the problem into input, processing, and output stages.";
}

function renderFaqs() {
  const container = document.getElementById("faqList");
  if (!container) return;

  container.innerHTML = faqList.map((item) => `
    <div class="faq-item">
      <h3>${item.q}</h3>
      <p>${item.a}</p>
    </div>
  `).join("");
}

const defaultAdmin = {
  username: "admin",
  password: "admin123",
  resetProtected: true
};

window.addEventListener("load", () => {
  const admin = JSON.parse(localStorage.getItem("veAdmin") || "null");
  if (!admin) {
    localStorage.setItem("veAdmin", JSON.stringify(defaultAdmin));
  }
});
