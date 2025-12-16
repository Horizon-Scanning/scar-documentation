# SCAR - Supply Chain Anomaly Recognition System

Welcome to the **SCAR (Supply Chain Anomaly Recognition)** system documentation. SCAR is a comprehensive data-driven platform designed to identify, analyze, and alert on disruptions and changes in global supply chains for commodities critical to Israel.

## Overview

The SCAR system is a joint development project between the **National Emergency Authority** and the **Ministry of Innovation, Science and Technology** (Horizon Line Department). It leverages big data (trade data, market prices, transport indices, news, analyst reports) and AI tools (for data processing and insight generation) to provide decision support for relevant government ministries.

## Key Capabilities

### 🎯 Multi-Dimensional Monitoring
Track commodities across multiple dimensions: price, transport, supply/demand, exports/imports, and news events.

### 🔍 Anomaly Detection
Identify outliers and risks using dedicated KPI indicators and historical comparisons.

### 📊 Analysis & Context
Understand trends, identify influencing factors, and assess potential implications.

### 📈 Forecasts
Access expert forecasts for risks and opportunities in the short and medium term.

### 🔔 Alerts
Receive proactive notifications about significant changes or threshold crossings.

### 🤖 AI Analysis
Investigate and analyze current situations and expected changes using AI-powered chatbot.

### 📱 Visual Interface
Interactive dashboard with graphs and maps for clear information presentation.

## System Architecture

The project is built on the **Nimbus** cloud infrastructure with the following components:

1. **Automated Data Collection** - Reading and collecting data from information sources on an automatic schedule
2. **AI Processing** - Processing, classification, and summarization of information using AI models
3. **Data Storage** - Storage of processed information in a queryable database
4. **Monitoring & Control** - Monitoring and control system for data infrastructure
5. **Real-time Dashboard** - Data presentation in real-time, report exports, and alert configuration

## Dashboard Screens

The system provides seven main dashboard screens:

- **[KPIs Dashboard](dashboards/kpis.en.md)** - Central indicators for anomaly detection
- **[News Analysis](dashboards/news.en.md)** - Recent developments impacting commodity markets
- **[Commodity Prices](dashboards/commodity_prices.en.md)** - Futures prices and forecasts
- **[Transport Prices](dashboards/transport_prices.en.md)** - Freight indices and transportation costs
- **[Supply & Demand](dashboards/supply_demand.en.md)** - Global production and consumption analysis
- **[Worldwide Exports](dashboards/worldwide_exports.en.md)** - Global commodity export activities
- **[Israel Imports](dashboards/israel_imports.en.md)** - Commodity imports to Israel

## System Benefits

### Enhanced Situational Awareness
Up-to-date, data-driven picture of risks in global supply chains.

### Early Detection = Early Preparation
Ability to identify potential problems before they become crises and enable preventive actions.

### Decision Support
Tool to help assess required inventory levels, diversify sources, and proactive risk management.

### Basis for Discussion and Planning
Provides a common language and objective data for discussions and planning.

## Getting Started

1. Explore the [System Overview](overview/system_overview.en.md) to understand SCAR's architecture
2. Review individual [Dashboard Screens](dashboards/kpis.en.md) to understand available data
3. Learn how to use the [AI Chatbot](chatbot/rag_user_guide.en.md) for advanced analysis
4. Refer to the [Glossary](glossary/glossary.en.md) for technical terms and definitions

## Data Sources

The system integrates data from multiple authoritative sources:

- **Trading Economics** - Market prices, forecasts, and expert analysis
- **US Department of Agriculture** - Supply and demand data
- **JODI (Joint Organisations Data Initiative)** - Energy commodity data
- **UN Comtrade** - Global trade statistics
- **Israel Customs DataGov** - Israeli import data
- **Reuters** - Financial market data and news

---

*For technical support or questions, please contact your system administrator.*

