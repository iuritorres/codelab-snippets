# ✨ Codelab Snippets

Handy code snippets for fast and efficient TypeScript/React development. Boost your productivity with a comprehensive collection of React component snippets.

## 🚀 Features

This extension provides a wide range of React/TypeScript snippets that help you write components faster:

### React Function Components

- `rfc` - React Function Component (basic)
- `erfc` - Export React Function Component
- `edrfc` - Export Default React Function Component

### React Arrow Function Components

- `rafc` - React Arrow Function Component (basic)
- `erafc` - Export React Arrow Function Component
- `edrafc` - Export Default React Arrow Function Component

### Components with Props (TypeScript)

- `rfcp` - React Function Component with Props Interface
- `erfcp` - Export React Function Component with Props
- `edrfcp` - Export Default React Function Component with Props
- `rafcp` - React Arrow Function Component with Props
- `erafcp` - Export React Arrow Function Component with Props
- `edrafcp` - Export Default React Arrow Function Component with Props

### Concise Components (Less Verbose)

- `rcp` - Function Component with Props (Concise)
- `racp` - Arrow Component with Props (Concise)
- `ercp` - Export Component with Props (Concise)
- `ricp` - Inline Props Component (Super Concise)

### Props Interfaces

- `iprops` - Props Interface Definition
- `tprops` - Type definition for Props

## 📋 Requirements

- VS Code 1.101.0 or higher
- Works with JavaScript, TypeScript, JSX, and TSX files

## ⚙️ Extension Settings

This extension doesn't add any VS Code settings. Just install and start using the snippets!

## 💡 Usage Examples

### Basic Component

Type `rfc` and press Tab:

```typescript
function ComponentName () {
  return (

  );
};
```

### Component with Props (Concise)

Type `ercp` and press Tab:

```typescript
interface ComponentProps {
  prop: string;
}

export const Component = ({ prop }: ComponentProps) => <div></div>;
```

### Inline Component (Super Concise)

Type `ricp` and press Tab:

```typescript
const Component = ({ prop }: { prop: string }) => <div></div>;
```

## 🎯 Tips

- All snippets use placeholder variables - press Tab to navigate between them
- Component names are automatically synced across interface and component definitions
- Choose between verbose (full return blocks) and concise (inline JSX) variations based on your needs

## 🐛 Known Issues

No known issues at this time. Please report any problems on the GitHub repository.

## 📝 Release Notes

### 0.0.1

Initial release with comprehensive React/TypeScript snippets:

- Function and Arrow Function Components
- Components with Props and TypeScript interfaces
- Concise variations for faster coding
- Export variations (default, named)

---

## 🛠️ Development

This extension was built for the Codelab community to speed up React/TypeScript development.

**Author**: [iuritorres](https://github.com/iuritorres)
