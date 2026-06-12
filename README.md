# React + GitHub Copilot Workshop

Welcome to the **GDSC UTP React + GitHub Copilot Workshop** repository! This project is designed to help first- and second-year students learn the basics of React while leveraging GitHub Copilot as an AI pair programmer to accelerate their development.

---

## 🚀 Workshop Structure & Student Flow

To provide the best learning experience, this repository splits the workshop into two distinct phases with separate folders:

```
repository-root/
├── Workshop_Buildalong_Starter/  ← Phase 1: Guided Build-Along (Slides 10–26)
├── Challenge/Starter Project/    ← Phase 3: Solo/Team Challenge (Slides 27–31)
├── Workshop_Buildalong_Solution/ ← Reference: Completed Build-Along App
├── Instructor Solution/          ← Reference: Completed Challenge App (For Instructors)
└── index.html                    ← Presentation Deck (Reveal/Custom HTML)
```

### 1. Phase 1: React Fundamentals & Build-Along (Slides 10–26)
*   **Folder:** `Workshop_Buildalong_Starter/`
*   **Goal:** Students build a foundational Task Manager from scratch.
*   **Components:** The `src/components/` directory is **intentionally empty**. Students will create `Header.jsx`, `TaskCard.jsx`, and `AddTaskForm.jsx` during the presentation.
*   **Outcome:** A basic working Task Manager with add, delete, toggle complete, and simple counter logic.

### 2. Phase 2: Live GitHub Copilot Demo (Slide 26)
*   **Goal:** The presenter demonstrates how to use GitHub Copilot to refactor code and create a `SummaryBar.jsx` dashboard component.
*   *Note:* `SummaryBar.jsx` is for demo purposes only and is **not** part of the Challenge Features Menu.

### 3. Phase 3: 60-Minute Challenge Activity (Slides 27–31)
*   **Folder:** `Challenge/Starter Project/`
*   **Goal:** Students switch to this pre-configured starter app and add as many features as they can in 60 minutes to earn points.
*   **Reference Materials:** Students should refer to:
    *   [CHALLENGE_GUIDE.md](file:///c:/Users/Aryan/OneDrive/Desktop/GitHub_Workshop/CHALLENGE_GUIDE.md) — rules, feature tiers, points, hints, and prompts.
    *   [COPILOT_CHEATSHEET.md](file:///c:/Users/Aryan/OneDrive/Desktop/GitHub_Workshop/COPILOT_CHEATSHEET.md) — key shortcuts and prompts for GitHub Copilot.

---

## ⚠️ Important Instructor Notes

> [!IMPORTANT]
> **Ensure Students Use the Correct Folders**
> Make sure students start inside `Workshop_Buildalong_Starter/` for Phase 1. If they open the `Challenge/` folder too early, the code will already be mostly complete, disrupting the hands-on learning flow.

> [!TIP]
> **Presentation Deck Hosting**
> The presentation slide deck is available as a single static HTML file (`index.html`) at the root. You can host this file for free using **Vercel** or **GitHub Pages** for easy remote access during the presentation.

---

## 🛠️ How to Run Locally

### For the Build-Along:
1. Navigate to the starter folder:
   ```bash
   cd Workshop_Buildalong_Starter
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### For the Challenge:
1. Navigate to the challenge starter folder:
   ```bash
   cd Challenge/Starter\ Project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
