# Commodity Prices Dashboard

## Overview

The **Commodity Prices Dashboard** provides comprehensive insights into the trends and forecasts of key commodities globally, aiding stakeholders in making informed decisions about supply chain risks and opportunities.

!!! info "Dashboard Purpose"
    This dashboard tracks futures market prices for strategic commodities, providing real-time price movements, expert forecasts, and analytical commentary to support inventory planning, procurement decisions, and risk assessment.

---

## Dashboard Components

### Futures Prices Chart

**Chart Type:** Multi-line time-series chart

**Description:** Displays historical price trends over time for essential commodities. Each commodity is represented with a distinct color line, allowing for easy comparison and trend analysis.

**Time Range:** Typically displays 12-24 months of historical data

**Key Features:**
- **Interactive hover** - View exact prices and dates
- **Zoom capability** - Focus on specific time periods
- **Toggle commodities** - Show/hide specific commodities
- **Export data** - Download price data for analysis

---

### Price Scaling Information

!!! warning "Important: Price Rescaling"
    Some commodity prices have been rescaled for visual comparison purposes. When interpreting absolute values, refer to the scaling factors below:

| Commodity | Unit | Scaling Factor | Display Calculation |
|-----------|------|----------------|---------------------|
| **Sunflower Oil** | INR/10 kg | ÷ 2 | (INR/10 kg) / 2 |
| **Soybeans** | bushel/kg | ÷ 2.1772 | (bushel/kg) / 2.1772 |
| **Rapeseed** | EUR/T | No scaling | EUR/T |
| **Canola** | CAD/T | No scaling | CAD/T |
| **Wheat** | bushel/kg | No scaling | bushel/kg |
| **Rice** | USD/cwt | × 10 | (USD/cwt) × 10 |
| **Sugar** | SB1:COM | × 10 | (SB1:COM) × 10 |
| **Oats** | O 1:COM | × 1 | O 1:COM |
| **Barley** | INR/T | ÷ 10 | (INR/T) / 10 |
| **Corn** | bushel/kg | No scaling | bushel/kg |
| **CRB Commodity Index** | Index points | No scaling | Index points |
| **Crude Oil** | USD/Bbl | × 2 | (USD/Bbl) × 2 |
| **Brent Crude Oil** | USD/Bbl | × 2 | (USD/Bbl) × 2 |
| **Gasoline** | USD/Gal | × 50 | (USD/Gal) × 50 |
| **Propane** | USD/Gal | × 100 | (USD/Gal) × 100 |
| **Jet Fuel** | USD/Gal | × 100 | Scaled with two indexes × 100 |
| **Diesel** | Combined | N/A | Combination of two indexes |

**Special Notes:**
- **Jet Fuel**: U.S. Gulf Coast per gallon prices
- **Diesel**: Combination of "US Diesel Sales Price" and "Euro Area Harmonised Index of Consumer Prices: Diesel", updated weekly

---

### Futures Prices Forecast Table

**Description:** Provides forecasted percentage changes for commodities across the next 4 end-of-quarter dates, enabling proactive planning and risk management.

**Columns:**
- **Commodity** - Commodity name
- **Current Price** - Latest available futures price
- **Q1 End Forecast** - Projected price change by end of Q1
- **Q2 End Forecast** - Projected price change by end of Q2
- **Q3 End Forecast** - Projected price change by end of Q3
- **Q4 End Forecast** - Projected price change by end of Q4

**Arrows Indicators:**
- ⬆️ **Upward arrow** - Forecasted price increase
- ⬇️ **Downward arrow** - Forecasted price decrease
- ➡️ **Horizontal arrow** - Stable/minimal change

**Forecast Methodology:**
Trading Economics forecasts are built using a proprietary global macro model that takes into account:
- Analysts' expert expectations
- Correlations between countries and markets
- Logical relationships between different economic indicators
- Historical patterns and seasonal factors
- Supply and demand fundamentals

**How to Use:**
1. **Identify trends** - Look for consistent up/down patterns across quarters
2. **Plan procurement** - Time purchases based on expected price movements
3. **Assess risk** - Large forecasted changes indicate higher uncertainty
4. **Compare commodities** - Identify relative winners and losers

!!! note "Forecast Limitations"
    Forecasts are predictive models based on current information and assumptions. Actual prices may vary due to unforeseen events, policy changes, or market shocks.

---

### Happening Now (Week-over-Week) Panel

**Description:** Highlights immediate price changes occurring within the current week versus the previous week, pinpointing commodities with notable increases or decreases.

**Calculation:**
```
WoW Price Change % = (Average Price This Week / Average Price Last Week - 1) × 100
```

**Display Format:**
- **Top Gainers** - Commodities with largest week-over-week price increases
- **Top Losers** - Commodities with largest week-over-week price decreases
- **Percentage change** - Magnitude of movement
- **Visual indicators** - Color-coded by magnitude

**Interpretation:**
- **Large increases** (>5%) - Potential supply concerns or demand surge
- **Large decreases** (>5%) - Potential oversupply or demand reduction
- **Volatility** - Rapid changes indicate market uncertainty
- **Trend confirmation** - Compare to longer-term trends for context

**Update Frequency:** Daily at market close

---

### Expert Price Analysis Section

**Description:** Expert analysis by Trading Economics analysts delivers detailed commentary and insights for each commodity, discussing underlying reasons for recent price fluctuations and historical context. This qualitative assessment complements the quantitative data, enabling deeper understanding and better-informed decision-making.

**Analysis Components:**
- **Recent movements** - Explanation of current price trends
- **Driving factors** - Supply/demand fundamentals, weather, policy changes
- **Market sentiment** - Trader and analyst perspectives
- **Historical context** - Comparison to past patterns
- **Outlook** - Short to medium-term expectations
- **Risk factors** - Potential disruptions or uncertainties

**How to Use:**
1. **Read analysis for your key commodities** - Focus on strategic items
2. **Cross-reference with price charts** - Verify analysis against data
3. **Note risk factors** - Identify potential future issues
4. **Document insights** - Save key points for briefings
5. **Combine with news** - Connect analysis to recent events

---

## CRB Commodity Index

### What is the CRB Index?

The **CRB Index** (Commodity Research Bureau Index) is a broad measure of commodity market performance, calculated using an arithmetic average of commodity futures prices with monthly rebalancing.

### Index Composition

The index consists of **19 commodities** sorted into 4 groups with different weightings:

| Sector | Weight | Commodities Included |
|--------|--------|---------------------|
| **Energy** | 39% | Crude Oil, Heating Oil, Natural Gas, RBOB Gasoline |
| **Agriculture** | 41% | Corn, Soybeans, Wheat, Cotton, Sugar, Orange Juice, Coffee, Cocoa, Live Cattle, Lean Hogs |
| **Precious Metals** | 7% | Gold, Silver |
| **Base/Industrial Metals** | 13% | Aluminum, Copper, Nickel |

### Why the CRB Index Matters

- **Broad market indicator** - Reflects overall commodity market health
- **Inflation signal** - Rising CRB suggests inflationary pressures
- **Economic activity** - Correlates with global economic growth
- **Diversification benchmark** - Compares individual commodities to market

### Interpretation

- **Rising CRB** - General commodity price increases, potential supply chain pressures
- **Declining CRB** - Weakening commodity prices, possible demand concerns
- **Divergence** - When specific commodities move opposite to CRB, indicates unique factors

---

## Data Sources and Update Schedule

### Trading Economics
**Coverage:**
- Futures prices for all tracked commodities
- Expert forecasts and analysis
- Week-over-week price changes
- Market commentary

**Update Frequency:** Daily at market close

**Data Quality:** Direct from major commodity exchanges (CME, ICE, NYMEX, etc.)

---

## Using the Commodity Prices Dashboard

### Daily Workflow

```
1. Morning Review:
   - Check "Happening Now" panel for overnight movements
   - Note any commodities with >5% WoW changes
   - Review CRB Index trend

2. Detailed Analysis:
   - For flagged commodities, review price charts
   - Read expert analysis for context
   - Check news dashboard for related events

3. Forecast Review (Weekly):
   - Review quarterly forecasts for strategic commodities
   - Compare forecast trends to current movements
   - Update procurement plans if forecasts changed

4. Documentation:
   - Note significant price movements
   - Document expert analysis key points
   - Alert stakeholders to critical changes
```

### Alert Configuration

Configure alerts for:
- ⚠️ Week-over-week price changes exceeding ±10%
- ⚠️ Prices crossing predefined thresholds (high/low)
- ⚠️ Forecast changes indicating trend reversals
- ⚠️ CRB Index movements exceeding ±5% weekly
- ⚠️ Specific commodities entering extreme volatility

Contact your system administrator to set up custom price alerts.

---

## Integration with Other Dashboards

### Cross-Reference Matrix

| Price Signal | Check Dashboard | Look For |
|--------------|-----------------|----------|
| Sharp price increase | News | Supply disruption, production drop news |
| Price decrease | Supply & Demand | Supply increase or demand decrease |
| High volatility | Transport Prices | Shipping cost impacts |
| Forecast change | Worldwide Exports | Trade flow shifts |

**Workflow:** Use price movements as triggers to investigate underlying causes in other dashboards.

---

## Glossary of Price Terms

**Futures Price** - Contract price for commodity delivery at a specified future date

**WoW (Week-over-Week)** - Comparison of current week to previous week

**Spot Price** - Current market price for immediate delivery (not shown in this dashboard)

**Contango** - When future prices are higher than current prices (normal for storable commodities)

**Backwardation** - When future prices are lower than current prices (indicates tight supply)

**Volatility** - Measure of price fluctuation intensity

**Basis** - Difference between spot price and futures price

---

## Limitations and Considerations

### Futures vs. Physical Prices
- **Futures prices** represent expectations, not actual transaction prices
- **Physical market** conditions may differ from futures markets
- **Delivery locations** vary by contract specifications

### Currency Considerations
- Prices shown in original contract currencies
- Exchange rate fluctuations affect purchasing power
- Israeli Shekel conversions not shown (calculate separately)

### Contract Specifications
- Different contracts have different delivery months
- Quality specifications vary by contract
- Transportation and storage costs not included

---

## Related Dashboards

- [KPIs Dashboard](kpis.en.md) - Commodity Price Score calculation
- [News Dashboard](news.en.md) - Events driving price movements
- [Supply & Demand Dashboard](supply_demand.en.md) - Fundamental supply/demand analysis
- [Transport Prices Dashboard](transport_prices.en.md) - Shipping cost impacts

---

*Last Updated: December 2025*

