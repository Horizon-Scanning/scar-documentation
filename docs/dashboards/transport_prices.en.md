# Transport Prices Dashboard

## Overview

The **Transport Prices Dashboard** provides valuable insights into transportation cost trends and forecasts, which are crucial for logistics, supply chain management, and strategic planning. This dashboard tracks key freight indices that directly impact the cost of moving commodities globally.

!!! info "Dashboard Purpose"
    Transportation costs are a critical component of supply chain economics. This dashboard monitors shipping rates across different transport modes to identify cost pressures, capacity constraints, and logistics disruptions that may affect commodity availability and pricing.

---

## Dashboard Components

### Futures Prices Chart

**Chart Type:** Multi-line time-series chart

**Description:** Illustrates historical trends and price fluctuations for key freight indices over time.

**Tracked Indices:**

#### Baltic Dry Index (BDI)
**What it measures:** Rates for transporting dry bulk commodities such as coal, grain, iron ore, and other raw materials.

**Importance:** 
- Leading economic indicator
- Reflects global trade volumes
- Sensitive to supply-demand imbalances in shipping capacity

**Typical Range:** 500 - 2,500 points (can spike higher in tight markets)

#### Containerized Freight Index (CFI)
**What it measures:** Cost of shipping goods using container freight on major global trade routes.

**Importance:**
- Reflects manufactured goods transportation costs
- Impacts consumer goods pricing
- Indicates global trade health

**Typical Range:** Varies by route and season

**Features:**
- **Interactive hover** - View exact index values and dates
- **Zoom capability** - Focus on specific time periods
- **Comparison view** - Overlay both indices for relative analysis
- **Export data** - Download index data for external analysis

**Time Range:** Typically displays 12-24 months of historical data

---

### Commodity Transit Type Table

**Description:** Indicates which commodities are typically transported using each type of freight (Baltic Dry or Containerized Freight), helping users optimize logistics decisions and understand index relevance.

**Legend:**
- ✅ **Green check** - Typical transit method for this commodity
- ❌ **Red cross** - Commodity not commonly shipped via this method
- ➖ **Yellow line** - In some cases, this is the used transit method

**Example Matrix:**

| Commodity | Baltic Dry (Bulk) | Containerized |
|-----------|-------------------|---------------|
| **Grains** (Wheat, Corn, Rice) | ✅ | ➖ |
| **Coal** | ✅ | ❌ |
| **Iron Ore** | ✅ | ❌ |
| **Fertilizers** (Urea) | ✅ | ➖ |
| **Crude Oil** | ❌ (Tankers) | ❌ |
| **Refined Products** | ➖ | ✅ |
| **Soybeans, Oilseeds** | ✅ | ➖ |
| **Sugar** | ✅ | ➖ |
| **General Cargo** | ❌ | ✅ |

**How to Use:**
1. **Identify relevant index** - Determine which freight index affects your commodity
2. **Weight your analysis** - Commodities with multiple methods require blended assessment
3. **Route considerations** - Specific trade routes may differ from general patterns
4. **Contract specifications** - Check actual shipping contracts for precise methods

---

### Indices Forecast Table

**Description:** Presents predicted percentage changes for transportation indices across specified future dates (typically end-of-quarter projections).

**Columns:**
- **Index** - Freight index name (BDI or CFI)
- **Current Value** - Latest index reading
- **Q1 End Forecast** - Projected change by end of Q1
- **Q2 End Forecast** - Projected change by end of Q2
- **Q3 End Forecast** - Projected change by end of Q3
- **Q4 End Forecast** - Projected change by end of Q4

**Arrows Indicators:**
- ⬆️ **Upward arrow** - Forecasted index increase (higher shipping costs)
- ⬇️ **Downward arrow** - Forecasted index decrease (lower shipping costs)
- ➡️ **Horizontal arrow** - Stable/minimal change

**Forecast Methodology:**
Trading Economics forecasts are built using a proprietary global macro model that takes into account:
- Analysts' expert expectations for trade volumes
- Correlations between economic growth and shipping demand
- Fleet capacity additions and retirements
- Seasonal patterns in global trade
- Fuel cost projections
- Port infrastructure developments

**Interpretation:**
- **Rising forecasts** - Anticipate higher logistics costs, potential capacity constraints
- **Declining forecasts** - Expect reduced shipping costs, possibly indicating weak demand
- **High volatility** - Significant quarter-to-quarter changes suggest market uncertainty

!!! note "Forecast Considerations"
    Shipping markets are highly volatile and sensitive to sudden events (weather, port strikes, geopolitical disruptions). Forecasts provide direction but should be monitored frequently.

---

### Happening Now (Week-over-Week) Panel

**Description:** Highlights immediate index points change occurring within the current week versus the previous week, identifying notable increases or decreases in shipping costs.

**Calculation:**
```
WoW Index Change = (Average Index Points This Week / 
                    Average Index Points Last Week - 1) × 100
```

**Display Format:**
- **Index name** - BDI or CFI
- **Current value** - Latest index reading
- **Week-over-week change %** - Percentage change from prior week
- **Absolute points change** - Actual point movement
- **Visual indicators** - Color-coded by direction and magnitude

**Interpretation:**
- **Large increases** (>10%) - Capacity tightening, demand surge, or disruptions
- **Large decreases** (>10%) - Capacity addition, demand drop, or market normalization
- **Persistent trends** - Multi-week directional movement indicates structural changes
- **Divergence between indices** - Different dynamics in bulk vs. container markets

**Update Frequency:** Daily at market close

**Use Cases:**
- **Immediate cost assessment** - Evaluate impact on current shipments
- **Negotiation timing** - Adjust contract negotiations based on market direction
- **Urgency decisions** - Accelerate or delay shipments based on cost trends
- **Alert triggers** - Identify when to investigate underlying causes

---

### Expert Index Analysis Section

**Description:** Offers expert-driven summaries and analyses explaining recent price movements and underlying market factors for each freight index. These insights enrich the quantitative data, guiding comprehensive decision-making processes.

**Analysis Components:**

#### For Baltic Dry Index:
- **Recent movements** - Current index trends and levels
- **Supply factors** - Fleet capacity, vessel availability, scrapping rates
- **Demand factors** - Commodity trade volumes, seasonal patterns
- **Route analysis** - Specific trade route performance (e.g., Brazil-China iron ore)
- **Market events** - Port congestion, weather disruptions, infrastructure issues
- **Outlook** - Short to medium-term expectations

#### For Containerized Freight Index:
- **Route-specific analysis** - Major lanes (Asia-Europe, Trans-Pacific, etc.)
- **Container availability** - Equipment shortages or surpluses
- **Port congestion** - Delays at major container ports
- **Carrier strategies** - Shipping line capacity management
- **Trade imbalances** - Empty container repositioning costs
- **Outlook** - Expected cost trends

**How to Use:**
1. **Read analysis for relevant indices** - Focus on indices affecting your commodities
2. **Identify driving factors** - Understand whether changes are supply or demand driven
3. **Assess duration** - Determine if issues are temporary or structural
4. **Cross-reference with news** - Connect analysis to current events
5. **Inform logistics strategy** - Adjust shipping plans based on insights

---

## Understanding the Baltic Dry Index

### Components of BDI

The Baltic Dry Index is actually a composite of several sub-indices:

| Sub-Index | Vessel Type | Typical Cargo | Weight in BDI |
|-----------|-------------|---------------|---------------|
| **Capesize** | 100,000+ DWT | Iron ore, coal | 40% |
| **Panamax** | 60,000-80,000 DWT | Coal, grain | 30% |
| **Supramax** | 50,000-60,000 DWT | Minor bulk cargo | 30% |

**DWT = Deadweight Tonnage** (cargo carrying capacity)

### Why BDI Matters

1. **Economic Indicator** - Leading indicator of global economic activity
2. **Pure Supply-Demand** - Not influenced by speculation (no futures market for freight)
3. **Commodity Costs** - Directly impacts delivered cost of bulk commodities
4. **Supply Chain Health** - Reveals logistics bottlenecks and capacity issues

### BDI Interpretation Guide

| BDI Level | Market Condition | Implications |
|-----------|------------------|--------------|
| **< 1,000** | Very weak demand | Oversupply of vessels, low commodity trade |
| **1,000 - 1,500** | Below average | Moderate shipping availability |
| **1,500 - 2,000** | Normal range | Balanced supply and demand |
| **2,000 - 3,000** | Strong market | Tight capacity, high commodity demand |
| **> 3,000** | Extremely tight | Severe capacity constraints, potential delays |

---

## Understanding Containerized Freight

### Key Trade Routes

The CFI typically tracks major containerized trade lanes:

1. **Asia-Europe** (Shanghai-Rotterdam)
2. **Trans-Pacific Eastbound** (Asia-US West Coast)
3. **Trans-Pacific Westbound** (US-Asia)
4. **Asia-Middle East/Mediterranean**
5. **Intra-Asia**

### Container Shipping Dynamics

**Factors Affecting Rates:**
- **Peak season** (August-October typically highest)
- **Chinese New Year** (January-February disruption)
- **Port congestion** (delays increase costs)
- **Fuel costs** (bunker fuel surcharges)
- **Trade imbalances** (empty container repositioning)
- **Carrier alliances** (shipping line coordination)

---

## Data Sources and Update Schedule

### Trading Economics
**Coverage:**
- Baltic Dry Index (daily)
- Expert forecasts and analysis
- Historical index data
- Market commentary

**Update Frequency:** Daily at market close

### Reuters
**Coverage:**
- Containerized Freight Index
- Route-specific rates
- Port congestion data
- Shipping industry news

**Update Frequency:** Real-time during market hours

---

## Using the Transport Prices Dashboard

### Daily Workflow

```
1. Morning Check:
   - Review "Happening Now" panel for overnight index changes
   - Note any indices with >10% WoW changes
   - Check for divergence between BDI and CFI

2. Commodity-Specific Analysis:
   - Review Transit Type Table for your key commodities
   - Assess relevant index trends
   - Cross-check with Commodity Prices for total cost impact

3. Forecast Review (Weekly):
   - Review quarterly forecasts for logistics planning
   - Assess if current trends match forecast direction
   - Update cost projections and procurement timing

4. Deep Dive (As Needed):
   - Read expert analysis for concerning movements
   - Check News Dashboard for related disruptions
   - Contact logistics providers for real-world confirmation
```

### Alert Configuration

Configure alerts for:
- ⚠️ BDI or CFI week-over-week changes exceeding ±15%
- ⚠️ Indices crossing predefined cost thresholds
- ⚠️ Forecast changes indicating trend reversals
- ⚠️ Sustained high levels (>3,000 BDI for multiple weeks)
- ⚠️ Rapid declines indicating demand concerns

Contact your system administrator to set up custom transport price alerts.

---

## Integration with Other Dashboards

### Cross-Reference Matrix

| Transport Signal | Check Dashboard | Look For |
|------------------|-----------------|----------|
| Sharp BDI increase | Commodity Prices | Grain/coal price impacts |
| BDI decline | Supply & Demand | Demand reduction indicators |
| CFI spike | Israel Imports | Container cargo delay risks |
| Route-specific issues | News | Port disruptions, trade barriers |

**Workflow:** Use transport indices to assess logistics risks for commodities tracked in other dashboards.

---

## Limitations and Considerations

### Index vs. Contract Rates
- **Indices are benchmarks** - Actual contract rates may differ
- **Route variations** - Specific trade lanes may not match index movement
- **Contract types** - Spot vs. long-term contracts have different dynamics

### Freight is Just One Component
- **Total Delivered Cost** includes: commodity price + freight + insurance + port fees + customs
- **Currency fluctuations** affect international shipping contracts
- **Time value** - Slower shipping (lower cost) may not be optimal

### Market Volatility
- **High volatility** in shipping markets
- **Event-driven** - Weather, strikes, accidents cause sudden spikes
- **Seasonal patterns** - Strong annual cycles in some routes

---

## Glossary of Shipping Terms

**DWT (Deadweight Tonnage)** - Maximum cargo weight a vessel can carry

**TEU (Twenty-foot Equivalent Unit)** - Standard container measurement

**Charter Rate** - Cost to hire a vessel for a period

**Spot Market** - Immediate shipping contracts (vs. long-term contracts)

**Ballast** - Vessel traveling empty (no cargo)

**Bunker Fuel** - Heavy fuel oil used by ships

**Demurrage** - Fees for delaying vessel beyond agreed time

**Laytime** - Agreed time for loading/unloading cargo

---

## Transport Price Weights File

### Overview

The **Transport Price Weights** file (`transport price weights.xlsx`) is a configuration file used by the KPIs Dashboard to calculate the Transport Price Score. This file defines the relative importance (weights) of each shipping index in the weighted average calculation.

### File Purpose

The weights file ensures that the Transport Price Score accurately reflects the relevance of different shipping indices to Israeli strategic commodities. By assigning appropriate weights to Baltic Dry Index (BDI) and Containerized Freight Index (CFI), the system can produce a more accurate risk assessment.

### File Location

The `transport price weights.xlsx` file is located in the project root directory alongside the documentation files.

### File Structure

The Excel file contains:
- **Index Weights**: Weight assignments for BDI and CFI indices
- **Commodity Mapping**: How different commodities relate to each index
- **Weight Configuration**: Settings that determine how index changes contribute to the final score
- **Historical Adjustments**: Any changes to weights over time (if tracked)

### How It Works

1. **Index Monitoring**: The system continuously monitors week-over-week changes in BDI and CFI
2. **Weight Application**: Each index change is multiplied by its corresponding weight from the weights file
3. **Score Calculation**: The weighted changes are summed: `Weighted Momentum % = Σ(Index WoW Change % × Weight)`
4. **Risk Assessment**: The resulting score is compared against risk thresholds to determine the color-coded indicator on the KPIs Dashboard

### Weight Configuration Logic

Weights are typically assigned based on:

- **Transport Method Relevance**: 
  - Commodities primarily shipped via bulk carriers (e.g., coal, grain, iron ore) → Higher BDI weight
  - Commodities primarily shipped via containers (e.g., manufactured goods, refined products) → Higher CFI weight
  - Commodities using both methods → Balanced weights

- **Israeli Import Patterns**: 
  - Analysis of historical import data to determine which indices better reflect Israeli supply chain costs
  - Consideration of trade routes and shipping methods commonly used for Israeli imports

- **Strategic Importance**: 
  - Critical commodities may have adjusted weights to ensure their transport cost changes are properly reflected
  - Weights may be updated to reflect changes in commodity mix or strategic priorities

### Updating Weights

!!! warning "Administrator Access Required"
    Modifying the transport price weights file requires system administrator access. Changes to weights will affect Transport Price Score calculations across all commodities.

To update weights:
1. Contact your system administrator
2. Review current shipping patterns and commodity mix
3. Adjust weights based on strategic priorities or data analysis
4. Test changes in a development environment before deploying to production
5. Document weight changes and rationale

### Integration with KPIs Dashboard

The Transport Price Score displayed on the KPIs Dashboard uses these weights to:
- Provide a single, unified indicator of transport cost trends
- Reflect the combined impact of both bulk and containerized shipping costs
- Enable quick identification of logistics-related supply chain risks

For more details on how the Transport Price Score is calculated and interpreted, see the [KPIs Dashboard documentation](kpis.en.md#3-transport-price-score).

---

## Related Dashboards

- [KPIs Dashboard](kpis.en.md) - Transport Price Score calculation
- [Commodity Prices Dashboard](commodity_prices.en.md) - Total delivered cost assessment
- [News Dashboard](news.en.md) - Transportation disruption events
- [Worldwide Exports Dashboard](worldwide_exports.en.md) - Trade volume verification

---

*Last Updated: December 2025*

