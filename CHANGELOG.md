# 📝 Change Log

All notable changes to the **Codelab Snippets** extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned

- html snippets support
- Vue.js snippets support
- Next.js specific snippets
- Django snippets support
- Pandas snippets support
- Selenium snippets support
- Kotlin snippets support

## [0.1.0] - 2025-07-02 - "📝 Markdown Documentation Revolution"

### Added

- **📝 Complete Markdown Snippets Collection** - **Notion/Confluence Style Documentation**
  - **🎯 Semantic Slash Commands** - Transform Markdown writing experience with intuitive `/command` syntax
  - **Page Structure**: `/title`, `/h1-h6`, `/toc` for professional document hierarchy
  - **Text Formatting**: `/bold`, `/italic`, `/strike`, `/code`, `/highlight` for rich content
  - **Lists & Organization**: `/list`, `/numbered`, `/todo`, `/toggle` for structured information
  - **Content Blocks**: `/paragraph`, `/quote`, `/codeblock`, `/divider`, `/table` for versatile layouts
  - **Notion-Style Callouts**: `/info`, `/warning`, `/error`, `/success`, `/note`, `/tip` for highlighted content
  - **Media Integration**: `/link`, `/image`, `/video` for multimedia documentation
  - **Professional Templates**:
    - `/meeting` - Complete meeting notes with agenda and action items
    - `/project` - Project plan with timeline, team, and deliverables
    - `/docs` - Standard documentation page template
    - `/api` - API endpoint documentation with examples
    - `/readme` - Complete README template with badges
    - `/changelog` - Structured changelog following Keep a Changelog format
    - `/spec` - Feature specification with acceptance criteria
  - **Interactive Elements**: `/tabs`, `/accordion`, `/progress`, `/kbd` for dynamic content
  - **Database-like Structures**: Property lists, status badges for project management

### Improved

- **🌍 International Consistency** - All snippets now follow English conventions for better global compatibility
- **📚 Enhanced Documentation** - Added comprehensive Markdown snippets section to README
- **🔍 Better Discoverability** - Added markdown, documentation, notion, confluence keywords for improved searchability

## [0.0.9] - 2025-07-02 - "✨ Enhanced UX, Clarity Improvements & CSS Support"

### Added

- **🎨 Complete CSS Snippets Collection** - Professional styling toolkit
  - **Modern CSS Reset & Boilerplate**: Complete reset with REM system, viewport optimization
  - **Flexbox Layout System**: Complete container setup with all properties and shortcuts
  - **🎬 Animation Library (`animate:...`)** - **GAME CHANGER** for modern web animations:
    - `animate:pulse` - Breathing pulse effect for CTAs and attention-grabbing
    - `animate:fade-in` / `animate:fade-out` - Smooth content transitions
    - `animate:slide-in` - Perfect for mobile menus and sidebar navigation
    - `animate:bounce` - Playful effect for notifications and success messages
    - `animate:shake` - Error states and form validation feedback
    - `animate:spin` - Loading spinners and rotating icons
    - `animate:zoom-in` / `animate:zoom-out` - Modal appearances and exits
    - `animate:flip` - 3D card reveals and interactive elements
  - **Transition Presets**: Quick (150ms), Standard (300ms), Slow (500ms) durations
  - **Utility Classes**: Box shadows, border radius, spacing shortcuts

### Improved

- **🎯 Snippet Clarity & UX Overhaul** - Complete redesign of snippet titles and descriptions
  - **React Snippets**: Clearer, more intuitive titles and descriptions
    - "Function Component (Basic)" instead of "React Function Component"
    - "Arrow Component (Exported)" instead of "Export React Arrow Function Component"
    - More descriptive explanations of when and how to use each snippet
    - Better TypeScript context in descriptions
  - **Python Snippets**: Enhanced descriptions with functionality explanations
    - "Import Specific Items" instead of "Import Default"
    - "Create state variable with setter using useState hook" instead of "useState Hook"
    - Cross-reference equivalents (e.g., "equivalent to Object.keys")
    - Technical context for better understanding
  - **JavaScript ES6+ Snippets**: Already optimized in previous versions
- **📝 Better Developer Experience**
  - All snippet descriptions now explain the purpose and use case
  - Consistent naming pattern across all snippet categories
  - More educational approach - developers learn while coding
  - Improved discoverability through clearer descriptions

### Enhanced

- **🔍 Improved Snippet Discovery**: Titles now clearly indicate functionality
- **📚 Educational Descriptions**: Each snippet includes helpful context
- **🎨 Consistent Patterns**: Unified approach to naming and describing snippets
- **⚡ Productivity Boost**: Less time wondering what snippets do, more time coding

### Technical

- Maintained all existing functionality while improving user interface
- No breaking changes to existing prefix shortcuts
- Enhanced IntelliSense experience with clearer descriptions

## [0.0.8] - 2025-07-02 - "🐍 Python Power & Enhanced Tooling"

### Added

- **Complete Python Snippets Collection** 🐍
  - **Core utilities**: `main`, `imp`, `ima` - Main boilerplate and imports
  - **Dictionary methods** (equivalent to JS Object methods):
    - `dkeys`, `dvalues`, `ditems` - Dictionary operations
    - `lkeys`, `lvalues`, `litems` - List conversions
  - **List/Array manipulation**:
    - `lc`, `lcif` - List comprehensions with conditions
    - `map`, `filter`, `lmap`, `lfilter` - Functional programming
    - `reduce`, `sort`, `sorted` - Data processing
    - `append`, `extend`, `remove`, `pop`, `index`, `count` - List methods
    - `any`, `all` - Boolean operations
  - **Advanced loops**: `forin`, `forenum`, `forzip`, `forrange`
  - **Dictionary comprehensions**: `dc`, `dcif`
  - **Class definitions with auto-capitalization**:
    - `class`, `dataclass` - Smart PascalCase conversion
    - `init`, `str`, `staticmethod`, `classmethod`, `property`
  - **HTTP requests**: `httprequest` - Complete request handling
  - **Exception handling**: `tryexcept`
  - **Utils collection**: `utils:terminalcolors` - Complete terminal color utilities
- **Enhanced Build Tooling** 🔧
  - **Comprehensive minification statistics**:
    - File-by-file size analysis (original → minified)
    - Memory savings in KB and percentage
    - Professional reporting with detailed tables
    - Total size reduction summary

### Enhanced

- **Smart auto-capitalization** for Python class names using `${1/(.*)/${1:/capitalize}/}` transformation (inspired by React's useState pattern)
- **Conversational snippet naming** - Type what you want like speaking:
  - `erfc` → "Export React Function Component"
  - `utils:terminalcolors` → Complete utility module
  - `forenum` → "For loop with enumerate"
- **Cross-language consistency** - Python snippets mirror JavaScript functionality where applicable

### Technical

- Advanced snippet transformations for automatic naming conventions
- Optimized file size reduction with detailed analytics
- Professional tooling output with clean formatting

## [0.0.7] - 2025-07-02 - "🔧 Optimization & Tooling"

### Added

- **Build tooling improvements**
  - `minify:snippets` script for snippet optimization
  - ES Modules support (`"type": "module"`)
  - Enhanced keywords for better marketplace discovery
- **Developer experience**
  - Automated snippet minification process
  - Modern JavaScript module system

### Changed

- Updated keywords to include "hooks" and "react hooks" for better discoverability
- Improved project structure with proper ES Module configuration

### Technical

- Added `"type": "module"` to package.json for native ES Module support
- Enhanced build scripts for extension optimization

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
