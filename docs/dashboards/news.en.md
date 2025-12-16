# News Analysis Dashboard

## Overview

The **News Analysis Dashboard** provides a detailed view and analysis of recent developments impacting commodity markets. It tracks key news categories, market sentiment, and significant events influencing supply chain and trade dynamics.

!!! info "Dashboard Purpose"
    This dashboard aggregates and analyzes news from multiple sources to identify emerging risks, track sentiment trends, and highlight critical events affecting commodity supply chains. It serves as an early warning system by detecting negative sentiment shifts before they manifest in quantitative metrics.

---

## Shortage Category Definitions

The system automatically classifies news articles into the following categories using AI-powered natural language processing:

### TRANSPORT_DISRUPTION 🚢
**Definition:** Issues affecting the physical movement of commodities

**Examples:**
- Shipping delays and port congestion
- Vessel shortages or mechanical failures
- Transportation infrastructure problems
- Freight capacity constraints
- Distribution network breakdowns
- Route closures or diversions

**Risk Impact:** Immediate effect on delivery times and costs

---

### PRODUCTION_DROP 🏭
**Definition:** Factors causing reduced production or manufacturing capacity

**Examples:**
- Reduced crop yields (weather, pests, disease)
- Labor shortages or strikes
- Processing plant closures or slowdowns
- Equipment failures
- Resource constraints (water, energy, inputs)

**Risk Impact:** Mid-term supply reduction

---

### EXPORT_DROP 📉
**Definition:** Declining export volumes or new export restrictions

**Examples:**
- Export bans or quotas
- Trade policy changes reducing exports
- Exporter country internal consumption priorities
- Reduced competitiveness in export markets

**Risk Impact:** Supply source reduction for importing countries

---

### IMPORT_DROP 📊
**Definition:** Falling imports or reduced import capacity

**Examples:**
- Declining demand in importing countries
- Economic recession reducing purchases
- Import restrictions or increased tariffs
- Currency devaluation limiting import capacity

**Risk Impact:** Demand-side market weakness

---

### SUPPLY_SHORTAGE ⚠️
**Definition:** Actual or anticipated shortages in supply

**Examples:**
- Low inventory levels
- Depleting stockpiles
- Supply constraints announced by producers
- Market shortages reported
- Allocation systems implemented

**Risk Impact:** Critical immediate concern

---

### TRADE_BARRIER 🚧
**Definition:** Policy or regulatory impediments to trade

**Examples:**
- New tariffs or duties
- Import/export restrictions
- Regulatory changes
- Sanctions or embargoes
- Quota systems
- Non-tariff barriers (standards, certifications)

**Risk Impact:** Market access constraints

---

### NEUTRAL ✅
**Definition:** No significant shipping or trade flow issues mentioned

**Examples:**
- Positive market developments
- General industry news without risk factors
- Statistical reports without concerning trends
- Routine market updates

**Risk Impact:** None or positive

---

### COMMODITY_SUBSTITUTES 🔄
**Definition:** Supply and demand dynamics of alternative commodities

**Examples:**
- Price competition between substitute goods (e.g., wheat vs. corn)
- Shifting consumption patterns
- New product alternatives entering market
- Technology enabling substitution

**Risk Impact:** Indirect market effects

---

## Dashboard Components

### News Stories Chart (Left Panel)

**Chart Type:** Combined bar and line chart

**Description:** Shows news story frequency by shortage category over time. This visualization helps identify:
- **Trending issues** - Categories with increasing story counts
- **Emerging crises** - Sudden spikes in specific categories
- **Overall news volume** - Total coverage intensity (black line)

**Time Range:** Typically displays 3-6 months of data

**Interpretation:**
- Increasing bars in risk categories → Growing concerns
- Declining bars → Improving conditions or reduced attention
- High overall line → Heightened market uncertainty
- Concentrated bars in single category → Focused issue

---

### News Negativity Panel (Right Panel)

**Metric Display:** Month-over-month change in news negativity

**Calculation:**
```
News Negativity Change = ((Risk-News Last 30 Days - Risk-News Prior 30 Days) / 
                           Risk-News Prior 30 Days) × 100
```

**Definition of Risk-News:** Articles classified in any shortage category **except** "NEUTRAL". These represent supply chain risk factors.

**Interpretation:**
- **Positive percentage** → Increasing negative sentiment (concern)
- **Negative percentage** → Decreasing negative sentiment (improvement)
- **Large changes** (>50%) → Significant sentiment shift
- **Stable values** → Consistent risk environment

**Use Case:** Quick assessment of whether the overall news environment is improving or deteriorating.

---

### Top News Section

**Display:** Ranked list of the three most important news stories from the past 30 days

**Importance Score:** 0-2 scale where:
- **0** - Low importance / routine update
- **1** - Moderate importance / noteworthy event
- **2** - High importance / significant market impact

**Importance Definition:** Potential level of impact that economic events have on financial markets and supply chains.

**Selection Criteria:** Stories are ranked by:
1. Importance score (primary)
2. Recency (secondary)
3. Relevance to tracked commodities (tertiary)

**How to Use:**
- Read these first for situational awareness
- Click headlines for full article context
- Note which commodities are mentioned
- Assess cumulative impact of multiple stories

---

### Top Shortage Categories Section

**Display:** Ranked list of the three most frequent shortage categories by Frequency & Importance score

**Calculation:**
```
Frequency & Importance Score = 
    [Count(news_id) + Sum(importance)] / Grand Total × 100
```

**What it measures:** Combined metric reflecting both:
- How many articles mention this category
- How important those articles are rated

**Interpretation:**
- High-scoring categories are persistent concerns
- Compare scores to identify primary vs. secondary issues
- Track changes over time to see evolving risk profiles

**Example:**
If TRANSPORT_DISRUPTION has a 35% score, it means 35% of the combined news count and importance points relate to transportation issues.

---

### News Feed Table

**Display:** Detailed data table of recent news items

**Columns:**
- **Date** - Publication or event date
- **Commodity** - Affected commodity or commodity group
- **Category** - Shortage category classification
- **Importance** - 0-2 importance rating
- **Headline** - Article headline or summary
- **Description** - Detailed description of market conditions and factors
- **Source** - News source or data provider

**Features:**
- **Sortable columns** - Click headers to sort by any field
- **Filterable** - Filter by commodity, category, date range
- **Searchable** - Full-text search within headlines and descriptions
- **Exportable** - Download filtered results to CSV

**How to Use:**
1. **Scan for your commodities** - Filter to specific items of interest
2. **Review high-importance items** - Sort by importance
3. **Analyze category patterns** - Group by category to see concentrations
4. **Track sources** - Identify if single source or multiple independent reports
5. **Export for reporting** - Generate custom reports for stakeholders

---

## Data Sources

### Trading Economics
**What we get:**
- Market news and analysis
- Economic indicators affecting commodities
- Expert commentary
- Price movement explanations

**Update Frequency:** Continuous (multiple updates daily)

**Coverage:** Global commodity markets, economic trends, policy changes

---

## Update Schedule

**Data Collection:** Continuous throughout the day

**Processing:** Articles processed hourly with AI classification

**Dashboard Refresh:** Real-time (new stories appear within 1-2 hours of publication)

**Historical Data:** Rolling 12-month archive accessible

---

## Using the News Dashboard Effectively

### Daily Workflow

```
1. Morning Check:
   - Review News Negativity Panel for overnight changes
   - Scan Top News for critical developments
   - Check Top Shortage Categories for persistent issues

2. Deep Dive:
   - For concerning commodities, filter News Feed Table
   - Read full context of high-importance stories
   - Cross-reference with KPIs Dashboard for data confirmation

3. Weekly Review:
   - Analyze News Stories Chart for trending patterns
   - Document significant category shifts
   - Compare to previous weeks for acceleration/deceleration

4. Reporting:
   - Export relevant news items
   - Include in stakeholder briefings
   - Highlight changes in sentiment metrics
```

### Best Practices

1. **Context is Critical** - Not all negative news impacts supply chains equally
2. **Verify with Data** - Confirm news-based concerns with quantitative dashboards
3. **Source Diversity** - Multiple independent sources increase credibility
4. **Regional Specifics** - Consider whether news affects key supply sources
5. **Time Sensitivity** - Some events have immediate impact, others are longer-term

### Alert Configuration

Configure alerts for:
- ⚠️ High-importance (2.0) news stories published
- ⚠️ News Negativity increases by >50% month-over-month
- ⚠️ Specific commodities appear in multiple risk categories simultaneously
- ⚠️ New trade barriers announced for strategic commodities
- ⚠️ Transportation disruptions affecting key shipping routes

Contact your system administrator to set up custom news alerts.

---

## Integration with Other Dashboards

The News Dashboard provides qualitative context for quantitative metrics:

| Quantitative Signal | News Dashboard Context |
|---------------------|------------------------|
| Price spike in Commodity Prices | Look for supply shortage or production drop news |
| Transport Price increase | Check for transportation disruption stories |
| Export volume decline | Search for export drop or trade barrier news |
| Supply shortage KPI alert | Verify with production drop and supply shortage articles |

**Workflow:** Use News Dashboard to investigate "why" behind metric changes in other dashboards.

---

## Limitations and Considerations

### Data Quality
- **Translation accuracy** - Some sources require translation; nuances may be lost
- **Classification accuracy** - AI classification is ~90-95% accurate; manual review may be needed for critical decisions
- **Source bias** - Different news sources may have regional or political biases

### Coverage Gaps
- **Emerging markets** - Less comprehensive coverage in some regions
- **Proprietary information** - Company-specific supply issues may not be public
- **Time lag** - Some events may not be reported immediately

### False Positives/Negatives
- **Speculation vs. fact** - News may report rumors or speculation
- **Sensationalism** - Some sources may exaggerate for attention
- **Underreporting** - Positive developments may receive less coverage

**Recommendation:** Always corroborate news-based insights with data from quantitative dashboards before making critical decisions.

---

## Glossary of News Terms

**Sentiment** - Overall positive, neutral, or negative tone of news coverage

**Risk-News** - Articles indicating potential supply chain disruptions (non-neutral categories)

**Importance Rating** - Assessed impact potential on financial markets and supply chains

**Frequency Factor** - Normalized measure of news volume accounting for baseline coverage

**Grand Total** - Sum of all news count and importance scores across all categories

---

## Related Dashboards

- [KPIs Dashboard](kpis.en.md) - Overall risk score includes News Score
- [Commodity Prices Dashboard](commodity_prices.en.md) - Price reactions to news events
- [Supply & Demand Dashboard](supply_demand.en.md) - Production and supply data verification
- [Worldwide Exports Dashboard](worldwide_exports.en.md) - Export flow verification

---

*Last Updated: December 2025*

