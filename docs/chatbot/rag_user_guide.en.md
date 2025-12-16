# AI Chatbot User Guide

## Overview

The SCAR system includes an **AI-powered chatbot** connected to all system data sources, enabling natural language queries and intelligent analysis of supply chain information. The chatbot uses RAG (Retrieval-Augmented Generation) technology to provide accurate, context-aware responses based on the latest data.

!!! info "Coming Soon"
    The AI Chatbot feature is currently **in development** and will be available in a future release. This guide describes the planned functionality.

---

## What is the SCAR Chatbot?

The SCAR Chatbot is an intelligent conversational interface that allows users to:

- **Ask questions in natural language** - No need to learn complex queries or dashboard navigation
- **Get instant answers** - Rapid responses to data questions without manual dashboard searching
- **Analyze trends** - Request analysis of patterns across multiple data dimensions
- **Generate insights** - AI-powered interpretation of data relationships
- **Create custom reports** - Export answers and analysis for stakeholder briefings

---

## Key Features

### 1. Natural Language Queries

Ask questions in plain English (or Hebrew) just as you would ask a colleague:

**Example Questions:**
- "What commodities showed price increases last week?"
- "Which countries reduced wheat exports to Israel in the past quarter?"
- "Show me transport cost trends for container shipping"
- "Are there any supply disruptions for crude oil?"
- "What is the current sentiment for sugar in the news?"

### 2. Multi-Source Data Integration

The chatbot has access to all SCAR data sources:

- ✅ Commodity prices (futures, spot, forecasts)
- ✅ News articles and sentiment analysis
- ✅ Transport indices and freight rates
- ✅ Supply and demand statistics
- ✅ Global export data
- ✅ Israeli import data
- ✅ Expert analysis and outlooks
- ✅ Historical trends and patterns

### 3. Contextual Understanding

The chatbot maintains conversation context, allowing follow-up questions:

**Example Conversation:**
```
User: "Show me wheat imports to Israel last month"
Bot: [Provides data on wheat imports]

User: "Which country was the top supplier?"
Bot: [Identifies top supplier without needing to repeat "wheat imports to Israel"]

User: "Has that changed from last year?"
Bot: [Compares current to previous year automatically]
```

### 4. Data Visualization

The chatbot can generate charts and visualizations:

- **Time-series charts** - Trend analysis over time
- **Comparison charts** - Side-by-side comparisons
- **Geographic maps** - Regional visualizations
- **Distribution charts** - Breakdown by category

### 5. Export and Sharing

Responses can be:

- 📄 **Exported to PDF** - For reports and documentation
- 📊 **Downloaded as Excel** - For further analysis
- 🔗 **Shared via link** - With colleagues
- 📧 **Emailed** - Directly from the interface

---

## How to Use the Chatbot

### Accessing the Chatbot

1. **From any dashboard** - Click the chatbot icon (💬) in the bottom-right corner
2. **From the main menu** - Select "AI Assistant" from the navigation menu
3. **Keyboard shortcut** - Press `Ctrl + K` (Windows) or `Cmd + K` (Mac)

### Asking Effective Questions

#### Best Practices

**Be Specific:**
- ❌ "Tell me about wheat"
- ✅ "What was the week-over-week price change for wheat futures?"

**Include Time Periods:**
- ❌ "How much corn was imported?"
- ✅ "How much corn was imported to Israel in October 2024?"

**Specify Commodities:**
- ❌ "Show import trends"
- ✅ "Show wheat and corn import trends to Israel for the past 6 months"

**Ask for Comparisons:**
- ✅ "Compare crude oil prices between Q3 and Q4 2024"
- ✅ "Which had a bigger price increase, wheat or corn?"

**Request Analysis:**
- ✅ "What factors drove the increase in container freight costs?"
- ✅ "Why did Brazilian soybean exports to Israel decrease?"

#### Question Types

**1. Factual Queries**
- "What is the current Baltic Dry Index?"
- "How many countries export wheat to Israel?"
- "What was Israel's total grain import last month?"

**2. Trend Analysis**
- "Show me commodity price trends for the past year"
- "Are transport costs increasing or decreasing?"
- "What is the 3-month trend for sugar prices?"

**3. Comparative Analysis**
- "Compare Israeli imports from Ukraine vs. Russia"
- "Which commodity had the highest price volatility?"
- "How do current wheat prices compare to 5-year averages?"

**4. Anomaly Detection**
- "Are there any unusual patterns in rice imports?"
- "Which commodities have red KPI scores?"
- "Show me commodities with sudden price spikes"

**5. Causal Analysis**
- "Why did diesel prices increase last month?"
- "What caused the drop in Ukrainian wheat exports?"
- "Explain the recent Baltic Dry Index decline"

**6. Forecast Questions**
- "What is the forecast for corn prices next quarter?"
- "Are crude oil imports expected to increase?"
- "What does Trading Economics predict for container freight?"

---

## Advanced Features

### 1. Multi-Step Analysis

The chatbot can perform complex, multi-step analysis:

**Example:**
```
User: "Analyze the impact of reduced Russian wheat exports on 
Israeli wheat prices and identify alternative suppliers"

Bot: 
1. Shows Russian wheat export decline data
2. Displays Israeli wheat price correlation
3. Lists alternative wheat exporters by volume
4. Provides recommendations for diversification
```

### 2. Threshold Alerts

Set up custom alerts through conversation:

**Example:**
```
User: "Alert me when wheat prices increase by more than 10%"
Bot: "Alert created. You'll be notified when wheat futures prices 
increase by more than 10% week-over-week."
```

### 3. Report Generation

Request customized reports:

**Example:**
```
User: "Create a monthly summary of all KPI changes and significant 
news events for wheat, corn, and soybeans"

Bot: [Generates comprehensive report with charts, tables, and narrative]
```

### 4. Data Exploration

Browse data interactively:

**Example:**
```
User: "Show me the top 10 suppliers for each grain commodity"
Bot: [Displays ranked table]

User: "Filter to only those with >5% market share"
Bot: [Updates table with filter]

User: "Sort by price competitiveness"
Bot: [Re-sorts data]
```

---

## Understanding Chatbot Responses

### Response Components

**1. Direct Answer**
- Clear, concise answer to your question
- Numerical data when applicable
- Source attribution

**2. Context and Explanation**
- Why the data matters
- Relevant background information
- Related insights

**3. Visualizations** (when appropriate)
- Charts and graphs
- Maps and heat maps
- Tables and matrices

**4. Sources and Citations**
- Data source references
- Update timestamps
- Data quality indicators

**5. Suggested Follow-Ups**
- Related questions you might want to ask
- Deeper analysis options
- Connected data points

### Confidence Indicators

The chatbot indicates confidence levels:

- **🟢 High Confidence** - Answer based on clear, recent data
- **🟡 Medium Confidence** - Answer requires assumptions or has data gaps
- **🔴 Low Confidence** - Limited data available, answer is speculative

### Data Quality Warnings

The chatbot will alert you to:

- ⚠️ **Data Lag** - "This data is from 2 months ago due to reporting delays"
- ⚠️ **Missing Data** - "Data not available for 3 countries in this period"
- ⚠️ **Revised Data** - "These figures were revised from previous estimates"

---

## Tips and Tricks

### Getting Better Answers

1. **Start Broad, Then Narrow**
   - First ask: "Show me wheat import trends"
   - Then ask: "Focus on the past 3 months"
   - Finally: "Why did imports drop in October?"

2. **Use Follow-Up Questions**
   - Build on previous answers
   - The chatbot remembers conversation context
   - Reference previous responses ("that country", "those commodities")

3. **Request Specific Formats**
   - "Show as a table"
   - "Display as a line chart"
   - "Give me just the numbers"

4. **Combine Multiple Questions**
   - "Compare X to Y and explain the difference"
   - "Show trends and identify anomalies"

5. **Ask for Explanations**
   - "Why did this happen?"
   - "What does this mean?"
   - "Explain the implications"

### Conversation Management

**Starting Over:**
- Say "start new conversation" to clear context
- Use "forget previous questions" to reset

**Clarifying:**
- If the answer isn't what you expected, say "that's not what I meant"
- Rephrase your question with more detail
- Ask "can you clarify?"

**Refining:**
- "Show more details"
- "Summarize that"
- "Break down by country/commodity/time period"

---

## Limitations and Considerations

### What the Chatbot Can Do

✅ Answer questions based on SCAR system data
✅ Analyze trends and patterns
✅ Generate visualizations
✅ Explain data and provide context
✅ Compare data across dimensions
✅ Identify anomalies
✅ Create custom reports

### What the Chatbot Cannot Do

❌ Access data outside the SCAR system
❌ Make procurement decisions (provides data for decisions)
❌ Predict unforeseen events (earthquakes, wars, etc.)
❌ Override system data or create new data
❌ Execute trades or make commitments
❌ Access classified or restricted information

### Data Limitations

- **Historical Scope** - Limited to data available in SCAR (varies by source)
- **Update Frequency** - Answers reflect most recent data, but some sources have lag
- **Data Quality** - Chatbot flags quality issues but cannot fix source data problems
- **Coverage Gaps** - Some countries/commodities have limited data

### AI Limitations

- **Interpretation** - AI may misinterpret complex or ambiguous questions
- **Context** - May not fully understand nuanced geopolitical or economic factors
- **Bias** - Training data and algorithms may have inherent biases
- **Hallucination** - In rare cases, may provide confident but incorrect answers

**Best Practice:** Always verify critical information using the dashboard screens and official data sources before making significant decisions.

---

## Frequently Asked Questions

### Q: Can the chatbot answer questions in Hebrew?
**A:** Yes, the chatbot supports both English and Hebrew queries and responses.

### Q: How current is the chatbot's data?
**A:** The chatbot accesses the same data as the dashboard screens, updated according to each data source's schedule (daily for prices/news, monthly for trade statistics).

### Q: Can I save my conversations?
**A:** Yes, conversations can be saved, exported, and shared with colleagues.

### Q: Is my conversation private?
**A:** Conversations are logged for system improvement but are only accessible to authorized users. Do not share sensitive information beyond what's already in the SCAR system.

### Q: What if the chatbot gives an incorrect answer?
**A:** Use the "Report Issue" button to flag incorrect responses. This helps improve the system. Always verify critical information using dashboard data.

### Q: Can the chatbot create custom dashboards?
**A:** Not yet, but this feature is planned for future releases.

### Q: How do I provide feedback on the chatbot?
**A:** Use the thumbs up/down buttons after each response, or click "Provide Detailed Feedback" to submit suggestions.

---

## Support and Training

### Getting Help

- **In-app Help** - Click the "?" icon in the chatbot interface
- **Tutorials** - Access video tutorials from the Help menu
- **IT Support** - Contact your system administrator for technical issues
- **User Community** - Share tips and best practices with other users

### Training Resources

- **Getting Started Guide** - Basic chatbot usage (15 minutes)
- **Advanced Features** - Complex queries and analysis (45 minutes)
- **Best Practices Workshop** - Effective question asking (2 hours)
- **Monthly Webinars** - New features and tips

Contact your training coordinator to schedule sessions.

---

## Future Enhancements

Planned chatbot improvements:

- **Voice Input** - Ask questions using voice commands
- **Predictive Suggestions** - Chatbot suggests relevant questions based on current data
- **Automated Briefings** - Daily/weekly summary reports generated automatically
- **Integration with External Tools** - Export directly to PowerPoint, Tableau, etc.
- **Multi-User Collaboration** - Shared conversation spaces for team analysis
- **Custom AI Agents** - Specialized chatbots for specific commodities or regions

---

*The AI Chatbot is a powerful tool, but it's designed to augment, not replace, human expertise and judgment. Always apply critical thinking to AI-generated insights.*

---

*Last Updated: December 2025*

