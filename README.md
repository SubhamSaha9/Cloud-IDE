<h2 align="center">Code Fest - A cloud ide to run different languages online.</h2>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🤸 [Quick Start](#quick-start)
3. 🕸️ [Config Files](#config-files)
4. 🚀 [More](#more)

## <a name="tech-stack">⚙️ Tech Stack</a>

- React 18
- Redux Toolkit (RTK)
- TailwindCSS

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/SubhamSaha9/Cloud-IDE.git ./
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
#or
npm i
```

**Running the Project**

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` to visit the page.

## <a name="config-files">🕸️ Config Files</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
    },
    extend: {
      colors: {
        black: "#000",
        bgDark2: "#4a4e69",
        richblack: {
          1: "#1E1E1E",
          2: "#767676",
          3: "#f0f0f0fc",
        },
      },
    },
  },
  plugins: [],
};
```

</details>

<details>
<summary><code>boilerplate.js</code></summary>

```javascript
export const languageMap = {
  cpp: {
    id: 54,
    version: "10.2.0",
    fileName: "Main",
    defaultCode:
      "#include <iostream>\n" +
      "using namespace std;\n\n" +
      "int main() {\n" +
      '\tcout << "Hello World!";\n' +
      "\treturn 0;\n" +
      "}",
  },
  java: {
    id: 62,
    version: "15.0.2",
    fileName: "Main",
    defaultCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
  },
  python: {
    id: 71,
    version: "3.10.0",
    fileName: "Main",
    defaultCode: `print("Hello World!")`,
  },
  javascript: {
    id: 63,
    version: "18.15.0",
    fileName: "Main",
    defaultCode: `console.log("Hello World!");`,
  },
  typescript: {
    id: 74,
    version: "5.0.3",
    fileName: "Main",
    defaultCode: `const greeting: string = "Hello World!";\nconsole.log(greeting);`,
  },
  c: {
    id: 50,
    version: "10.2.0",
    fileName: "Main",
    defaultCode:
      "#include <stdio.h>\n\n" +
      "int main() {\n" +
      '\tprintf("Hello World!\\n");\n' +
      "\treturn 0;\n" +
      "}",
  },
  csharp: {
    id: 51,
    version: "5.0.201",
    fileName: "Main",
    defaultCode: `using System;\n\nclass Program {\n\tstatic void Main() {\n\t\tConsole.WriteLine("Hello World!");\n\t}\n}`,
  },
  ruby: {
    id: 72,
    version: "3.0.1",
    fileName: "Main",
    defaultCode: `puts "Hello World!"`,
  },
  php: {
    id: 68,
    version: "8.2.3",
    fileName: "Main",
    defaultCode: `<?php\n\necho "Hello World!";\n?>`,
  },
  go: {
    id: 60,
    version: "1.16.2",
    fileName: "Main",
    defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World!")\n}`,
  },
  swift: {
    id: 83,
    version: "5.3.3",
    fileName: "Main",
    defaultCode: `import Foundation\n\nprint("Hello World!")`,
  },
  kotlin: {
    id: 78,
    version: "1.8.20",
    fileName: "Main",
    defaultCode: `fun main() {\n\tprintln("Hello World!")\n}`,
  },
  rust: {
    id: 73,
    version: "1.68.2",
    fileName: "Main",
    defaultCode: `fn main() {\n\tprintln!("Hello World!");\n}`,
  },
  perl: {
    id: 85,
    version: "5.36.0",
    fileName: "Main",
    defaultCode: `#!/usr/bin/perl\n\nprint "Hello World!\\n";`,
  },
  rscript: {
    id: 80,
    version: "4.1.1",
    fileName: "Main",
    defaultCode: `print("Hello World!")`,
  },
  scala: {
    id: 81,
    version: "3.2.2",
    fileName: "Main",
    defaultCode: `object Main extends App {\n\tprintln("Hello World!")\n}`,
  },
  bash: {
    id: 46,
    version: "5.2.0",
    fileName: "Main",
    defaultCode: `#!/bin/bash\n\necho "Hello World!"`,
  },
  powershell: {
    id: 48,
    version: "7.1.4",
    defaultCode: `#!/bin/bash\n\necho "Hello World!"`,
  },
  lua: {
    id: 64,
    version: "5.4.4",
    fileName: "Main",
    defaultCode: `print("Hello World!")`,
  },
  elixir: {
    id: 57,
    version: "1.11.3",
    fileName: "Main",
    defaultCode: `IO.puts("Hello World!")`,
  },
  dart: {
    id: 82,
    version: "2.19.6",
    fileName: "Main",
    defaultCode: `void main() {\n\tprint('Hello World!');\n}`,
  },
  clojure: {
    id: 104,
    version: "1.10.3",
    defaultCode: `(println "Hello World!")`,
  },
  coffeescript: {
    id: 105,
    version: "2.5.1",
    defaultCode: `console.log "Hello World!"`,
  },
  fsharp: {
    id: 108,
    version: "5.0.201",
    fileName: "Main",
    defaultCode: `printfn "Hello World!"`,
  },
  julia: {
    id: 113,
    version: "1.8.5",
    fileName: "Main",
    defaultCode: `println("Hello World!")`,
  },
  "basic.net": {
    id: 131,
    version: "16.9",
    fileName: "Main",
    defaultCode: `Module HelloWorld\n    Sub Main()\n        Console.WriteLine("Hello World!")\n    End Sub\nEnd Module`,
  },
};
```

</details>
<details>
<summary><code>selectOption.js</code></summary>

```javascript
export const languageOptions = [
  { value: "cpp", label: "C++" },
  { value: "c", label: "C" },
  { value: "java", label: "Java" },
  { value: "python", label: "python" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "bash", label: "bash" },
  { value: "clojure", label: "Clojure" },
  { value: "coffeescript", label: "CoffeeScript" },
  { value: "csharp", label: "C#" },
  { value: "dart", label: "Dart" },
  { value: "elixir", label: "Elixir" },
  { value: "fsharp", label: "F#" },
  { value: "go", label: "Go" },
  { value: "julia", label: "Julia" },
  { value: "kotlin", label: "Kotlin" },
  { value: "lua", label: "Lua" },
  { value: "php", label: "PHP" },
  { value: "perl", label: "perl" },
  { value: "powershell", label: "PowerShell" },
  { value: "rscript", label: "R" },
  { value: "ruby", label: "Ruby" },
  { value: "rust", label: "Rust" },
  { value: "scala", label: "Scala" },
  { value: "swift", label: "swift" },
  { value: "basic.net", label: "VB" },
];
```

</details>

<details>
<summary><code>themeOptions.js</code></summary>

```javascript
export const themeOptions = [
  { value: "vs-dark", label: "VsCode Dark" },
  { value: "vs", label: "VsCode Light" },
  { value: "light", label: "Light" },
  { value: "hc-black", label: "High Contrast" },
];
```

</details>

## <a name="more">🚀 More</a>

For more such projects visit my [Github](https://github.com/subhamsaha9/?tab=repositories) page.
