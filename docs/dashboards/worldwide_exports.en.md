# Worldwide Exports Dashboard

## Overview

The **Worldwide Exports Dashboard** provides insights into global commodity export activities, including detailed data on export volumes by country, commodity domains, and trends over time. All measurements are in **Net Weight (Kilograms)** unless otherwise specified.

!!! info "Dashboard Purpose"
    This dashboard tracks international trade flows to identify supply source shifts, trade disruptions, and emerging market trends that affect commodity availability and pricing for Israel and globally.

---

## Dashboard Components

### Global Export Market (Pie Chart)

**Visualization Type:** Pie chart with country breakdown

**Description:** Displays commodity exports by country, based on Net Weight. Each exporter country is colored distinctly, and the chart illustrates their relative share (%) in the global export market for the selected commodity.

**Features:**
- **Interactive segments** - Click to filter other visualizations by country
- **Percentage labels** - Show each country's market share
- **Hover tooltips** - View exact export volumes
- **Commodity selector** - Switch between different commodities

**Interpretation:**
- **Large slices** - Dominant exporters (concentration risk)
- **Many small slices** - Diversified supply sources (lower risk)
- **Changing sizes over time** - Shifting trade patterns

**Use Cases:**
1. **Identify key suppliers** - Spot major export sources
2. **Assess concentration risk** - Evaluate dependency on few countries
3. **Market share analysis** - Track competitive positioning
4. **Diversification planning** - Identify alternative sources

---

### Commodity Net Weight by Month (Line Chart)

**Visualization Type:** Multi-line time-series chart

**Description:** Illustrates trends in commodity export volumes over time, measured by Net Weight. Each line represents a commodity domain, providing visibility into fluctuations and trends.

**Time Range:** Typically displays March 2023 through December 2024 (21 months)

**Features:**
- **Multiple commodities** - Compare trends across commodities
- **Seasonal patterns** - Identify cyclical variations
- **Trend analysis** - Spot growth or decline patterns
- **Zoom and pan** - Focus on specific time periods

**Interpretation:**
- **Upward trends** - Growing export volumes
- **Downward trends** - Declining exports (supply issues or demand shifts)
- **Seasonal cycles** - Normal harvest/production patterns
- **Sudden changes** - Disruptions, policy changes, or market shocks

---

### Forecast Metric

**Display Type:** Single metric with projected value

**Description:** A summarized metric forecasting the Total Net Weight of global commodity exports for a specific future month. This helps anticipate global export market trends.

**Example Display:**
```
Forecasted Total Exports (September 2025): 125,450,000 kg
Change from current: +8.3%
```

**Forecast Basis:**
- Historical trend analysis
- Seasonal adjustment factors
- Recent growth rates
- Known production forecasts

**How to Use:**
1. **Plan procurement** - Time purchases based on expected availability
2. **Assess market tightness** - Compare forecast to demand trends
3. **Risk assessment** - Large forecast decreases indicate supply concerns
4. **Budget planning** - Project costs based on anticipated volumes

!!! note "Forecast Limitation"
    Export forecasts are statistical projections based on historical patterns. Actual exports may vary due to policy changes, weather events, or economic shifts not captured in historical data.

---

### Net Weight by Exporter (Stacked Bar Chart)

**Visualization Type:** Stacked bar chart with time series

**Description:** Illustrates Net Weight exported by country over time. Each segment within the bars is colored to represent individual exporting countries, visually displaying how each country's export volume contributes to global totals monthly.

**Features:**
- **Country-specific colors** - Consistent color coding per country
- **Stacked segments** - Shows individual and total contributions
- **Time progression** - Track changes month by month
- **Interactive legend** - Click to show/hide specific countries

**Interpretation:**
- **Growing bar heights** - Increasing total exports
- **Shrinking bar heights** - Decreasing total exports
- **Segment size changes** - Market share shifts between countries
- **Missing segments** - Export disruptions from specific countries

**Analysis Tips:**
1. **Focus on major exporters** - Large segments represent key suppliers
2. **Track new entrants** - New colors appearing indicate market changes
3. **Identify disruptions** - Sudden segment disappearances
4. **Seasonal patterns** - Recurring monthly patterns in specific countries

---

### Net Weight Exports Month-over-Month

**Display Type:** Metric panel with percentage change

**Description:** Displays the percentage increase or decrease in total Net Weight exports month-over-month. Clearly identifies export growth or contraction, providing total Net Weight values for the two most recent months.

**Example Display:**
```
Month-over-Month Change: -12.3% ⬇️

Current Month (October 2024): 98,234,000 kg
Previous Month (September 2024): 112,156,000 kg
Absolute Change: -13,922,000 kg
```

**Interpretation:**
- **Positive change** - Export growth (increasing supply availability)
- **Negative change** - Export decline (potential supply concerns)
- **Large changes (>±15%)** - Significant market shifts requiring investigation
- **Stable changes (<±5%)** - Normal market fluctuations

---

### Top & Bottom Net Weight Changes

**Display Type:** Ranked lists with country details

**Description:** Highlights countries with the most significant month-over-month changes in exported Net Weight.

#### Top Total Net Weight Increases
Lists countries with the largest month-over-month **increases** in export volumes.

**Columns:**
- **Country** - Exporting country name
- **Commodity** - Commodity exported
- **Current Volume** - Latest month export volume
- **Volume Change** - Absolute increase in kilograms
- **Percentage Change** - Relative increase (%)

**Interpretation:**
- **Large increases** - Harvest seasons, new production, market entries
- **Multiple commodities** - Broad export growth from country
- **Sustained increases** - Structural export capacity expansion

#### Bottom Total Net Weight Decreases
Lists countries with the largest month-over-month **decreases** in export volumes.

**Columns:**
- Same as Top Increases section

**Interpretation:**
- **Large decreases** - Supply disruptions, policy changes, demand shifts
- **Multiple commodities** - Systemic country issues
- **Sudden decreases** - Investigate for trade barriers, disasters, conflicts

**Use Cases:**
1. **Early warning** - Identify supply disruptions from key sources
2. **Opportunity identification** - Find new/growing export markets
3. **Risk assessment** - Evaluate exposure to declining suppliers
4. **Trend confirmation** - Verify shifts seen in other visualizations

---

### UN Comtrade Data Availability by Country

**Display Type:** Data quality table

**Description:** Shows UN Comtrade data availability by country across the last 8 months. This transparency helps users assess data reliability and interpret trends with appropriate caution.

**Columns:**
- **Country** - Trading nation
- **Recent Months (8)** - Data availability indicators (✓/✗) for each month
- **Year over Year** - Ratio comparing current month's data to same month last year
- **Total Records Last Year** - Total number of reported trade records for the same month last year

**Data Quality Indicators:**
- ✓ **Green check** - Data reported for this month
- ✗ **Red cross** - Data missing for this month
- **YoY Ratio < 1.0** - Less data reported than previous year
- **YoY Ratio > 1.0** - More data reported than previous year

**Why This Matters:**
- **Missing data** - May cause underestimation of exports
- **Delayed reporting** - Some countries report with significant lag
- **Coverage changes** - Reporting improvements or deteriorations affect trends
- **KPI adjustments** - Worldwide Exports KPI adjusts for data availability changes

**How to Use:**
1. **Check key exporters** - Ensure major suppliers have consistent reporting
2. **Interpret trends cautiously** - Declining exports may reflect data gaps, not real decreases
3. **Cross-reference** - Use multiple data sources when availability is poor
4. **Report data quality** - Note data limitations in stakeholder briefings

!!! warning "Data Interpretation"
    When a country shows declining exports but also has declining data availability, the decrease may be partially or entirely due to reporting gaps rather than actual export reductions. Always check this table when investigating export declines.

---

## Data Sources

### UN Comtrade
**Coverage:**
- Global trade statistics from 190+ countries
- Detailed commodity classifications (HS codes)
- Monthly import and export data
- Trade partner information

**Update Frequency:** Monthly (typically 2-3 month reporting lag)

**Data Quality:** Varies by country reporting infrastructure

---

## Update Schedule

**Publication:** Monthly

**Data Lag:** 2-3 months typical
- **Example:** October data typically available in December or January
- **Preliminary data:** May be revised in subsequent months
- **Final data:** Usually locked after 6-12 months

**Dashboard Updates:** Within 48 hours of UN Comtrade data release

---

## Using the Worldwide Exports Dashboard

### Analysis Workflow

```
1. Market Overview:
   - Review Global Export Market pie chart for concentration
   - Check Net Weight by Month line chart for trends
   - Note Forecast Metric for anticipated changes

2. Country-Specific Analysis:
   - Examine Top & Bottom Changes for significant shifts
   - Review Net Weight by Exporter stacked bars for visual trends
   - Check Data Availability table for reliability assessment

3. Risk Identification:
   - Identify countries with declining exports
   - Assess if declines are concentrated in key suppliers
   - Cross-reference with News Dashboard for explanations
   - Verify with Supply & Demand Dashboard for production data

4. Opportunity Assessment:
   - Spot countries with growing exports
   - Evaluate new potential supply sources
   - Compare export growth to price movements

5. Reporting:
   - Document significant export changes
   - Flag data quality concerns
   - Update procurement teams on supply source changes
```

### Alert Configuration

Configure alerts for:
- ⚠️ Total exports decline >15% month-over-month
- ⚠️ Key exporter (>20% market share) shows >20% export decrease
- ⚠️ Multiple major exporters show simultaneous declines
- ⚠️ Forecast indicates >10% decrease in future exports
- ⚠️ Data availability for major exporters deteriorates significantly

Contact your system administrator to set up custom export alerts.

---

## Integration with Other Dashboards

### Cross-Reference Matrix

| Export Signal | Check Dashboard | Look For |
|---------------|-----------------|----------|
| Export decline | Supply & Demand | Production decrease confirmation |
| Export decline | News | Trade barriers, disruptions, policy changes |
| Export surge | Commodity Prices | Price decrease from increased supply |
| Country-specific change | Israel Imports | Impact on Israeli imports |
| Data availability drop | N/A | Interpret trends with caution |

**Workflow:** Use export data to verify supply availability and identify geographic risks affecting Israeli supply chains.

---

## Glossary of Trade Terms

**Net Weight** - Weight of commodity excluding packaging (measured in kilograms)

**Export Volume** - Quantity of commodity shipped out of a country

**HS Code** - Harmonized System code (international commodity classification)

**Trade Flow** - Movement of goods between countries

**Exporter Market Share** - Percentage of global exports from a specific country

**YoY (Year-over-Year)** - Comparison to same period previous year

**MoM (Month-over-Month)** - Comparison to previous month

**UN Comtrade** - United Nations Commodity Trade Statistics Database

---

## Limitations and Considerations

### Data Quality
- **Reporting delays** - 2-3 month lag is common
- **Missing data** - Not all countries report consistently
- **Revisions** - Data updated retroactively as countries submit corrections
- **Coverage gaps** - Some trade flows not captured

### Interpretation Challenges
- **Re-exports** - Some countries import then re-export (counted twice)
- **Transit trade** - Goods passing through countries may be misclassified
- **Informal trade** - Unreported cross-border transactions
- **Data quality variations** - Reliability varies significantly by country

### Methodological Notes
- **Aggregation** - EU countries reported individually and in aggregate
- **Unit conversions** - Some source data converted to kilograms
- **Classification changes** - HS code updates may affect time series comparability

---

## Related Dashboards

- [KPIs Dashboard](kpis.en.md) - Worldwide Exports Score calculation
- [Supply & Demand Dashboard](supply_demand.en.md) - Production data verification
- [Israel Imports Dashboard](israel_imports.en.md) - Import source correlation
- [News Dashboard](news.en.md) - Export disruption events

---

*Last Updated: December 2025*

