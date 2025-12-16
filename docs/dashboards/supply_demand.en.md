# Supply & Demand Dashboard

## Overview

The **Supply & Demand Dashboard** provides a detailed overview and analysis of global commodity production and consumption, helping stakeholders balance resources, anticipate market fluctuations, and strategically plan inventory levels.

!!! info "Dashboard Purpose"
    This dashboard tracks the fundamental balance between commodity supply (production + stocks + imports) and demand (consumption + exports) to identify potential shortages, surpluses, and market imbalances that drive price movements and availability risks.

---

## Dashboard Components

### Production by Country Map

**Visualization Type:** Interactive choropleth (color-shaded) world map

**Description:** Visualizes global commodity production volumes by country in 1000 Metric Tons (MT). Darker shades indicate higher production, enabling users to quickly identify leading commodity producers and geographical production trends.

**Color Scale:**
- **Light colors** - Low production volumes
- **Medium colors** - Moderate production
- **Dark colors** - High production volumes
- **No data** - Countries without reported production for selected commodity

**Interactive Features:**
- **Hover tooltips** - View exact production volumes
- **Click for details** - Access country-specific production data
- **Commodity selector** - Switch between different commodities
- **Time slider** - View historical production patterns

!!! warning "EU Data Note"
    **Important:** Production volumes for EU member states are not displayed individually on this map because they are reported in aggregate by USDA. For detailed information on EU production, refer to the Supply pane and tables below.

**How to Use:**
1. **Identify key producers** - Quickly spot major production countries
2. **Geographic diversification** - Assess concentration risks
3. **Regional patterns** - Identify production clusters
4. **Year-over-year comparison** - Track shifting production geography

---

### Commodity Total Supply by Date Heat Map

**Visualization Type:** Time-series heat map

**Description:** A heat map representing the monthly amount of commodity total supply over time. Users can select a country to observe patterns, trends, and seasonal variations, gaining insights into periods of surplus or deficit in supply of each commodity.

**Metric Calculation:**
```
Total Supply = Production + Beginning Stocks + Imports
(Measured in 1000 MT)
```

**Color Coding:**
- **Blue/cool colors** - Lower supply levels
- **Yellow/warm colors** - Medium supply levels
- **Red/hot colors** - Higher supply levels
- **White/missing** - No data available

**Features:**
- **Country filter** - View supply patterns for specific countries
- **Time range selector** - Focus on specific periods
- **Seasonal pattern identification** - Spot harvest cycles and trends
- **Year-over-year comparison** - Compare same months across years

**Interpretation:**
- **Consistent color patterns** - Stable supply
- **Darkening over time** - Supply accumulation
- **Lightening over time** - Supply depletion
- **Irregular patterns** - Market volatility or data quality issues

---

### Outlook Changes Table

**Description:** Captures significant changes and events impacting commodity markets, providing qualitative context for quantitative data.

**Columns:**

| Column | Description |
|--------|-------------|
| **Date** | Timeframe or month when the change was reported |
| **Commodity** | Commodity category affected (e.g., Wheat, Corn, Crude Oil) |
| **Country** | Country or region impacted by the change |
| **Change Type** | Nature of the event (Production, Import, Export, Consumption, Stock) |
| **Outlook** | Expert narrative describing the cause and implications of the change |

**Change Types:**
- **Production** - Changes in output volumes
- **Import** - Changes in import volumes or policies
- **Export** - Changes in export volumes or restrictions
- **Consumption** - Changes in domestic demand
- **Stock** - Changes in inventory levels

**Example Outlook Entries:**
- "Drought conditions reduced wheat production by 15% compared to previous estimate"
- "New export restrictions implemented due to domestic food security concerns"
- "Increased industrial demand drove higher consumption of crude oil"

**How to Use:**
1. **Filter by commodity** - Focus on strategic commodities
2. **Review recent outlooks** - Understand current market drivers
3. **Track recurring issues** - Identify persistent problems (e.g., weather patterns)
4. **Connect to data** - Link qualitative outlooks to quantitative changes
5. **Briefing material** - Extract key narratives for stakeholder reports

---

### Supply Changes Table

**Description:** Detailed table of commodity supply changes by country and sub-commodity, providing granular visibility into market dynamics.

**Columns:**

| Column | Description |
|--------|-------------|
| **Commodity** | Commodity name and sub-category |
| **Country** | Producing country or region |
| **Current Supply** | Latest reported supply volume (1000 MT) |
| **Volume Change** | Absolute change from previous period (1000 MT) |
| **Percentage Change** | Percentage change from previous period (%) |

**Visual Indicators:**
- **Red gradient** - Significant supply drop (gradient: -300 to -1500 thousand MT)
- **Neutral** - Minor changes or increases
- **Suppressed values** - Changes > 10,000% not shown (data quality issue)

**Metric Notes:**
- **Agricultural commodities** - Measured in 1000 MT (metric tons)
- **Energy commodities** - Measured in TBPD (thousand barrels per day)

**Sorting and Filtering:**
- Sort by percentage change to identify largest drops/increases
- Filter by country to assess specific supplier risks
- Group by commodity to compare sub-categories

**Interpretation:**
- **Large negative changes** - Potential supply disruptions requiring investigation
- **Widespread negative changes** - Systemic issues (weather, disease, policy)
- **Isolated negative changes** - Country-specific problems
- **Positive changes** - Supply recovery or production expansion

---

### Demand Changes Table

**Description:** Provides an analysis of commodity demand changes by country and sub-commodity, detailing consumption patterns and trends.

**Columns:**

| Column | Description |
|--------|-------------|
| **Commodity** | Commodity name and sub-category |
| **Country** | Consuming country or region |
| **Current Demand** | Latest reported consumption volume (1000 MT) |
| **Volume Change** | Absolute change from previous period (1000 MT) |
| **Percentage Change** | Percentage change from previous period (%) |

**Visual Indicators:**
- **Red gradient** - Significant demand growth (gradient: 100 to 1000 thousand MT)
- **Neutral** - Minor changes or decreases
- **Suppressed values** - Changes > 10,000% not shown (data quality issue)

**Use Cases:**
1. **Demand surge identification** - Spot rapidly growing markets
2. **Consumption trends** - Track long-term demand patterns
3. **Market balancing** - Compare supply vs. demand changes
4. **Export opportunities** - Identify growing consumption markets

**Interpretation:**
- **Large positive changes** - Growing demand requiring additional supply
- **Negative changes** - Demand reduction (economic slowdown, substitution)
- **Mismatches** - When supply and demand move in opposite directions, expect price volatility

---

## Data Sources

### US Department of Agriculture (USDA)
**Coverage:**
- Global production estimates
- Consumption data
- Stock levels
- Import/export flows
- Agricultural commodities: grains, oilseeds, sugar

**Update Frequency:** Monthly (typically mid-month)

**Reports:**
- World Agricultural Supply and Demand Estimates (WASDE)
- Production, Supply and Distribution (PSD) database

### Joint Organisations Data Initiative (JODI)
**Coverage:**
- Energy production and consumption
- Crude oil and refined products
- Natural gas
- Global energy statistics

**Update Frequency:** Monthly (2-month lag typical)

**Geographic Coverage:** 100+ countries representing ~90% of global oil market

---

## Update Schedule and Data Lag

### Update Frequency
**Monthly** - Data updates when USDA and JODI publish new reports

**Special Note:**
- **Sugar data** - Updated every 6 months (November and May)
- **Final estimates** - May be revised in subsequent months as better data becomes available

### Data Lag
- **Most recent data** - Typically 1-2 months behind current date
- **Preliminary estimates** - Subject to revision
- **Historical revisions** - Past data may be updated retroactively

!!! note "Data Timeliness"
    Supply and demand data has inherent reporting delays. This dashboard provides the most current official estimates, but real-time market conditions may differ. Cross-reference with price movements and news for complete picture.

---

## Using the Supply & Demand Dashboard

### Analysis Workflow

```
1. Market Overview:
   - Review Production Map for geographic concentration
   - Check Supply Heat Map for current supply status
   - Scan Outlook Changes for recent events

2. Risk Assessment:
   - Identify commodities with declining supply (Supply Changes)
   - Check if demand is increasing simultaneously (Demand Changes)
   - Calculate supply-demand balance:
     Tight Market = Supply ↓ + Demand ↑
     Loose Market = Supply ↑ + Demand ↓

3. Country-Specific Analysis:
   - Filter tables by key supplier countries
   - Assess diversification of supply sources
   - Identify single-country dependencies

4. Seasonal Pattern Recognition:
   - Use Heat Map to identify harvest seasons
   - Plan procurement around production cycles
   - Anticipate seasonal price movements

5. Forecasting and Planning:
   - Project future supply based on current trends
   - Adjust inventory targets based on supply outlook
   - Diversify sources if supply concentration is high
```

### Alert Configuration

Configure alerts for:
- ⚠️ Supply decreases exceeding 10% month-over-month
- ⚠️ Demand increases exceeding 15% in major consuming countries
- ⚠️ Combined supply decrease + demand increase in same commodity
- ⚠️ Major producer (>20% global share) shows supply disruption
- ⚠️ New outlook changes for strategic commodities

Contact your system administrator to set up custom supply/demand alerts.

---

## Integration with Other Dashboards

### Cross-Reference Matrix

| Supply/Demand Signal | Check Dashboard | Look For |
|---------------------|-----------------|----------|
| Supply decrease | Commodity Prices | Price increase confirmation |
| Supply decrease | News | Production disruption stories |
| Demand increase | Worldwide Exports | Export flow increases |
| Supply surplus | Commodity Prices | Price decrease |
| Geographic concentration | Worldwide Exports | Trade flow verification |

**Workflow:** Use supply/demand fundamentals to explain and predict price movements observed in other dashboards.

---

## Key Concepts and Definitions

### Supply Components
- **Production** - New output in current period
- **Beginning Stocks** - Inventory carried over from previous period
- **Imports** - Commodities brought into country/region

### Demand Components
- **Consumption** - Domestic use (food, feed, industrial)
- **Exports** - Commodities sent out of country/region
- **Ending Stocks** - Inventory remaining at period end

### Stock-to-Use Ratio
```
Stock-to-Use Ratio = (Ending Stocks / Total Use) × 100
```
**Interpretation:**
- **< 15%** - Very tight market, high price risk
- **15-25%** - Normal range for most commodities
- **> 25%** - Comfortable supply cushion

### Supply-Demand Balance
```
Balance = Total Supply - Total Demand
```
- **Positive balance** - Surplus (stocks accumulating)
- **Negative balance** - Deficit (stocks depleting)
- **Zero balance** - Equilibrium (rare in practice)

---

## Glossary of Supply & Demand Terms

**1000 MT** - Thousand metric tons (1,000,000 kilograms)

**TBPD** - Thousand barrels per day (energy commodity measure)

**Carryover Stocks** - Inventory held from previous production cycle

**Crush** - Processing of oilseeds into meal and oil

**Feed Use** - Commodity consumption as animal feed

**Food Use** - Commodity consumption for human consumption

**Industrial Use** - Non-food consumption (e.g., ethanol production from corn)

**Production Year** - Varies by commodity (e.g., Oct-Sep for wheat, Jan-Dec for oil)

---

## Limitations and Considerations

### Data Quality
- **Estimates, not actuals** - Based on surveys, models, and reported data
- **Revisions** - Data frequently revised as better information becomes available
- **Country-level accuracy** - Varies by reporting infrastructure
- **Private stocks** - Difficult to measure accurately (especially in some countries)

### Market vs. Statistics
- **Lag** - Market prices react before data is published
- **Unreported factors** - Quality variations, logistics issues not captured
- **Speculation** - Financial markets may not align with physical fundamentals

### Interpretation Caution
- **Context matters** - 10% supply drop of small producer vs. large producer
- **Baseline effects** - Percentage changes can be misleading with very low baselines
- **Quality factors** - Not all production is equal (e.g., protein content of wheat)

---

## Related Dashboards

- [KPIs Dashboard](kpis.en.md) - Supply & Demand Score calculation
- [Commodity Prices Dashboard](commodity_prices.en.md) - Price reactions to supply/demand changes
- [News Dashboard](news.en.md) - Production and supply event news
- [Worldwide Exports Dashboard](worldwide_exports.en.md) - Trade flow verification

---

*Last Updated: December 2025*

