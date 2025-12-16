# Israel Imports Dashboard

## Overview

The **Israel Imports Dashboard** provides insights into commodity imports to Israel, including detailed data on import volumes by source country, commodity types, and trends over time. This dashboard is specifically focused on commodities critical to Israel's strategic needs and national security.

!!! info "Dashboard Purpose"
    This dashboard provides critical visibility into Israel's commodity import dependencies, enabling early detection of supply disruptions, identification of concentration risks, and support for strategic inventory planning and source diversification decisions.

---

## Unit Measurements

Net Weight is measured in **Kilograms** except for the following commodities:

| Commodity | Unit |
|-----------|------|
| **Urea** | Metric Ton (MT) |
| **LPG** (Liquefied Petroleum Gas) | Metric Ton (MT) |
| **Gasoline** | 1000 Liters / Cubic Meter |
| **Diesel** | 1000 Liters / Cubic Meter |

!!! note "Unit Conversion"
    When comparing data across dashboards, ensure you account for these unit differences. The system displays units clearly in all visualizations.

---

## Dashboard Components

### Global Export Market (Pie Chart)

**Visualization Type:** Pie chart with country breakdown

**Description:** Displays commodity exports **to Israel** by source country, based on Net Weight. Each exporter country is colored distinctly, and the chart illustrates their relative share (%) in Israel's import market for the selected commodity.

**Features:**
- **Interactive segments** - Click to filter other visualizations by country
- **Percentage labels** - Show each country's share of Israeli imports
- **Hover tooltips** - View exact import volumes
- **Commodity selector** - Switch between different commodities

**Strategic Interpretation:**
- **Large slices** - Heavy dependence on specific countries (concentration risk)
- **Diversified pie** - Multiple sources (resilience)
- **Changing patterns** - Shifts in trade relationships
- **Missing traditional suppliers** - Potential disruptions or policy changes

**Risk Assessment:**
- **Single source >50%** - Critical dependency risk
- **Top 3 sources >80%** - High concentration risk
- **Many small sources** - Good diversification

---

### Commodity Net Weight by Month (Line Chart)

**Visualization Type:** Multi-line time-series chart

**Description:** Illustrates trends in commodity import volumes to Israel over time, measured by Net Weight. Each line represents a commodity domain, providing visibility into consumption patterns and import trends.

**Features:**
- **Multiple commodities** - Compare trends across imports
- **Seasonal patterns** - Identify cyclical variations
- **Trend analysis** - Spot growth or decline patterns
- **Anomaly detection** - Identify unusual drops or spikes

**Interpretation for Israel:**
- **Steady lines** - Stable import patterns
- **Declining trends** - Reduced availability or shifting consumption
- **Sudden drops** - Supply disruptions requiring immediate attention
- **Seasonal peaks** - Normal pre-holiday or harvest-related increases

---

### Forecast Metric

**Display Type:** Single metric with projected value

**Description:** A summarized metric forecasting the Total Net Weight of commodity imports to Israel for a specific future month. This helps anticipate supply availability and plan inventory levels.

**Example Display:**
```
Forecasted Total Imports (March 2025): 45,250,000 kg
Change from current: -5.2%
```

**Forecast Methodology:**
- Historical import patterns
- Seasonal adjustment factors
- Recent trend analysis
- Known contract commitments

**Strategic Use:**
- **Declining forecasts** - Early warning for potential shortages
- **Increasing forecasts** - Opportunity to optimize procurement timing
- **Large deviations** - Investigate underlying causes

---

### Net Weight by Exporter (Stacked Bar Chart)

**Visualization Type:** Stacked bar chart with time series

**Description:** Illustrates Net Weight imported to Israel by source country over time. Each segment within the bars is colored to represent individual exporting countries, visually displaying how each country's contributions to Israeli imports change monthly.

**Features:**
- **Country-specific colors** - Consistent color coding per source
- **Stacked segments** - Shows individual and total contributions
- **Time progression** - Track changes month by month
- **Interactive legend** - Click to show/hide specific countries

**Strategic Analysis:**
- **Dominant segments** - Key suppliers requiring relationship management
- **Disappearing segments** - Lost supply sources (investigate causes)
- **New segments** - Emerging suppliers (evaluate reliability)
- **Segment variability** - Unstable supply sources

---

### Net Weight Imports Month-over-Month

**Display Type:** Metric panel with percentage change

**Description:** Displays the percentage increase or decrease in total Net Weight imports to Israel month-over-month. Clearly identifies import growth or contraction, providing total Net Weight values for the two most recent months.

**Example Display:**
```
Month-over-Month Change: -18.5% ⬇️

Current Month (November 2024): 38,450,000 kg
Previous Month (October 2024): 47,180,000 kg
Absolute Change: -8,730,000 kg
```

**Alert Thresholds:**
- **>20% decrease** - Critical alert (potential shortage risk)
- **10-20% decrease** - High alert (investigation required)
- **<10% change** - Normal variation
- **Significant increase** - Verify against consumption forecasts

---

### Top & Bottom Import Changes

**Display Type:** Ranked lists with country and commodity details

**Description:** Highlights source countries with the most significant **quarter-over-quarter** changes in import volumes to Israel.

!!! note "Reporting Period"
    Unlike the Worldwide Exports dashboard which uses month-over-month comparisons, this section uses **quarter-over-quarter** changes to smooth out monthly volatility and identify more significant trends.

#### Top Total Import Increases
Lists countries with the largest quarter-over-quarter **increases** in export volumes to Israel.

**Columns:**
- **Country** - Source country name
- **Commodity** - Commodity imported
- **Current Volume** - Latest quarter import volume
- **Volume Change** - Absolute increase
- **Percentage Change** - Relative increase (%)

**Interpretation:**
- **New or growing suppliers** - Diversification opportunities
- **Seasonal increases** - Expected patterns (verify timing)
- **Substitution** - Replacing reduced suppliers

#### Bottom Total Import Decreases
Lists countries with the largest quarter-over-quarter **decreases** in export volumes to Israel.

**Columns:**
- Same as Top Increases section

**Critical Interpretation:**
- **Large decreases from major suppliers** - Immediate risk assessment required
- **Multiple commodity decreases** - Systemic country issues affecting Israel
- **Geopolitical factors** - Trade barriers, sanctions, policy shifts
- **Logistical issues** - Shipping disruptions, route changes

**Immediate Actions for Significant Decreases:**
1. **Verify root cause** - Contact importers/traders for explanation
2. **Check alternatives** - Review alternative suppliers in pie chart
3. **Assess inventory** - Evaluate current stock levels
4. **Escalate if needed** - Alert decision-makers for strategic commodities

---

## Data Sources

### Israel Customs DataGov
**Coverage:**
- All official imports to Israel
- Detailed HS code classifications
- Source country information
- Monthly import statistics

**Update Frequency:** Monthly (typically mid-month for previous month)

**Data Quality:** High reliability (official customs data)

**Data Link:** [data.gov.il](https://data.gov.il)

---

## Update Schedule

**Publication:** Monthly

**Data Lag:** 1-2 months typical
- **Example:** October import data typically available mid-November to early December
- **Preliminary data:** Usually final (customs data is transactional)
- **Revisions:** Rare, typically only for corrections

**Dashboard Updates:** Within 24 hours of Israel Customs DataGov publication

---

## Using the Israel Imports Dashboard

### Daily Monitoring Workflow

```
1. Morning Check:
   - Review Month-over-Month Change metric
   - If decrease >10%, investigate immediately
   - Check Top & Bottom Changes for concerning patterns

2. Source Country Analysis:
   - Review pie chart for concentration risks
   - Examine stacked bar chart for supplier stability
   - Identify any countries with declining contributions

3. Commodity-Specific Review:
   - Filter to strategic commodities
   - Check line chart for unusual patterns
   - Compare to consumption forecasts

4. Risk Assessment:
   - Identify single points of failure (>50% from one source)
   - Note geopolitical risks in source countries
   - Check News Dashboard for disruption events

5. Action Items:
   - Document significant changes
   - Alert procurement teams to supply risks
   - Update contingency plans for critical commodities
```

### Monthly Strategic Review

```
1. Trend Analysis:
   - Review 6-month trends for each strategic commodity
   - Identify persistent declining sources
   - Evaluate effectiveness of diversification efforts

2. Supplier Concentration Assessment:
   - Calculate Herfindahl-Hirschman Index for key commodities
   - Identify commodities requiring diversification
   - Develop alternative source strategies

3. Forecast Validation:
   - Compare actual imports to forecasts
   - Adjust forecast models for accuracy
   - Update procurement plans based on forecast changes

4. Contingency Planning:
   - Identify commodities at risk
   - Verify alternative suppliers are viable
   - Ensure adequate strategic reserves
```

### Alert Configuration

Configure alerts for:
- ⚠️ Total imports decline >15% month-over-month
- ⚠️ Strategic commodity imports decline >20% for any commodity
- ⚠️ Single source country >60% for critical commodities
- ⚠️ Major supplier (>30% share) shows >25% decline quarter-over-quarter
- ⚠️ Multiple commodities show simultaneous declines from same country
- ⚠️ Forecast indicates >20% decrease for strategic commodity

Contact your system administrator to set up custom Israel import alerts.

---

## Integration with Other Dashboards

### Cross-Reference Matrix

| Import Signal | Check Dashboard | Look For |
|---------------|-----------------|----------|
| Import decline | Worldwide Exports | Global export decline confirmation |
| Import decline | News | Trade barriers, geopolitical events, logistics disruptions |
| Source concentration | Worldwide Exports | Alternative exporters available globally |
| Price increase | Commodity Prices | Supply constraints driving costs |
| Single-source risk | Supply & Demand | Production concentration in source country |

**Workflow:** Use Israel Imports as the primary early warning system for supply risks directly affecting Israeli strategic reserves and economic security.

---

## Strategic Commodities

The following commodities are tracked as strategically critical:

### Food Security
- **Grains:** Wheat, Corn, Rice, Barley
- **Oils:** Sunflower Oil, Canola Oil, Soybean Oil
- **Protein:** Soybeans (animal feed)
- **Sugar**

### Energy Security
- **Crude Oil** (processed domestically or regionally)
- **Diesel** (transportation, agriculture, emergency services)
- **Gasoline** (transportation)
- **Jet Fuel** (aviation)
- **LPG** (heating, cooking)
- **Propane**

### Agricultural Inputs
- **Urea** (fertilizer - critical for food production)

---

## Glossary of Import Terms

**Net Weight** - Weight of commodity excluding packaging

**Source Country** - Country from which commodity is imported (may differ from origin)

**HS Code** - Harmonized System code (international commodity classification)

**Quarter-over-Quarter (QoQ)** - Comparison to previous quarter (3 months)

**Month-over-Month (MoM)** - Comparison to previous month

**Import Volume** - Quantity of commodity brought into Israel

**Concentration Risk** - Risk from over-dependence on few suppliers

**Strategic Reserve** - Stockpile maintained for emergency situations

---

## Limitations and Considerations

### Data Scope
- **Customs data only** - Does not include domestic production
- **Official imports** - May not capture informal/grey market
- **Classification accuracy** - Relies on importer declarations

### Interpretation Considerations
- **Transit vs. Origin** - Source country may be transit point, not producer
- **Re-exports** - Some imports may be re-exported (not consumed domestically)
- **Timing** - Import does not equal immediate consumption
- **Commercial sensitivity** - Some traders may be sensitive to public data

### Policy Factors
- **Trade agreements** - Preferential treatment affects source choices
- **Tariffs and duties** - Economic factors influence sourcing
- **Security considerations** - Strategic relationships affect suppliers
- **Quality standards** - Israeli standards may limit supplier options

---

## Related Dashboards

- [KPIs Dashboard](kpis.en.md) - Israel Imports Score calculation
- [Worldwide Exports Dashboard](worldwide_exports.en.md) - Global supply availability
- [Commodity Prices Dashboard](commodity_prices.en.md) - Cost implications
- [Supply & Demand Dashboard](supply_demand.en.md) - Global production trends
- [News Dashboard](news.en.md) - Events affecting suppliers

---

## Emergency Response Procedures

### In Case of Significant Import Disruption:

1. **Immediate Assessment (within 1 hour)**
   - Determine affected commodities and volumes
   - Check current strategic reserve levels
   - Identify timeline to potential shortage

2. **Source Analysis (within 4 hours)**
   - Review alternative suppliers in pie chart
   - Contact importers for immediate availability
   - Check global exports dashboard for overall supply

3. **Stakeholder Notification (within 8 hours)**
   - Alert relevant government ministries
   - Notify affected industries
   - Prepare public communication if needed

4. **Contingency Activation (within 24 hours)**
   - Activate alternative supply contracts
   - Consider strategic reserve release if appropriate
   - Implement demand management measures if necessary

5. **Ongoing Monitoring**
   - Daily dashboard reviews until resolved
   - Regular stakeholder updates
   - Document lessons learned

---

*Last Updated: December 2025*

*For emergency supply chain issues, contact the National Emergency Authority Operations Center.*

