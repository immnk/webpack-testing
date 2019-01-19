module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": 2,
        "no-undef": 2,
        "no-console": ["error", {
            allow: ["warn", "log"]
        }],
        "indent": ["error", 2],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        "document": true,
        "window": true
    }
};