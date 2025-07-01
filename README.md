# ✨ Codelab Snippets

Handy code snippets for fast and efficient TypeScript/React development. Boost your productivity with a comprehensive collection of React components, hooks, and JavaScript ES6+ snippets.

## 🚀 Features

This extension provides a wide range of React/TypeScript and JavaScript snippets that help you write code faster:

### React Function Components

| Prefix  | Description                             |
| ------- | --------------------------------------- |
| `rfc`   | React Function Component (basic)        |
| `erfc`  | Export React Function Component         |
| `edrfc` | Export Default React Function Component |

### React Arrow Function Components

| Prefix   | Description                                   |
| -------- | --------------------------------------------- |
| `rafc`   | React Arrow Function Component (basic)        |
| `erafc`  | Export React Arrow Function Component         |
| `edrafc` | Export Default React Arrow Function Component |

### Components with Props (TypeScript)

| Prefix    | Description                                              |
| --------- | -------------------------------------------------------- |
| `rfcp`    | React Function Component with Props Interface            |
| `erfcp`   | Export React Function Component with Props               |
| `edrfcp`  | Export Default React Function Component with Props       |
| `rafcp`   | React Arrow Function Component with Props                |
| `erafcp`  | Export React Arrow Function Component with Props         |
| `edrafcp` | Export Default React Arrow Function Component with Props |

### Concise Components (Less Verbose)

| Prefix | Description                             |
| ------ | --------------------------------------- |
| `rcp`  | Function Component with Props (Concise) |
| `racp` | Arrow Component with Props (Concise)    |
| `ercp` | Export Component with Props (Concise)   |
| `ricp` | Inline Props Component (Super Concise)  |

### Props Interfaces

| Prefix   | Description                |
| -------- | -------------------------- |
| `iprops` | Props Interface Definition |
| `tprops` | Type definition for Props  |

### React Hooks

| Prefix       | Description                      |
| ------------ | -------------------------------- |
| `state`      | useState Hook                    |
| `effect`     | useEffect Hook                   |
| `effectd`    | useEffect Hook with Dependencies |
| `effectc`    | useEffect Hook with Cleanup      |
| `context`    | useContext Hook                  |
| `reducer`    | useReducer Hook                  |
| `memo`       | useMemo Hook                     |
| `callback`   | useCallback Hook                 |
| `ref`        | useRef Hook                      |
| `leffect`    | useLayoutEffect Hook             |
| `imperative` | useImperativeHandle Hook         |
| `usedebug`   | useDebugValue Hook               |

### Custom Hooks & Patterns

| Prefix     | Description                    |
| ---------- | ------------------------------ |
| `hook`     | Custom Hook Template           |
| `hookr`    | Custom Hook with Return Object |
| `statets`  | useState with TypeScript       |
| `effecta`  | useEffect with Async Pattern   |
| `formhook` | Form Hook Pattern              |

### JavaScript ES6+ Features

| Prefix | Description             |
| ------ | ----------------------- |
| `af`   | Arrow Function          |
| `afi`  | Arrow Function (Inline) |
| `aaf`  | Async Arrow Function    |
| `asf`  | Async Function          |
| `co`   | Const Declaration       |
| `le`   | Let Declaration         |

### Destructuring

| Prefix  | Description                    |
| ------- | ------------------------------ |
| `dob`   | Destructure Object             |
| `dar`   | Destructure Array              |
| `drest` | Destructure with Rest Operator |

### Array Methods

| Prefix    | Description          |
| --------- | -------------------- |
| `map`     | Array Map Method     |
| `filter`  | Array Filter Method  |
| `reduce`  | Array Reduce Method  |
| `find`    | Array Find Method    |
| `foreach` | Array ForEach Method |

### Import/Export

| Prefix | Description    |
| ------ | -------------- |
| `imp`  | Import Default |
| `imn`  | Import Named   |
| `ima`  | Import All as  |
| `exp`  | Export Default |
| `exn`  | Export Named   |

### Promises & Async

| Prefix | Description     |
| ------ | --------------- |
| `prom` | Promise         |
| `tca`  | Try Catch Async |

### Console & Debugging

| Prefix    | Description    |
| --------- | -------------- |
| `cl`      | Console Log    |
| `cw`      | Console Warn   |
| `ce`      | Console Error  |
| `ctable`  | Console Table  |
| `cclear`  | Console Clear  |
| `cassert` | Console Assert |
| `ctime`   | Console Time   |
| `cgroup`  | Console Group  |

### Utilities

| Prefix     | Description      |
| ---------- | ---------------- |
| `tl`       | Template Literal |
| `okeys`    | Object.keys()    |
| `ovalues`  | Object.values()  |
| `oentries` | Object.entries() |

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

### useState Hook

Type `state` and press Tab:

```typescript
const [count, setCount] = useState(0);
```

### useEffect with Async

Type `effecta` and press Tab:

```typescript
useEffect(() => {
  const fetchData = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [dependencies]);
```

### Arrow Function

Type `af` and press Tab:

```typescript
const functionName = (params) => {};
```

## 🎯 Tips

- All snippets use placeholder variables - press Tab to navigate between them
- Component names are automatically synced across interface and component definitions
- Hook snippets include proper TypeScript support and common patterns
- Choose between verbose (full return blocks) and concise (inline JSX) variations based on your needs
- Use JavaScript ES6+ snippets for modern JavaScript development
- Console snippets help with debugging and performance monitoring

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
