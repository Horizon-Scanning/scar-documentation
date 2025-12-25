# KPIs Dashboard

## Overview

The **KPIs Dashboard** provides a comprehensive risk assessment overview for commodity supply chain management, displaying real-time performance indicators across six critical dimensions. Each KPI is designed to highlight potential supply chain disruptions through color-coded risk levels and quantitative scoring.

!!! info "Dashboard Purpose"
    The KPIs screen serves as the central monitoring hub for early detection of supply chain anomalies. It provides at-a-glance visibility into multiple risk dimensions, enabling rapid assessment and prioritization of potential issues.

## Risk Level Indicators

All KPIs use a standardized color-coding system:

| Color | Symbol | Meaning | Typical Action |
|-------|--------|---------|----------------|
| 🟢 Green | ● | Normal conditions | Continue monitoring |
| 🟡 Yellow | ● | Elevated risk | Increased vigilance |
| 🔴 Red | ● | High risk | Active investigation |
| 🟥 Red Node | ● | Critical risk | Immediate action required |

---

## 1. News Score

### Description
Measures commodity sentiment risk by analyzing news article sentiment trends and coverage frequency over rolling 30-day periods. This KPI provides early warning signals based on media coverage patterns and negative sentiment concentration.

### Calculation Formula
```
News Score = (Last 30 Days Bad News % × 0.6) + 
             (Bad News % Change × 0.2) + 
             (News Frequency Factor × 100 × 0.2)
```

**Components:**
- **Last 30 Days Bad News %**: Percentage of negative news articles in the past 30 days
- **Bad News % Change**: Month-over-month change in negative news percentage
- **News Frequency Factor**: Normalized measure of news volume (higher values indicate increased media attention)

### Risk Thresholds

| Threshold | Range | Interpretation |
|-----------|-------|----------------|
| 🟢 Green | < 30 | Normal news sentiment and coverage |
| 🟡 Yellow | 30 - 59 | Moderate negative sentiment or increasing coverage |
| 🔴 Red | 60 - 80 | High negative sentiment requiring attention |
| 🟥 Red Node | > 80 | Critical negative sentiment indicating severe risk |

### Update Frequency
**Daily** - Updates every 24 hours with new news articles processed overnight

### Interpretation Guide
- **Rising scores** indicate increasing negative sentiment or news coverage
- **Sudden spikes** may signal breaking events or emerging crises
- **Sustained high scores** suggest ongoing supply chain stress
- **Consider context** - some negative news may not affect supply chains directly

---

## 2. Commodity Price Score

### Description
Measures week-over-week commodity price performance changes by tracking futures price movements across global markets. This KPI identifies rapid price increases that may indicate supply constraints or demand surges.

### Calculation Formula
```
WoW Price Change % = ((Current Week Close - Previous Week Close) / 
                       Previous Week Close) × 100
```

**Logic:**
- Calculates the average closing price for the current week
- Compares to the average closing price for the previous week
- Expresses change as a percentage

### Risk Thresholds

| Threshold | Range | Interpretation |
|-----------|-------|----------------|
| 🟢 Green | < 0% | Price stability or decrease |
| 🟡 Yellow | 0% - 4.9% | Moderate price increase |
| 🔴 Red | 5% - 10% | Significant price increase |
| 🟥 Red Node | > 10% | Extreme price volatility |

### Update Frequency
**Daily** - Futures market data updated at market close

### Interpretation Guide
- **Positive changes** indicate price increases (potential supply issues)
- **Negative changes** indicate price decreases (potential oversupply or demand reduction)
- **Volatility** itself can be a risk factor regardless of direction
- **Compare to historical ranges** to assess significance

---

## 3. Transport Price Score

### Description
Measures transport cost momentum using a weighted average of week-over-week price changes across key shipping indices (Baltic Dry Index, Containerized Freight Index). This KPI tracks the cost of moving commodities globally.

### Calculation Formula
```
Weighted Momentum % = Σ(Index WoW Change % × Weight)
```

**Components:**
- **Baltic Dry Index**: Rates for bulk commodity shipping (coal, grain, etc.)
- **Containerized Freight Index**: Rates for containerized goods
- **Weights**: Based on relevance to Israeli strategic commodities (see Transport Price Weights section below)

### Transport Price Weights

The Transport Price Score calculation uses a weighted average approach, where each shipping index is assigned a weight based on its relevance to Israeli strategic commodities. These weights are defined in the **Transport Price Weights** file (`transport price weights.xlsx`).

**Purpose:**
The weights file allows the system to properly weight the contribution of each shipping index (BDI and CFI) to the overall Transport Price Score, ensuring that indices more relevant to Israel's commodity imports have greater influence on the final score.

**File Location:**
The `transport price weights.xlsx` file is located in the project root directory and contains:
- Weight assignments for Baltic Dry Index (BDI)
- Weight assignments for Containerized Freight Index (CFI)
- Commodity-specific weight configurations
- Historical weight adjustments (if applicable)

**How Weights Are Used:**
1. The system reads the current week-over-week percentage change for each index (BDI and CFI)
2. Each index change is multiplied by its assigned weight from the weights file
3. The weighted changes are summed to produce the final Transport Price Score
4. The score is then compared against risk thresholds to determine the color-coded indicator

**Weight Configuration:**
Weights are typically configured based on:
- **Commodity transport methods**: Commodities primarily shipped via bulk carriers (BDI) vs. containerized freight (CFI)
- **Israeli import patterns**: Historical data on how commodities are imported to Israel
- **Strategic importance**: Critical commodities may have adjusted weights to reflect their importance

!!! note "Weight Updates"
    The transport price weights file can be updated to reflect changes in shipping patterns, commodity mix, or strategic priorities. Contact your system administrator to modify weights.

### Risk Thresholds

| Threshold | Range | Interpretation |
|-----------|-------|----------------|
| 🟢 Green | > 0 | Transport costs stable or increasing (normal market) |
| 🟡 Yellow | -8 < Yellow ≤ 0 | Moderate decrease in transport costs |
| 🔴 Red | < -8 | Significant decrease indicating market disruption |
| 🟥 Red Node | < -20 | Extreme decrease suggesting major logistics disruption |

!!! note "Inverted Logic"
    **Note:** This KPI uses inverted logic - **decreasing** transport prices can indicate market disruptions, reduced trade volumes, or economic slowdown, which are risk factors.

### Update Frequency
**Daily** - Shipping index data updated at market close

### Interpretation Guide
- **Decreasing scores** may indicate reduced shipping demand (economic concern)
- **Rapid changes** suggest logistics disruptions or route changes
- **Context matters** - seasonal variations are normal
- **Cross-reference** with commodity-specific shipping methods

---

## 4. Supply & Demand Score

### Description
Measures commodity supply chain stability by analyzing recent changes in total supply relative to current supply levels. This KPI uses production, consumption, and inventory data to assess market balance.

### Calculation Formula
```
Total Supply Change % = ((Last Month Total Supply / 
                          Average Previous 3 Months Total Supply) - 1) × 100
```

**Components:**
- **Total Supply**: Production + Opening Stocks + Imports
- **Average Previous 3 Months**: Baseline for comparison
- **Change Calculation**: Percentage deviation from recent average

### Risk Thresholds

| Threshold | Range | Interpretation |
|-----------|-------|----------------|
| 🟢 Green | > 0 | Supply increasing or stable |
| 🟡 Yellow | -5 < Yellow ≤ 0 | Moderate supply decrease |
| 🔴 Red | ≤ -5 | Significant supply reduction |
| 🟥 Red Node | < -80 | Critical supply shortage |

### Update Frequency
**Monthly** - Updated when new USDA and JODI reports are published

### Interpretation Guide
- **Negative changes** indicate supply reductions requiring attention
- **Large decreases** may signal production issues or stockpile depletion
- **Seasonal patterns** should be considered (harvest cycles, etc.)
- **Compare demand trends** to assess true market tightness

---

## 5. Worldwide Exports Score

### Description
Measures quarter-over-quarter export performance changes by commodity, adjusted for changes in data reporting coverage. This KPI identifies shifts in global trade patterns.

### Calculation Formula
```
QoQ Export Change % - QoQ Data Availability Change % + 
Average Data Availability Trend %
```

**Components:**
- **QoQ Export Change %**: Quarter-over-quarter change in export volumes
- **QoQ Data Availability Change %**: Adjustment for reporting coverage changes
- **Average Data Availability Trend %**: Baseline correction for systematic reporting changes

**Purpose of Adjustment:** UN Comtrade data availability varies by country and time period. The adjustment prevents false positives from reporting gaps.

### Risk Thresholds

| Threshold | Range | Interpretation |
|-----------|-------|----------------|
| 🟢 Green | > 0 | Exports stable or increasing |
| 🟡 Yellow | -10 ≤ Yellow < 0 | Moderate export decline |
| 🔴 Red | ≤ -10 | Significant export reduction |
| 🟥 Red Node | ≤ -40 | Critical export collapse |

### Update Frequency
**Monthly** - Updated when new UN Comtrade data is released (typically 2-3 month lag)

### Interpretation Guide
- **Declining exports** may indicate production issues or trade restrictions
- **Regional patterns** can identify specific problem areas
- **Data lag** means this is not a real-time indicator
- **Combine with other KPIs** for comprehensive assessment

---

## 6. Israel Imports Score

### Description
Measures import performance changes by commodity, comparing current month imports to the rolling 12-month average. Provides seasonal-adjusted insight into Israel's import trends for critical commodities.

### Calculation Formula
```
Import Score % = ((Current Month - Avg of Previous 12 Months) / 
                  Avg of Previous 12 Months) × 100
```

**Components:**
- **Current Month**: Total net weight imported in most recent month
- **Avg of Previous 12 Months**: Rolling average of imports over the past 12 months
- **Percentage Change**: Deviation from 12-month average (seasonal-adjusted)

### Risk Thresholds

| Threshold | Range | Interpretation |
|-----------|-------|----------------|
| 🟢 Green | > 0 | Imports stable or increasing |
| 🟡 Yellow | -20 ≤ Yellow ≤ 0 | Moderate import decline |
| 🔴 Red | ≤ -20 | Significant import reduction |
| 🟥 Red Node | ≤ -80 | Critical import shortage |

### Update Frequency
**Monthly** - Updated when Israel Customs DataGov publishes new data

### Interpretation Guide
- **Declining imports** directly affect Israeli supply availability
- **Sudden drops** require immediate investigation
- **Seasonal patterns** exist for agricultural commodities
- **Source country analysis** available in detailed Israel Imports dashboard

---

## Using the KPIs Dashboard

### Best Practices

1. **Daily Review** - Check the dashboard daily for any red or red-node indicators
2. **Trend Analysis** - Monitor changes over time, not just absolute values
3. **Multiple Dimensions** - Consider all six KPIs together for comprehensive risk assessment
4. **Drill-Down** - Click on any KPI to access detailed dashboard for that dimension
5. **Context is Key** - Understand seasonal patterns and expected variations

### Workflow Example

```
Daily Morning Routine:
1. Open KPIs Dashboard
2. Scan for any Red or Red Node indicators
3. Review Yellow indicators for trend direction
4. For concerning KPIs:
   - Click through to detailed dashboard
   - Review underlying data and trends
   - Check related news or reports
   - Assess need for action or further analysis
5. Document significant findings
6. Alert relevant stakeholders if needed
```

### Alert Configuration

KPIs can be configured to send automatic alerts when:
- Any KPI enters Red or Red Node status
- Multiple KPIs show deteriorating trends simultaneously
- A specific commodity exceeds threshold in any dimension
- Week-over-week or month-over-month changes exceed defined rates

Contact your system administrator to configure custom alerts.

---

## Data Quality Considerations

### Reliability
All KPIs are calculated from authoritative data sources, but users should be aware of:

- **Data lag**: Some indicators (exports, supply/demand) have 1-3 month reporting delays
- **Revisions**: Historical data may be updated when sources publish revisions
- **Coverage gaps**: UN Comtrade data availability varies by country and time period
- **Methodology changes**: Source agencies occasionally update calculation methods

### Validation
SCAR performs automatic data quality checks:
- ✓ Outlier detection and flagging
- ✓ Consistency checks across related indicators
- ✓ Missing data identification
- ✓ Trend break detection

Any data quality issues are flagged with warning symbols on the dashboard.

---

## Commodity Coverage

The KPIs Dashboard tracks the following commodity categories:

**Agricultural:**
- Grains: Wheat, Corn, Rice, Barley, Oats
- Oilseeds: Soybeans, Sunflower Oil, Rapeseed, Canola
- Other: Sugar

**Energy:**
- Crude Oil, Brent Crude
- Refined Products: Gasoline, Diesel, Jet Fuel, Propane
- Natural Gas
- LPG (Liquefied Petroleum Gas)

**Industrial:**
- Fertilizers: Urea
- Indices: CRB Commodity Index

---

## Related Dashboards

For detailed analysis of specific KPI dimensions:

- [News Analysis Dashboard](news.en.md) - Deep dive into news sentiment and events
- [Commodity Prices Dashboard](commodity_prices.en.md) - Detailed price charts and forecasts
- [Transport Prices Dashboard](transport_prices.en.md) - Freight index analysis
- [Supply & Demand Dashboard](supply_demand.en.md) - Production and consumption details
- [Worldwide Exports Dashboard](worldwide_exports.en.md) - Global trade flow analysis
- [Israel Imports Dashboard](israel_imports.en.md) - Israeli import details by source

---

*Last Updated: December 2025*

