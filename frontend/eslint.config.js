import js from '@eslint/js';
export default [js.configs.recommended,{files:['src/**/*.{ts,tsx}'],languageOptions:{parserOptions:{ecmaVersion:'latest',sourceType:'module'},globals:{window:'readonly',document:'readonly',navigator:'readonly',setInterval:'readonly',clearInterval:'readonly',confirm:'readonly'}},rules:{'no-unused-vars':'off'}}];
