# SCAR Documentation

Documentation site for **SCAR (Supply Chain Anomaly Radar System)** - a comprehensive data-driven platform designed to identify, analyze, and alert on disruptions and changes in global supply chains for commodities critical to Israel.

## Overview

This repository contains the MkDocs documentation for the SCAR system, a joint development project between the **National Emergency Authority** and the **Ministry of Innovation, Science and Technology** (Horizon Line Department).

The documentation is available in both **English** and **Hebrew** (עברית) and covers:
- System overview and architecture
- Dashboard documentation (KPIs, News, Commodity Prices, Transport Prices, Supply & Demand, Worldwide Exports, Israel Imports)
- AI Chatbot user guide
- Glossary of terms

## Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd supply-chain
```

2. Install MkDocs and required plugins:
```bash
pip install mkdocs mkdocs-material
```

Or install from a requirements file (if available):
```bash
pip install -r requirements.txt
```

## Usage

### Development Server

To preview the documentation locally while editing:

```bash
mkdocs serve
```

The documentation will be available at `http://127.0.0.1:8000/`

### Build Static Site

To build a static site for deployment:

```bash
mkdocs build
```

The static site will be generated in the `site/` directory.

### Deploy

To deploy to GitHub Pages (if configured):

```bash
mkdocs gh-deploy
```

## Project Structure

```
supply-chain/
├── docs/                    # Documentation source files
│   ├── chatbot/            # AI Chatbot user guides
│   ├── dashboards/         # Dashboard documentation
│   ├── glossary/           # Glossary definitions
│   ├── overview/           # System overview
│   ├── index.en.md         # English homepage
│   └── index.he.md         # Hebrew homepage
├── mkdocs.yml              # MkDocs configuration
└── README.md               # This file
```

## Configuration

The site configuration is defined in `mkdocs.yml`. Key features:

- **Theme**: Material for MkDocs
- **Languages**: English (en) and Hebrew (he)
- **Plugins**: Search with multi-language support
- **Extensions**: Admonitions, code highlighting, tables, footnotes, and more

## Documentation Sections

### System Overview
- Architecture and components
- Data sources and processing
- System capabilities

### Dashboards
- **KPIs Dashboard**: Central indicators for anomaly detection
- **News Analysis**: Recent developments impacting commodity markets
- **Commodity Prices**: Futures prices and forecasts
- **Transport Prices**: Freight indices and transportation costs
- **Supply & Demand**: Global production and consumption analysis
- **Worldwide Exports**: Global commodity export activities
- **Israel Imports**: Commodity imports to Israel

### AI Chatbot
- User guide for the RAG-powered chatbot
- Query examples and best practices

### Glossary
- Technical terms and definitions
- Supply chain terminology

## Contributing

When contributing to the documentation:

1. Edit the appropriate Markdown files in the `docs/` directory
2. Use the development server to preview changes: `mkdocs serve`
3. Ensure both English and Hebrew versions are updated if applicable
4. Follow the existing documentation style and structure

## Data Sources

The SCAR system integrates data from multiple authoritative sources:

- **Trading Economics** - Market prices, forecasts, and expert analysis
- **US Department of Agriculture** - Supply and demand data
- **JODI (Joint Organisations Data Initiative)** - Energy commodity data
- **UN Comtrade** - Global trade statistics
- **Israel Customs DataGov** - Israeli import data
- **Reuters** - Financial market data and news

## License

This documentation is part of the SCAR system developed by the National Emergency Authority and the Ministry of Innovation, Science and Technology.

## Support

For technical support or questions about the documentation, please contact your system administrator.

---

**Developed by**: National Emergency Authority & Ministry of Innovation, Science and Technology (Horizon Line Department)

