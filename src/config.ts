/*
 * linters wiki: https://github.com/iamcco/diagnostic-languageserver/wiki/Linters
 */
export const linters = {
  "actionlint": {
    "args": [
      "-oneline"
    ],
    "command": "actionlint",
    "formatPattern": [
      "^.*?:(\\d+):(\\d+): (.*)",
      {
        "column": 2,
        "line": 1,
        "message": 3
      }
    ],
    "sourceName": "actionlint"
  },
  "alex": {
    "args": [
      "%file"
    ],
    "command": "alex",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "(\\d+):(\\d+)-\\d+:\\d+\\s*(\\S*)\\s*(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      "warning": "warning"
    },
    "sourceName": "alex"
  },
  "alex-html": {
    "args": [
      "-l",
      "%file"
    ],
    "command": "alex",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "(\\d+):(\\d+)-\\d+:\\d+\\s*(\\S*)\\s*(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      "warning": "warning"
    },
    "sourceName": "alex"
  },
  "alex-text": {
    "args": [
      "-t",
      "%file"
    ],
    "command": "alex",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "(\\d+):(\\d+)-\\d+:\\d+\\s*(\\S*)\\s*(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      "warning": "warning"
    },
    "sourceName": "alex"
  },
  "ansibleLint": {
    "args": [
      "--parseable-severity",
      "--nocolor",
      "-"
    ],
    "command": "ansible-lint",
    "formatPattern": [
      "^[^:]+:(\\d+):\\s\\[\\w+\\]\\s\\[(\\w+)\\]\\s(.*)$",
      {
        "line": 1,
        "message": 3,
        "security": 2
      }
    ],
    "securities": {
      "HIGH": "warning",
      "LOW": "info",
      "VERY_HIGH": "error",
      "VERY_LOW": "hint"
    },
    "sourceName": "ansibleLint"
  },
  "bash": {
    "args": [
      "-n",
      "%file"
    ],
    "command": "bash",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*: line (\\d+): (syntax error near unexpected token .*)$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "bash"
  },
  "cmake-lint": {
    "args": [
      "%filepath"
    ],
    "command": "cmake-lint",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+)(,(\\d+))?: (\\[(.).*)$",
      {
        "column": 3,
        "line": 1,
        "message": 4,
        "security": 5
      }
    ],
    "offsetColumn": 1,
    "offsetLine": 0,
    "securities": {
      "C": "info",
      "E": "error",
      "R": "info",
      "W": "warning"
    },
    "sourceName": "cmakelint"
  },
  "cmakelint": {
    "args": [
      "%filepath"
    ],
    "command": "cmakelint",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+): (.*)$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "offsetColumn": 1,
    "offsetLine": 0,
    "sourceName": "cmakelint"
  },
  "cppcheck": {
    "args": [
      "--enable=all",
      "--suppress=missingIncludeSystem",
      "--addon=cert",
      "--addon=y2038",
      "--addon=threadsafety",
      "--library=googletest",
      "--inline-suppr",
      "%file"
    ],
    "command": "cppcheck",
    "debounce": 100,
    "formatPattern": [
      "^[^:]+:([1-9]\\d*):(\\d+):\\s+([^:]+):\\s+(.+?)$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      "error": "error",
      "information": "info",
      "performance": "warning",
      "portability": "warning",
      "style": "warning",
      "warning": "warning"
    },
    "sourceName": "cppcheck"
  },
  "cpplint": {
    "args": [
      "%file"
    ],
    "command": "cpplint",
    "debounce": 100,
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+)?\\s+(.+?)\\s\\[(\\d)\\]$",
      {
        "column": 2,
        "line": 1,
        "message": 3,
        "security": 4
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      "1": "info",
      "2": "warning",
      "3": "warning",
      "4": "error",
      "5": "error"
    },
    "sourceName": "cpplint"
  },
  "eslint": {
    "args": [
      "--stdin",
      "--stdin-filename",
      "%filepath",
      "--format",
      "json"
    ],
    "command": "./node_modules/.bin/eslint",
    "debounce": 100,
    "parseJson": {
      "column": "column",
      "endColumn": "endColumn",
      "endLine": "endLine",
      "errorsRoot": "[0].messages",
      "line": "line",
      "message": "${message} [${ruleId}]",
      "security": "severity"
    },
    "rootPatterns": [
      ".eslintrc.js",
      ".eslintrc.cjs",
      ".eslintrc.yaml",
      ".eslintrc.yml",
      ".eslintrc.json",
      "package.json"
    ],
    "securities": {
      "1": "warning",
      "2": "error"
    },
    "sourceName": "eslint"
  },
  "fish": {
    "args": [
      "-n",
      "%file"
    ],
    "command": "fish",
    "formatLines": 1,
    "formatPattern": [
      "^.*\\(line (\\d+)\\): (.*)$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "sourceName": "fish"
  },
  "flake8": {
    "args": [
      "--format=%(row)d,%(col)d,%(code).1s,%(code)s: %(text)s",
      "-"
    ],
    "command": "flake8",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "(\\d+),(\\d+),([A-Z]),(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "rootPatterns": [
      ".flake8",
      "setup.cfg",
      "tox.ini"
    ],
    "securities": {
      "C": "error",
      "E": "error",
      "F": "error",
      "N": "error",
      "W": "warning"
    },
    "sourceName": "flake8"
  },
  "golangci-lint": {
    "args": [
      "run",
      "--out-format",
      "json"
    ],
    "command": "golangci-lint",
    "debounce": 100,
    "parseJson": {
      "column": "Pos.Column",
      "errorsRoot": "Issues",
      "line": "Pos.Line",
      "message": "${Text} [${FromLinter}]",
      "sourceName": "Pos.Filename",
      "sourceNameFilter": true
    },
    "rootPatterns": [
      ".git",
      "go.mod"
    ],
    "sourceName": "golangci-lint"
  },
  "hadolint": {
    "args": [
      "-f",
      "json",
      "-"
    ],
    "command": "hadolint",
    "parseJson": {
      "column": "column",
      "line": "line",
      "message": "${message} [${code}]",
      "security": "level"
    },
    "securities": {
      "error": "error",
      "info": "info",
      "style": "hint",
      "warning": "warning"
    },
    "sourceName": "hadolint"
  },
  "hlint": {
    "args": [
      "--json",
      "-"
    ],
    "command": "hlint",
    "debounce": 100,
    "parseJson": {
      "column": "startColumn",
      "endColumn": "endColumn",
      "endLine": "endLine",
      "line": "startLine",
      "message": "${hint}",
      "security": "severity"
    },
    "securities": {
      "Error": "error",
      "Suggestion": "info",
      "Warning": "warning"
    },
    "sourceName": "hlint"
  },
  "jq": {
    "args": [
      "-nf",
      "%file"
    ],
    "command": "jq",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^jq: (error): syntax error, (.*) at <.*>, line (\\d+):$",
      {
        "line": 3,
        "message": 2,
        "security": 1
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "jq"
  },
  "lacheck": {
    "args": [
      "%file"
    ],
    "command": "lacheck",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "\"[^\"]+\", line (\\d+):\\s*(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      "undefined": "warning"
    },
    "sourceName": "lacheck"
  },
  "languagetool": {
    "args": [
      "%file"
    ],
    "command": "languagetool",
    "debounce": 200,
    "formatLines": 2,
    "formatPattern": [
      "^\\d+?\\.\\)\\s+Line\\s+(\\d+),\\s+column\\s+(\\d+),\\s+([^\\n]+)\nMessage:\\s+(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": [
          4,
          3
        ]
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "languagetool"
  },
  "luacheck": {
    "args": [
      "--formatter",
      "plain",
      "--codes",
      "--ranges",
      "--filename",
      "%filepath",
      "-"
    ],
    "command": "luacheck",
    "debounce": 100,
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+)-(\\d+):\\s+\\((\\w)\\d+\\)\\s+(.*)$",
      {
        "column": 2,
        "endColumn": 3,
        "endLine": 1,
        "line": 1,
        "message": 5,
        "security": 4
      }
    ],
    "rootPatterns": [
      ".luacheckrc",
      ".git"
    ],
    "securities": {
      "E": "error",
      "W": "warning"
    },
    "sourceName": "luacheck"
  },
  "markdownlint": {
    "args": [
      "--stdin"
    ],
    "command": "markdownlint",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*?:\\s?(\\d+)(:(\\d+)?)?\\s(MD\\d{3}\\/[A-Za-z0-9-/]+)\\s(.*)$",
      {
        "column": 3,
        "line": 1,
        "message": [
          4
        ]
      }
    ],
    "isStderr": true,
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "markdownlint"
  },
  "mix_credo": {
    "args": [
      "credo",
      "suggest",
      "--format",
      "flycheck",
      "--read-from-stdin"
    ],
    "command": "mix",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^[^ ]+?:([0-9]+)(:([0-9]+))?:\\s+([^ ]+):\\s+(.*)(\\r|\\n)*$",
      {
        "column": 3,
        "line": 1,
        "message": 5,
        "security": 4
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "rootPatterns": [
      "mix.exs"
    ],
    "securities": {
      "C": "warning",
      "D": "info",
      "F": "warning",
      "R": "info"
    },
    "sourceName": "mix_credo"
  },
  "mix_credo_compile": {
    "args": [
      "credo",
      "suggest",
      "--format",
      "flycheck",
      "--read-from-stdin"
    ],
    "command": "mix",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^([^ ]+)\\s+\\(([^)]+)\\)\\s+([^ ]+?):([0-9]+):\\s+(.*)(\\r|\\n)*$",
      {
        "column": -1,
        "line": -1,
        "message": [
          "[",
          2,
          "]: ",
          3,
          ": ",
          5
        ],
        "security": 1
      }
    ],
    "offsetColumn": 0,
    "offsetLine": -1,
    "rootPatterns": [
      "mix.exs"
    ],
    "securities": {
      "**": "error"
    },
    "sourceName": "mix_credo"
  },
  "mypy": {
    "args": [
      "--no-color-output",
      "--no-error-summary",
      "--show-column-numbers",
      "--follow-imports=silent",
      "%file"
    ],
    "command": "mypy",
    "formatPattern": [
      "^.*:(\\d+?):(\\d+?): ([a-z]+?): (.*)$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "rootPatterns": [
      "mypy.ini",
      ".mypy.ini",
      "setup.cfg"
    ],
    "securities": {
      "error": "error"
    },
    "sourceName": "mypy"
  },
  "nagelfar": {
    "args": [
      "%file"
    ],
    "command": "nagelfar",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "Line\\s+(\\d+): (.) (.*)",
      {
        "line": 1,
        "message": 3,
        "security": 2
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      "E": "error",
      "W": "warning"
    },
    "sourceName": "nagelfar"
  },
  "nix-linter": {
    "command": "nix-linter",
    "debounce": 100,
    "parseJson": {
      "column": "pos.spanBegin.sourceColumn",
      "endColumn": "pos.spanEnd.sourceColumn",
      "endLine": "pos.spanEnd.sourceLine",
      "line": "pos.spanBegin.sourceLine",
      "message": "${description}"
    },
    "securities": {
      "undefined": "warning"
    },
    "sourceName": "nix-linter"
  },
  "perl": {
    "args": [
      "-w",
      "%file"
    ],
    "command": "perl",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^(.*) at .* line (\\d+)(.)(.*)$",
      {
        "line": 2,
        "message": [
          1,
          4
        ],
        "security": "3"
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      ",": "error",
      ".": "warning"
    },
    "sourceName": "perl"
  },
  "phpcs": {
    "args": [
      "--standard=PSR2",
      "--report=emacs",
      "-s",
      "-"
    ],
    "command": "./vendor/bin/phpcs",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*:(\\d+):(\\d+):\\s+(.*)\\s+-\\s+(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "rootPatterns": [
      "composer.json",
      "composer.lock",
      "vendor",
      ".git"
    ],
    "securities": {
      "error": "error",
      "warning": "warning"
    },
    "sourceName": "phpcs"
  },
  "phpstan": {
    "args": [
      "analyze",
      "--error-format",
      "raw",
      "--no-progress",
      "%file"
    ],
    "command": "./vendor/bin/phpstan",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+):(.*)(\\r|\\n)*$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "rootPatterns": [
      "composer.json",
      "composer.lock",
      "vendor",
      ".git"
    ],
    "sourceName": "phpstan"
  },
  "pip-compile": {
    "args": [
      "-n",
      "%file"
    ],
    "command": "pip-compile",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "(Could not find a version that matches \\S+) \\(from -r ([^(]+) \\(line (\\d+)\\)\\)",
      {
        "errorsRoot": 2,
        "line": 3,
        "message": 1
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "pip-compile"
  },
  "proselint": {
    "args": [
      "-j"
    ],
    "command": "proselint",
    "debounce": 300,
    "parseJson": {
      "column": "column",
      "errorsRoot": "data.errors",
      "line": "line",
      "message": "${message}",
      "security": "severity"
    },
    "securities": {
      "error": "error",
      "info": "suggestion",
      "warning": "warning"
    },
    "sourceName": "proselint"
  },
  "protolint": {
    "args": [
      "-reporter",
      "json",
      "%filepath"
    ],
    "command": "protolint",
    "debounce": 100,
    "formatLines": 1,
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "parseJson": {
      "column": "column",
      "errorsRoot": "lints",
      "line": "line",
      "message": "${message} [${rule}]"
    },
    "sourceName": "protolint"
  },
  "psalm": {
    "args": [
      "--output-format=emacs",
      "--no-progress",
      "%file"
    ],
    "command": "./vendor/bin/psalm",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+):(.*)\\s-\\s(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "requiredFiles": [
      "psalm.xml"
    ],
    "rootPatterns": [
      "composer.json",
      "composer.lock",
      "vendor",
      ".git"
    ],
    "securities": {
      "error": "error",
      "warning": "warning"
    },
    "sourceName": "psalm"
  },
  "pylint": {
    "args": [
      "-f",
      "json",
      "--from-stdin",
      "%filename"
    ],
    "command": "pylint",
    "debounce": 500,
    "offsetColumn": 1,
    "parseJson": {
      "column": "column",
      "endColumn": "endColumn",
      "endLine": "endLine",
      "line": "line",
      "message": "${message-id}: ${message} (${symbol})",
      "security": "type"
    },
    "rootPatterns": [
      ".git",
      "pyproject.toml",
      "setup.py"
    ],
    "securities": {
      "convention": "info",
      "error": "error",
      "fatal": "error",
      "informational": "hint",
      "refactor": "info",
      "warning": "warning"
    },
    "sourceName": "pylint"
  },
  "revive": {
    "args": [
      "%file"
    ],
    "command": "revive",
    "debounce": 100,
    "formatPattern": [
      "^[^:]+:(\\d+):(\\d+):\\s+(.*)$",
      {
        "column": 2,
        "line": 1,
        "message": [
          3
        ]
      }
    ],
    "rootPatterns": [
      ".git",
      "go.mod"
    ],
    "sourceName": "revive"
  },
  "shellcheck": {
    "args": [
      "--format",
      "json1",
      "-"
    ],
    "command": "shellcheck",
    "debounce": 100,
    "parseJson": {
      "column": "column",
      "endColumn": "endColumn",
      "endLine": "endLine",
      "errorsRoot": "comments",
      "line": "line",
      "message": "${message} [${code}]",
      "security": "level"
    },
    "securities": {
      "error": "error",
      "info": "info",
      "style": "hint",
      "warning": "warning"
    },
    "sourceName": "shellcheck"
  },
  "shfmt": {
    "args": [
      "-w",
      "%file"
    ],
    "command": "shfmt",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      ".*?:(\\d+):(\\d+): (.*)",
      {
        "column": 2,
        "line": 1,
        "message": 3
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "shfmt"
  },
  "standard": {
    "args": [
      "--stdin",
      "--verbose"
    ],
    "command": "./node_modules/.bin/standard",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^\\s*<\\w+>:(\\d+):(\\d+):\\s+(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": 3
      }
    ],
    "isStderr": false,
    "isStdout": true,
    "offsetColumn": 0,
    "offsetLine": 0,
    "rootPatterns": [
      ".git"
    ],
    "sourceName": "standard"
  },
  "stylelint": {
    "args": [
      "--formatter",
      "json",
      "--stdin-filename",
      "%filepath"
    ],
    "command": "./node_modules/.bin/stylelint",
    "debounce": 100,
    "parseJson": {
      "column": "column",
      "errorsRoot": "[0].warnings",
      "line": "line",
      "message": "${text}",
      "security": "severity"
    },
    "rootPatterns": [
      ".git"
    ],
    "securities": {
      "error": "error",
      "warning": "warning"
    },
    "sourceName": "stylelint"
  },
  "syntest": {
    "args": [
      "%file",
      "."
    ],
    "command": "syntest",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "Assertion selector \"[^\"]+\" from line (\\d+) failed against line \\d+, column range (\\d+)-(\\d+) \\(with text \"[^\"]+\"\\) has scope \\[([^\\]]+)\\]",
      {
        "column": 2,
        "endColumn": 3,
        "line": 1,
        "message": 4
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "syntest"
  },
  "systemd-analyze": {
    "args": [
      "verify",
      "%filepath"
    ],
    "command": "systemd-analyze",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^[^:]+:((\\d+):)?\\s*(.*)$",
      {
        "line": 2,
        "message": 3
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "sourceName": "systemd-analyze"
  },
  "textidote": {
    "args": [
      "--type",
      "tex",
      "--check",
      "en",
      "--output",
      "singleline",
      "--no-color"
    ],
    "command": "textidote",
    "debounce": 500,
    "formatLines": 1,
    "formatPattern": [
      "\\(L(\\d+)C(\\d+)-L(\\d+)C(\\d+)\\):(.+)\".+\"$",
      {
        "column": 2,
        "endColumn": 4,
        "endLine": 3,
        "line": 1,
        "message": 5
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "textidote"
  },
  "tidy": {
    "args": [
      "-e",
      "-q"
    ],
    "command": "tidy",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*?(\\d+).*?(\\d+)\\s+-\\s+([^:]+):\\s+(.*)(\\r|\\n)*$",
      {
        "column": 2,
        "endColumn": 2,
        "endLine": 1,
        "line": 1,
        "message": [
          4
        ],
        "security": 3
      }
    ],
    "isStderr": true,
    "offsetColumn": 0,
    "offsetLine": 0,
    "rootPatterns": [
      ".git/"
    ],
    "securities": {
      "Error": "error",
      "Warning": "warning"
    },
    "sourceName": "tidy"
  },
  "vint": {
    "args": [
      "-f",
      "{file_path}:{line_number}:{column_number}: {severity}! {description}",
      "-"
    ],
    "command": "vint",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "[^:]+:(\\d+):(\\d+):\\s*([^!]*)! (.*)(\\r|\\n)*$",
      {
        "column": 2,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "offsetColumn": 0,
    "offsetLine": 0,
    "securities": {
      "error": "error",
      "style_problem": "info",
      "warning": "warning"
    },
    "sourceName": "vint"
  },
  "write-good": {
    "args": [
      "--text=%text"
    ],
    "command": "write-good",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "(.*)\\s+on\\s+line\\s+(\\d+)\\s+at\\s+column\\s+(\\d+)\\s*$",
      {
        "column": 3,
        "line": 2,
        "message": 1
      }
    ],
    "offsetColumn": 1,
    "offsetLine": 0,
    "sourceName": "write-good"
  },
  "xo": {
    "args": [
      "--reporter",
      "json",
      "--stdin",
      "--stdin-filename",
      "%filepath"
    ],
    "command": "./node_modules/.bin/xo",
    "debounce": 100,
    "parseJson": {
      "column": "column",
      "endColumn": "endColumn",
      "endLine": "endLine",
      "errorsRoot": "[0].messages",
      "line": "line",
      "message": "[xo] ${message} [${ruleId}]",
      "security": "severity"
    },
    "rootPatterns": [
      "package.json",
      ".git"
    ],
    "securities": {
      "1": "warning",
      "2": "error"
    },
    "sourceName": "xo"
  },
  "yamllint": {
    "args": [
      "-f",
      "parsable",
      "-"
    ],
    "command": "yamllint",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*?:(\\d+):(\\d+): \\[(.*?)] (.*) \\((.*)\\)",
      {
        "code": 5,
        "column": 2,
        "endColumn": 2,
        "endLine": 1,
        "line": 1,
        "message": 4,
        "security": 3
      }
    ],
    "securities": {
      "error": "error",
      "warning": "warning"
    },
    "sourceName": "yamllint"
  },
  "zsh": {
    "args": [
      "-n",
      "%file"
    ],
    "command": "zsh",
    "debounce": 100,
    "formatLines": 1,
    "formatPattern": [
      "^.*:(\\d+): (parse error near .*)$",
      {
        "line": 1,
        "message": 2
      }
    ],
    "isStderr": true,
    "isStdout": false,
    "offsetColumn": 0,
    "offsetLine": 0,
    "sourceName": "zsh"
  }
}

export const formatters = {
  "autopep8": {
    "args": [
      "-"
    ],
    "command": "autopep8"
  },
  "black": {
    "args": [
      "--quiet",
      "-"
    ],
    "command": "black"
  },
  "blade-formatter": {
    "args": [
      "--stdin"
    ],
    "command": "blade-formatter"
  },
  "cmake-format": {
    "args": [
      "-i"
    ],
    "command": "cmake-format"
  },
  "dartfmt": {
    "args": [
      "--fix"
    ],
    "command": "dartfmt"
  },
  "fish_indent": {
    "command": "fish_indent"
  },
  "gofmt": {
    "args": [
      "-s"
    ],
    "command": "gofmt"
  },
  "iStyle": {
    "command": "iStyle"
  },
  "isort": {
    "args": [
      "--quiet",
      "-"
    ],
    "command": "isort"
  },
  "jq": {
    "args": [
      "-S",
      "."
    ],
    "command": "jq"
  },
  "lua-format": {
    "args": [
      "-i"
    ],
    "command": "lua-format"
  },
  "mix_format": {
    "args": [
      "format",
      "-"
    ],
    "command": "mix"
  },
  "nixfmt": {
    "command": "nixfmt"
  },
  "nixpkgs-fmt": {
    "command": "nixpkgs-fmt"
  },
  "perltidy": {
    "command": "perltidy"
  },
  "php-cs-fixer": {
    "args": [
      "fix",
      "--using-cache=no",
      "--no-interaction",
      "%file"
    ],
    "command": "./vendor/bin/php-cs-fixer",
    "doesWriteToFile": true,
    "isStdout": false
  },
  "prettier": {
    "args": [
      "--stdin",
      "--stdin-filepath",
      "%filepath"
    ],
    "command": "./node_modules/.bin/prettier",
    "rootPatterns": [
      ".prettierrc",
      ".prettierrc.json",
      ".prettierrc.toml",
      ".prettierrc.json",
      ".prettierrc.yml",
      ".prettierrc.yaml",
      ".prettierrc.json5",
      ".prettierrc.js",
      ".prettierrc.cjs",
      "prettier.config.js",
      "prettier.config.cjs"
    ]
  },
  "prettier_eslint": {
    "args": [
      "--stdin"
    ],
    "command": "./node_modules/.bin/prettier-eslint",
    "rootPatterns": [
      ".git"
    ]
  },
  "shfmt": {
    "args": [
      "-filename",
      "%filepath"
    ],
    "command": "shfmt"
  },
  "standard": {
    "args": [
      "--stdin",
      "--fix"
    ],
    "command": "./node_modules/.bin/standard",
    "isStderr": false,
    "isStdout": true,
    "rootPatterns": [
      ".git"
    ]
  },
  "stylelint": {
    "args": [
      "--fix"
    ],
    "command": "./node_modules/.bin/stylelint",
    "isStderr": false,
    "isStdout": true,
    "rootPatterns": [
      ".git"
    ]
  },
  "tffmt": {
    "args": [
      "fmt",
      "-"
    ],
    "command": "terraform"
  },
  "xo": {
    "args": [
      "--fix",
      "--stdin",
      "--stdin-filename",
      "%filepath"
    ],
    "command": "./node_modules/.bin/xo",
    "rootPatterns": [
      "package.json"
    ]
  },
  "yapf": {
    "args": [
      "--quiet"
    ],
    "command": "yapf"
  }
}
