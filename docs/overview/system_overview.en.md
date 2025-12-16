# System Overview

## Introduction

The **SCAR (Supply Chain Anomaly Recognition) System** is a cutting-edge data-driven platform developed jointly by the **National Emergency Authority** and the **Ministry of Innovation, Science and Technology** (Horizon Line Department). The system is designed to provide comprehensive monitoring, analysis, and early warning capabilities for global supply chain disruptions affecting commodities critical to Israel's strategic needs.

## The Challenge

### Managing Strategic Inventories in an Era of Global Uncertainty

In today's interconnected global economy, supply chains face unprecedented challenges:

- **Geopolitical tensions** affecting trade routes and export policies
- **Climate change** impacting agricultural production and transportation
- **Economic volatility** causing price fluctuations and market instability
- **Global health crises** disrupting production and logistics
- **Infrastructure bottlenecks** creating transportation delays
- **Regulatory changes** affecting import/export regulations

These factors create a complex, dynamic environment where traditional monitoring approaches are insufficient. SCAR addresses this challenge by providing real-time, multi-dimensional visibility into supply chain risks.

## System Purpose

SCAR serves as a **decision support tool** for government ministries and stakeholders responsible for strategic resource management. It is designed to:

1. **Enable Expert Decision-Making** - Provide data-driven insights to support, not replace, human expertise
2. **Facilitate Early Warning** - Detect potential disruptions before they escalate into crises
3. **Support Strategic Planning** - Inform inventory management, source diversification, and contingency planning
4. **Enhance Coordination** - Provide a common data foundation for inter-ministerial discussions

!!! info "Important Note"
    SCAR is an **expert support system**. It augments human decision-making capabilities but does not replace the judgment and expertise of government officials and subject matter experts.

## Core Capabilities

### Multi-Dimensional Monitoring

SCAR tracks commodities across six critical dimensions:

| Dimension | Description | Update Frequency |
|-----------|-------------|------------------|
| **News Sentiment** | Analysis of news coverage and sentiment trends | Daily |
| **Commodity Prices** | Futures market prices and price movements | Daily |
| **Transport Costs** | Shipping indices and freight rates | Daily |
| **Supply & Demand** | Global production and consumption data | Monthly |
| **Worldwide Exports** | Global trade flows and export volumes | Monthly |
| **Israel Imports** | Import volumes to Israel by source country | Monthly |

### Anomaly Detection

The system employs sophisticated algorithms to identify:

- **Statistical outliers** in price movements, trade volumes, or other metrics
- **Threshold violations** when KPIs exceed predefined risk levels
- **Trend changes** indicating shifts in market dynamics
- **Pattern deviations** from historical norms or seasonal patterns

### Analysis and Context

SCAR provides contextual analysis through:

- **Historical comparisons** to identify long-term trends
- **Correlation analysis** to understand relationships between different indicators
- **Expert commentary** from market analysts and economists
- **AI-powered insights** generated from unstructured data sources

### Forecasting

The system integrates:

- **Expert forecasts** from Trading Economics analysts
- **Statistical projections** based on historical data
- **Scenario analysis** for different potential outcomes

### Alerts and Notifications

Configurable alert system that:

- Monitors KPIs against customizable thresholds
- Sends proactive notifications when significant changes occur
- Prioritizes alerts based on severity and potential impact
- Supports multiple notification channels

### Visual Analytics

Interactive dashboards featuring:

- **Time-series charts** for trend analysis
- **Geographic maps** showing production and trade flows
- **Heat maps** visualizing multi-dimensional data
- **Comparison tables** for cross-country or cross-commodity analysis

## System Architecture

### Cloud Infrastructure - Nimbus

SCAR is built on the **Nimbus** government cloud infrastructure, ensuring:

- **Security** - Government-grade data protection and access controls
- **Scalability** - Ability to handle growing data volumes
- **Reliability** - High availability and disaster recovery capabilities
- **Compliance** - Adherence to Israeli government IT standards

### Data Pipeline

The SCAR data processing pipeline operates through the following stages:

![SCAR Data Pipeline](images/data_pipeline.png)

**Pipeline Stage Descriptions:**

**1. Information Sources:**
- **Market Data** - Futures prices, freight indices from Trading Economics and Reuters
- **Quantitative Metrics** - Trade data, exports, imports from UN Comtrade and Israel Customs
- **Economic News** - News articles from economic news websites
- **Expert Reports** - Market analysis, forecasts from USDA, expert reports

**2. Processing Engine:**
- **Data Collection** - Automated scheduled collection from all information sources
- **Parsing & Analysis** - Structured data processing, cleaning and validation
- **Summarization, Classification & Risk Assessment** - Natural language processing, machine learning, KPI calculation

**3. User Interface:**
- **Management Dashboard** - Visual display of KPIs, charts and maps
- **Report Export** - Custom report generation and export
- **Alert System** - Automated alerts on risk thresholds

**4. Infrastructure:**
- **Monitoring & Control** - System health and data quality monitoring
- **User Management** - Access control and permissions
- **Data Storage & Query** - Queryable database
- **Information Security** - Encryption, auditing and compliance

### Key Components

1. **Data Collection Module**
   - Scheduled API calls to external data sources
   - Data validation and quality checks
   - Error handling and retry mechanisms

2. **AI Processing Engine**
   - Natural language processing for news articles
   - Sentiment analysis and topic classification
   - Anomaly detection algorithms
   - Forecast generation

3. **Data Storage Layer**
   - Time-series database for historical data
   - Document store for unstructured content
   - Metadata catalog for data governance

4. **Monitoring & Control System**
   - Data pipeline health monitoring
   - Alert generation and distribution
   - Audit logging and compliance tracking

5. **User Interface**
   - Web-based dashboard
   - Interactive visualizations
   - Report generation and export
   - User access management

## Data Sources

SCAR integrates data from multiple authoritative sources:

### Trading Economics
- **Commodity futures prices** (daily updates)
- **Freight indices** (daily updates)
- **Economic forecasts** (regular updates)
- **Expert market analysis** (regular updates)

### US Department of Agriculture (USDA)
- **Global production data** (monthly)
- **Consumption estimates** (monthly)
- **Supply and demand forecasts** (monthly)

### Joint Organisations Data Initiative (JODI)
- **Energy production data** (monthly)
- **Energy consumption data** (monthly)
- **Oil and gas statistics** (monthly)

### UN Comtrade
- **Global trade statistics** (monthly)
- **Export volumes by country and commodity** (monthly)
- **Trade flow analysis** (monthly)

### Israel Customs DataGov
- **Israeli import data** (monthly)
- **Detailed commodity classifications** (monthly)
- **Source country information** (monthly)

### Reuters
- **Containerized Freight Index** (daily)
- **Financial market data** (daily)

## System Benefits

### Enhanced Situational Awareness

- **Real-time visibility** into global supply chain conditions
- **Comprehensive coverage** across multiple data dimensions
- **Data-driven insights** replacing gut feelings and assumptions

### Early Detection and Prevention

- **Proactive monitoring** identifies issues before they escalate
- **Trend analysis** reveals emerging risks
- **Predictive capabilities** enable forward planning

### Improved Decision Quality

- **Objective data** reduces cognitive biases
- **Historical context** informs current decisions
- **Expert analysis** complements quantitative data

### Enhanced Coordination

- **Common operating picture** for all stakeholders
- **Shared data foundation** for inter-ministerial coordination
- **Standardized metrics** enable consistent communication

### Risk Management

- **Diversification insights** identify alternative supply sources
- **Inventory optimization** balances costs and resilience
- **Contingency planning** prepares for potential disruptions

## User Roles and Access

SCAR supports multiple user roles with different access levels:

| Role | Access Level | Typical Users |
|------|--------------|---------------|
| **System Administrator** | Full access to all features, user management | IT staff, system owners |
| **Analyst** | Full dashboard access, report generation | Government analysts, economists |
| **Viewer** | Read-only dashboard access | Senior officials, decision-makers |
| **Guest** | Limited access to selected dashboards | External consultants, researchers |

## Security and Compliance

### Data Security
- **Encryption** at rest and in transit
- **Access controls** based on role-based permissions
- **Audit logging** of all user actions
- **Regular security assessments**

### Compliance
- **Government IT standards** adherence
- **Data privacy regulations** compliance
- **Retention policies** implementation
- **Regular compliance audits**

## Future Enhancements

The SCAR roadmap includes:

1. **Expanded Data Sources** - Integration with additional international databases
2. **Advanced AI Capabilities** - Enhanced natural language processing and predictive modeling
3. **Mobile Access** - Native mobile applications for on-the-go access
4. **Automated Reporting** - Customizable monthly reports with automated generation
5. **API Access** - Programmatic access for integration with other systems
6. **Enhanced Visualization** - 3D visualizations and augmented reality features

## Getting Help

For assistance with the SCAR system:

- **Technical Support**: Contact your IT help desk
- **Training Materials**: Available in the system help section
- **User Guide**: This documentation provides comprehensive guidance
- **Feedback**: Submit suggestions through the system feedback form

---

*Last Updated: December 2025*

