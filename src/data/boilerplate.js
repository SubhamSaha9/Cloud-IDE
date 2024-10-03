export const languageMap = {
    "cpp": {
        id: 54,
        version: "10.2.0",
        fileName: "Main",
        defaultCode:
            "#include <iostream>\n"
            + "using namespace std;\n\n"
            + "int main() {\n"
            + '\tcout << "Hello World!";\n'
            + "\treturn 0;\n"
            + "}",
    },
    "java": {
        id: 62,
        version: "15.0.2",
        fileName: "Main",
        defaultCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
    },
    "python": {
        id: 71,
        version: "3.10.0",
        fileName: "Main",
        defaultCode: `print("Hello World!")`,
    },
    "javascript": {
        id: 63,
        version: "18.15.0",
        fileName: "Main",
        defaultCode: `console.log("Hello World!");`,
    },
    "typescript": {
        id: 74,
        version: "5.0.3",
        fileName: "Main",
        defaultCode: `const greeting: string = "Hello World!";\nconsole.log(greeting);`,
    },
    "c": {
        id: 50,
        version: "10.2.0",
        fileName: "Main",
        defaultCode:
            "#include <stdio.h>\n\n"
            + "int main() {\n"
            + '\tprintf("Hello World!\\n");\n'
            + "\treturn 0;\n"
            + "}",
    },
    "csharp": {
        id: 51,
        version: "5.0.201",
        fileName: "Main",
        defaultCode: `using System;\n\nclass Program {\n\tstatic void Main() {\n\t\tConsole.WriteLine("Hello World!");\n\t}\n}`,
    },
    "ruby": {
        id: 72,
        version: "3.0.1",
        fileName: "Main",
        defaultCode: `puts "Hello World!"`,
    },
    "php": {
        id: 68,
        version: "8.2.3",
        fileName: "Main",
        defaultCode: `<?php\n\necho "Hello World!";\n?>`,
    },
    "go": {
        id: 60,
        version: "1.16.2",
        fileName: "Main",
        defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World!")\n}`,
    },
    "swift": {
        id: 83,
        version: "5.3.3",
        fileName: "Main",
        defaultCode: `import Foundation\n\nprint("Hello World!")`,
    },
    "kotlin": {
        id: 78,
        version: "1.8.20",
        fileName: "Main",
        defaultCode: `fun main() {\n\tprintln("Hello World!")\n}`,
    },
    "rust": {
        id: 73,
        version: "1.68.2",
        fileName: "Main",
        defaultCode: `fn main() {\n\tprintln!("Hello World!");\n}`,
    },
    "perl": {
        id: 85,
        version: "5.36.0",
        fileName: "Main",
        defaultCode: `#!/usr/bin/perl\n\nprint "Hello World!\\n";`,
    },
    "rscript": {
        id: 80,
        version: "4.1.1",
        fileName: "Main",
        defaultCode: `print("Hello World!")`,
    },
    "scala": {
        id: 81,
        version: "3.2.2",
        fileName: "Main",
        defaultCode: `object Main extends App {\n\tprintln("Hello World!")\n}`,
    },
    "bash": {
        id: 46,
        version: "5.2.0",
        fileName: "Main",
        defaultCode: `#!/bin/bash\n\necho "Hello World!"`,
    },
    "powershell": {
        id: 48,
        version: "7.1.4",
        defaultCode: `#!/bin/bash\n\necho "Hello World!"`,
    },
    "lua": {
        id: 64,
        version: "5.4.4",
        fileName: "Main",
        defaultCode: `print("Hello World!")`,
    },
    "elixir": {
        id: 57,
        version: "1.11.3",
        fileName: "Main",
        defaultCode: `IO.puts("Hello World!")`,
    },
    "dart": {
        id: 82,
        version: "2.19.6",
        fileName: "Main",
        defaultCode: `void main() {\n\tprint('Hello World!');\n}`,
    },
    "clojure": {
        id: 104,
        version: "1.10.3",
        defaultCode: `(println "Hello World!")`,
    },
    "coffeescript": {
        id: 105,
        version: "2.5.1",
        defaultCode: `console.log "Hello World!"`,
    },
    "fsharp": {
        id: 108,
        version: "5.0.201",
        fileName: "Main",
        defaultCode: `printfn "Hello World!"`,
    },
    "julia": {
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
