# 📝 Change Log

All notable changes to the **Codelab Snippets** extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned

- Additional snippet variations
- Support for more React patterns
- Vue.js snippets support
- Next.js specific snippets

## [0.0.6] - 2025-06-30 - "🎣 Hooks & ES6+ Collection"

### Added

- **React Hooks Collection** - Comprehensive set of React hooks snippets
  - `state` - useState Hook with automatic setter capitalization
  - `effect`, `effectd`, `effectc` - useEffect variations
  - `context`, `reducer` - Context and Reducer hooks
  - `memo`, `callback` - Performance hooks
  - `ref`, `leffect`, `imperative`, `usedebug` - Advanced hooks
- **Custom Hooks & Patterns**
  - `hook`, `hookr` - Custom hook templates
  - `statets` - useState with TypeScript support
  - `effecta` - useEffect with async/await pattern
  - `formhook` - Form handling hook pattern
- **JavaScript ES6+ Snippets Collection** - Modern JavaScript development
  - Arrow functions: `af`, `afi`, `aaf`
  - Variables: `co`, `le`
  - Destructuring: `dob`, `dar`, `drest`
  - Array methods: `map`, `filter`, `reduce`, `find`, `foreach`
  - Import/Export: `imp`, `imn`, `ima`, `exp`, `exn`
  - Promises: `prom`, `tca`, `asf`
  - Console utilities: `cl`, `cw`, `ce`, `ctable`, `cclear`, `cassert`, `ctime`, `cgroup`
  - Object methods: `okeys`, `ovalues`, `oentries`
  - Template literals: `tl`

### Changed

- Updated package.json to load both React and JavaScript ES6+ snippets in all supported languages
- Improved hook snippet prefixes for better memorability (e.g., `state` instead of `ust`)
- Enhanced README with organized tables for better readability
- Added more comprehensive usage examples in README

### Improved

- Better TypeScript support across all snippets
- More intuitive snippet prefixes
- Enhanced documentation structure

## [0.0.2] - 2025-06-28

### Added

- Concise component snippets for faster development
  - `rcp` - Function Component with Props (Concise)
  - `racp` - Arrow Component with Props (Concise)
  - `ercp` - Export Component with Props (Concise)
  - `ricp` - Inline Props Component (Super Concise)
- Quick props interface snippets
  - `iprops` - Props Interface Definition
  - `tprops` - Type definition for Props
- Repository information and metadata to package.json
- Comprehensive README with usage examples

### Changed

- Improved package.json organization and structure
- Enhanced snippet descriptions for better IntelliSense

## [0.0.1] - 2025-06-28

### Added

- Initial release with core React/TypeScript snippets
- React Function Components
  - `rfc` - Basic React Function Component
  - `erfc` - Export React Function Component
  - `edrfc` - Export Default React Function Component
- React Arrow Function Components
  - `rafc` - Basic React Arrow Function Component
  - `erafc` - Export React Arrow Function Component
  - `edrafc` - Export Default React Arrow Function Component
- Components with Props and TypeScript interfaces
  - `rfcp`, `erfcp`, `edrfcp` - Function components with props
  - `rafcp`, `erafcp`, `edrafcp` - Arrow components with props
- Support for JavaScript, TypeScript, JSX, and TSX files
- VS Code extension structure and configuration
